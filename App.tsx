
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import StyleSelector from './components/StyleSelector';
import ImageComparison from './components/ImageComparison';
import Chatbot from './components/Chatbot';
import { AppState, StyleOption, ChatMessage } from './types';
import { transformImage, chatWithAI } from './services/geminiService';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    originalImage: null,
    generatedImage: null,
    isProcessing: false,
    selectedStyle: null,
    chatHistory: [],
    error: null,
  });
  
  const [chatLoading, setChatLoading] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isComparisonMode, setIsComparisonMode] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize dark mode from system preference or default to light
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
       // Optional: Default to user system preference
       // setDarkMode(true);
    }
  }, []);

  // Update HTML class for Tailwind dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Close full screen/modals on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullScreen(false);
        setShowAbout(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setState(prev => ({
          ...prev,
          originalImage: event.target?.result as string,
          generatedImage: null, // Reset generated image when a new one is uploaded
          selectedStyle: null,
          chatHistory: [],
          error: null,
        }));
        setIsComparisonMode(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyStyle = async (style: StyleOption) => {
    if (!state.originalImage) return;

    setState(prev => ({ ...prev, isProcessing: true, selectedStyle: style, error: null }));
    setIsComparisonMode(true); // Reset comparison mode when applying a new style

    try {
      const result = await transformImage(state.originalImage, style.prompt);
      setState(prev => ({ ...prev, generatedImage: result, isProcessing: false }));
    } catch (err) {
      setState(prev => ({ ...prev, isProcessing: false, error: "Failed to transform image. Please try again." }));
      console.error(err);
    }
  };

  const handleChat = async (message: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: Date.now(),
    };

    setState(prev => ({ ...prev, chatHistory: [...prev.chatHistory, userMsg] }));
    setChatLoading(true);

    try {
      // Use the generated image if it exists, otherwise the original
      const contextImage = state.generatedImage || state.originalImage || undefined;
      const history = state.chatHistory.map(m => ({ role: m.role, content: m.content }));
      
      const response = await chatWithAI(message, history, contextImage);
      
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text,
        timestamp: Date.now(),
      };

      setState(prev => ({ 
        ...prev, 
        chatHistory: [...prev.chatHistory, assistantMsg],
        generatedImage: response.newImage || prev.generatedImage 
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setChatLoading(false);
    }
  };

  const handleDownload = () => {
    const imgToDownload = state.generatedImage || state.originalImage;
    if (imgToDownload) {
      const link = document.createElement('a');
      link.href = imgToDownload;
      link.download = `didi-designer-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300">
      <Header 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        onOpenAbout={() => setShowAbout(true)}
      />
      
      <main className="flex-1 max-w-[1600px] mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Canvas Area */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 flex-1 flex flex-col min-h-[500px] transition-colors duration-300">
            {state.originalImage ? (
              <div className="flex-1 flex flex-col justify-center">
                <div className="relative group">
                  {state.generatedImage ? (
                    isComparisonMode ? (
                      <ImageComparison original={state.originalImage} generated={state.generatedImage} />
                    ) : (
                      <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden group">
                        <img src={state.generatedImage} alt="Redesigned Space" className="w-full h-full object-cover" />
                      </div>
                    )
                  ) : (
                    <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden group">
                      <img src={state.originalImage} alt="Workspace" className="w-full h-full object-cover" />
                      {state.isProcessing && (
                        <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm flex flex-col items-center justify-center transition-all">
                          <div className="w-12 h-12 border-4 border-slate-900 dark:border-white border-t-transparent rounded-full animate-spin"></div>
                          <p className="mt-4 font-semibold text-slate-900 dark:text-white animate-pulse">Architecting your vision...</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Action Bar overlay (Top Right) */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-white/90 dark:bg-slate-800/90 backdrop-blur text-slate-900 dark:text-white p-2 rounded-xl shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                      title="Upload new"
                    >
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                    </button>
                    {(state.generatedImage || state.originalImage) && (
                      <button 
                        onClick={handleDownload}
                        className="bg-white/90 dark:bg-slate-800/90 backdrop-blur text-slate-900 dark:text-white p-2 rounded-xl shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                        title="Download"
                      >
                        <i className="fa-solid fa-download"></i>
                      </button>
                    )}
                  </div>

                  {/* Full Screen Button (Bottom Right) */}
                  {(state.generatedImage || state.originalImage) && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent interfering with image comparison drag
                        setIsFullScreen(true);
                      }}
                      className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur text-slate-900 dark:text-white p-2 rounded-xl shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                      title="View Full Screen"
                    >
                      <i className="fa-solid fa-expand"></i>
                    </button>
                  )}
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {state.generatedImage ? (
                      <button
                        onClick={() => setIsComparisonMode(!isComparisonMode)}
                        className="flex items-center space-x-2 text-sm font-medium px-4 py-2 rounded-full border transition-all shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300"
                      >
                         <i className={`fa-solid ${isComparisonMode ? 'fa-sliders' : 'fa-image'}`}></i>
                         <span>{isComparisonMode ? 'Comparison Active' : 'Comparison Disabled'}</span>
                      </button>
                    ) : (
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 transition-colors">
                        {state.isProcessing ? 'Processing...' : 'Waiting for Style...'}
                      </span>
                    )}
                    {state.error && <span className="text-xs font-medium text-red-500">{state.error}</span>}
                  </div>
                  <div className="flex space-x-2">
                    <button 
                       onClick={() => setState(prev => ({...prev, generatedImage: null, selectedStyle: null}))}
                       className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium px-4 py-2 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all cursor-pointer group p-12 text-center"
              >
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <i className="fa-solid fa-cloud-arrow-up text-3xl text-slate-400 dark:text-slate-500"></i>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Design your Space</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">Upload a photo to start redesigning.</p>
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-xl font-semibold shadow-lg shadow-slate-900/10 dark:shadow-white/5 hover:shadow-slate-900/20 dark:hover:shadow-white/10 transition-all">
                  Upload
                </button>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileUpload} 
            />
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300">
             <div className="flex items-center space-x-2 mb-6">
                <i className="fa-solid fa-wand-magic-sparkles text-slate-900 dark:text-white transition-colors"></i>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">Select Style</h2>
             </div>
             <StyleSelector 
               selectedId={state.selectedStyle?.id} 
               onSelect={handleApplyStyle} 
               disabled={state.isProcessing || !state.originalImage} 
             />
          </div>
        </div>

        {/* Right Column: Chat/Sidebar */}
        <div className="lg:col-span-4 flex flex-col space-y-6 lg:h-[calc(100vh-8rem)] lg:sticky lg:top-24">
           <Chatbot 
              history={state.chatHistory} 
              onSendMessage={handleChat} 
              isLoading={chatLoading} 
           />
        </div>
        
      </main>

      <footer className="py-8 text-center text-slate-400 dark:text-slate-600 text-xs font-medium border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
        &copy; 2025 Didi Designer. Built with Gemini 2.5 Flash Image & Gemini 3 Pro.
      </footer>

      {/* About Modal */}
      {showAbout && (
        <div 
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowAbout(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative border border-slate-200 dark:border-slate-800"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowAbout(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-slate-900 dark:bg-white p-2 rounded-lg">
                <i className="fa-solid fa-compass-drafting text-white dark:text-slate-900 text-xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">About Didi Designer</h2>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              <p>
                Didi Designer is an AI-powered interior design hobby project that allows users to transform spaces instantly. By uploading a photo, users can apply various architectural styles and refine the results using a conversational AI chat interface.
              </p>
              <p>
                This application leverages the power of <strong>Google's Gemini 2.5 Flash Image</strong> for high-speed image transformations and <strong>Gemini 3 Pro</strong> for advanced reasoning and design consultation.
              </p>
              <p>
                Built with React, Tailwind CSS, and the latest generative AI technology.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <a 
                href="https://www.linkedin.com/in/yordan-kaloyanchev-13349984/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-slate-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Created by YordanK <i className="fa-brands fa-linkedin ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Modal */}
      {isFullScreen && (state.generatedImage || state.originalImage) && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsFullScreen(false)}
        >
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={() => setIsFullScreen(false)}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
              title="Close"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
          
          <img 
            src={state.generatedImage || state.originalImage!} 
            alt="Full Screen View" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default App;
