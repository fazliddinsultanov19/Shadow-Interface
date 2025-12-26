
import React from 'react';

const SystemNoise: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.03] overflow-hidden">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.65" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
      {/* Cinematic Scanline */}
      <div className="fixed inset-0 pointer-events-none z-[1001] bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-[2px] w-full animate-[scanline_8s_linear_infinite]" />
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
      `}</style>
    </>
  );
};

export default SystemNoise;
