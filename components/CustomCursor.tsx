
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCoords({ x: clientX, y: clientY });
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHero = scrollPos < 400;
  const spotlightOpacity = isHero ? 0.4 : 0.08;
  const spotlightScale = isHero ? 1.5 : 1.0;

  return (
    <>
      {/* Tactical Reveal Spotlight */}
      <div 
        ref={spotlightRef}
        className="fixed top-0 left-0 w-[600px] h-[600px] -ml-[300px] -mt-[300px] pointer-events-none z-[5] transition-opacity duration-1000 ease-in-out"
        style={{
          background: `radial-gradient(circle at center, rgba(59, 130, 246, ${spotlightOpacity}) 0%, transparent 70%)`,
          filter: 'blur(80px)',
          opacity: 1,
          transform: `scale(${spotlightScale})`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Primary HUD Cursor */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[10000]"
      >
        <div className="relative flex items-center justify-center">
          {/* Main Reticle */}
          <div className="absolute w-8 h-8 border border-blue-500/20" />
          <div className="absolute w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
          
          {/* Dynamic Coordinate Readout */}
          <div className="absolute top-10 left-6 font-['JetBrains_Mono'] text-[6px] text-slate-700 uppercase tracking-widest whitespace-nowrap">
            LOC: {coords.x} / {coords.y}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
