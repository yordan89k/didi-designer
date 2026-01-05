
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

// Using gemini-2.5-flash-image for image generation and editing
// Using gemini-3-pro-preview for advanced reasoning and chat

export const transformImage = async (base64Image: string, prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = "gemini-2.5-flash-image";

  // The base64 string from input usually includes "data:image/png;base64,"
  const cleanBase64 = base64Image.split(',')[1] || base64Image;
  const mimeType = base64Image.match(/data:(.*?);/)?.[1] || 'image/png';

  const response = await ai.models.generateContent({
    model,
    contents: {
      parts: [
        {
          inlineData: {
            data: cleanBase64,
            mimeType: mimeType,
          },
        },
        { text: prompt },
      ],
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }

  throw new Error("No image data returned from AI");
};

export const chatWithAI = async (
  message: string, 
  history: { role: 'user' | 'assistant', content: string }[],
  currentImage?: string
): Promise<{ text: string, newImage?: string }> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  // If the user is asking for a change to the image, we use the image-edit model
  const isImageEditRequest = /change|add|remove|make|turn|replace|alter|style|color|light/i.test(message);

  if (isImageEditRequest && currentImage) {
    try {
      const cleanBase64 = currentImage.split(',')[1] || currentImage;
      const mimeType = currentImage.match(/data:(.*?);/)?.[1] || 'image/png';

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-image",
        contents: {
          parts: [
            {
              inlineData: {
                data: cleanBase64,
                mimeType: mimeType,
              },
            },
            { text: `Edit this image according to the request: ${message}. Keep the overall structure but apply the specific changes.` },
          ],
        },
      });

      let textResult = "I've updated the image based on your request.";
      let newImage: string | undefined;

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          newImage = `data:image/png;base64,${part.inlineData.data}`;
        } else if (part.text) {
          textResult = part.text;
        }
      }
      return { text: textResult, newImage };
    } catch (err) {
      console.error("Image edit failed, falling back to text", err);
    }
  }

  // Regular chat/info query
  const chatModel = ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: "You are an expert architectural and interior design consultant. Help the user refine their vision, explain architectural concepts, or suggest changes to their designs. If they ask for image changes, suggest descriptions that can be used for editing.",
    }
  });

  // Reconstruct history
  // Note: Simple loop to send messages to establish context since our SDK's chat history management might vary
  // For simplicity, we just send the final message with history summary context if needed, 
  // but better to use the chat object.
  const response = await chatModel.sendMessage({ message });
  return { text: response.text || "I'm sorry, I couldn't process that." };
};
