
import React from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  onOpenAbout: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme, onOpenAbout }) => {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 px-6 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-slate-900 dark:bg-white p-2 rounded-lg transition-colors duration-300">
            <i className="fa-solid fa-compass-drafting text-white dark:text-slate-900 text-xl"></i>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-none transition-colors duration-300">Didi Designer</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold transition-colors duration-300">Visionary Studio</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
             onClick={onOpenAbout}
             className="hidden sm:block text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow"
          >
             About
          </button>

          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
