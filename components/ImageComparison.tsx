
import React, { useState, useRef, useEffect } from 'react';

interface ImageComparisonProps {
  original: string;
  generated: string;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({ original, generated }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="comparison-slider relative w-full aspect-video rounded-xl shadow-2xl bg-black cursor-col-resize group"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onTouchMove={handleMove}
      onMouseDown={handleMove}
    >
      {/* Generated Image (Bottom) */}
      <img 
        src={generated} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover select-none"
      />
      
      {/* Original Image (Top, Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden select-none"
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src={original} 
          alt="Before" 
          className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
          style={{ width: `${containerRef.current?.offsetWidth || 800}px` }}
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="comparison-handle flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="bg-white p-2 rounded-full shadow-lg border border-gray-200">
           <i className="fa-solid fa-arrows-left-right text-slate-600 text-xs"></i>
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
