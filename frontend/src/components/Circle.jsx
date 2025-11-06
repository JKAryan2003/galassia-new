import React, { useState } from 'react';
import { Package, Newspaper, Download, Image } from 'lucide-react';

export default function Circle() {
  const [hovered, setHovered] = useState(null);

  const sections = [
    { id: 'products', label: 'Fashion and Lifestyle', icon: Package, position: 'top-8 left-1/2 -translate-x-1/2' },
    { id: 'gallery', label: 'Film Making', icon: Image, position: 'right-8 top-1/2 -translate-y-1/2' },
    { id: 'downloads', label: 'Streaming Platform', icon: Download, position: 'bottom-8 left-1/2 -translate-x-1/2' },
    { id: 'news', label: 'Educational Content', icon: Newspaper, position: 'left-8 top-1/2 -translate-y-1/2' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="relative w-96 h-96">
        
        {/* Outer Circle */}
        <div className="absolute inset-0 rounded-full bg-slate-600 shadow-2xl overflow-hidden">
          
          {/* Top Quadrant */}
          <div 
            className="absolute inset-0 origin-center transition-all duration-500 ease-out"
            style={{
              clipPath: 'polygon(50% 50%, 0% 0%, 100% 0%)',
              backgroundColor: hovered === 'products' ? 'rgba(139, 92, 246, 0.5)' : 'transparent',
              transform: hovered === 'products' ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseEnter={() => setHovered('products')}
            onMouseLeave={() => setHovered(null)}
          />
          
          {/* Right Quadrant */}
          <div 
            className="absolute inset-0 origin-center transition-all duration-500 ease-out"
            style={{
              clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%)',
              backgroundColor: hovered === 'gallery' ? 'rgba(34, 211, 238, 0.5)' : 'transparent',
              transform: hovered === 'gallery' ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseEnter={() => setHovered('gallery')}
            onMouseLeave={() => setHovered(null)}
          />
          
          {/* Bottom Quadrant */}
          <div 
            className="absolute inset-0 origin-center transition-all duration-500 ease-out"
            style={{
              clipPath: 'polygon(50% 50%, 100% 100%, 0% 100%)',
              backgroundColor: hovered === 'downloads' ? 'rgba(16, 185, 129, 0.5)' : 'transparent',
              transform: hovered === 'downloads' ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseEnter={() => setHovered('downloads')}
            onMouseLeave={() => setHovered(null)}
          />
          
          {/* Left Quadrant */}
          <div 
            className="absolute inset-0 origin-center transition-all duration-500 ease-out"
            style={{
              clipPath: 'polygon(50% 50%, 0% 100%, 0% 0%)',
              backgroundColor: hovered === 'news' ? 'rgba(249, 115, 22, 0.5)' : 'transparent',
              transform: hovered === 'news' ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseEnter={() => setHovered('news')}
            onMouseLeave={() => setHovered(null)}
          />

          {/* Divider Lines */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-white opacity-20" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-white opacity-20" />

          {/* Section Labels */}
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className={`absolute ${section.position} flex flex-col items-center gap-2 transition-all duration-300 pointer-events-none ${
                  hovered === section.id ? 'scale-110' : 'scale-100'
                }`}
              >
                <Icon className="w-6 h-6 text-white" />
                <span className="text-sm text-white font-medium">{section.label}</span>
              </div>
            );
          })}
        </div>

        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg" />
        </div>
      </div>
    </div>
  );
}