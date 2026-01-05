
export interface StyleOption {
  id: string;
  name: string;
  category: 'Architect' | 'Period' | 'Culture';
  description: string;
  prompt: string;
  thumbnail: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  imageUpdate?: string; // Optional new image base64 if the AI edited it
}

export interface AppState {
  originalImage: string | null;
  generatedImage: string | null;
  isProcessing: boolean;
  selectedStyle: StyleOption | null;
  chatHistory: ChatMessage[];
  error: string | null;
}
