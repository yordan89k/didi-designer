
import React from 'react';
import { StyleOption } from '../types';
import { STYLES } from '../constants';

interface StyleSelectorProps {
  selectedId?: string;
  onSelect: (style: StyleOption) => void;
  disabled?: boolean;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedId, onSelect, disabled }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 px-1 transition-colors">Global Styles & Cultures</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {STYLES.map((style) => (
            <button
              key={style.id}
              disabled={disabled}
              onClick={() => onSelect(style)}
              className={`group relative text-left rounded-xl overflow-hidden border-2 transition-all ${
                selectedId === style.id 
                  ? 'border-slate-900 dark:border-white ring-2 ring-slate-900/10 dark:ring-white/20' 
                  : 'border-transparent hover:border-slate-200 dark:hover:border-slate-700'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="aspect-[4/3] w-full relative">
                <img 
                  src={style.thumbnail} 
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {/* Increased gradient opacity for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3 text-white w-full">
                  {/* Increased font size to text-sm and weight to extrabold */}
                  <p className="text-sm font-extrabold leading-tight drop-shadow-md">{style.name}</p>
                </div>
              </div>
              {selectedId === style.id && (
                <div className="absolute top-2 right-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-1 rounded-full shadow-lg">
                  <i className="fa-solid fa-check text-[8px]"></i>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleSelector;
