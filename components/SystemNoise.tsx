
import React from 'react';

const SystemNoise: React.FC = () => {
  return (
    <>
      {/* Precision Grain Texture */}
      <div className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.02] overflow-hidden">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.80" 
              numOctaves="4" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Subtle Overlay Glow */}
      <div className="fixed inset-0 pointer-events-none z-[1002] bg-blue-500/[0.02] mix-blend-overlay" />

      {/* Smooth Horizontal Scanline */}
      <div className="fixed inset-0 pointer-events-none z-[1001] bg-gradient-to-b from-transparent via-blue-400/[0.03] to-transparent h-[2px] w-full animate-scanline" />
      
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default SystemNoise;
