
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button'));
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intensity drops significantly after Hero section (viewport height)
  const isHero = scrollPos < window.innerHeight * 0.8;
  const spotlightSize = isHero ? '450px' : '900px';
  const spotlightOpacity = isHero ? '0.15' : '0.04';

  return (
    <>
      {/* Spotlight Effect */}
      <div 
        ref={spotlightRef}
        className="fixed top-0 left-0 pointer-events-none z-[5] rounded-full transition-[width,height,opacity] duration-700 ease-out"
        style={{
          width: spotlightSize,
          height: spotlightSize,
          marginLeft: `calc(-${spotlightSize} / 2)`,
          marginTop: `calc(-${spotlightSize} / 2)`,
          background: `radial-gradient(circle, rgba(59, 130, 246, ${spotlightOpacity}) 0%, transparent 70%)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Main Cursor Hardware */}
      <div 
        ref={cursorRef} 
        className={`fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-slate-700 rounded-full pointer-events-none z-[9999] transition-[width,height,margin,border-color,background-color] duration-300 ease-out flex items-center justify-center ${isHovering ? 'w-12 h-12 -ml-6 -mt-6 border-blue-500 bg-blue-500/10' : ''}`}
      >
        <div className={`w-[1px] h-2 bg-slate-700 absolute top-0 ${isHovering ? 'opacity-0' : ''}`} />
        <div className={`w-[1px] h-2 bg-slate-700 absolute bottom-0 ${isHovering ? 'opacity-0' : ''}`} />
        <div className={`w-2 h-[1px] bg-slate-700 absolute left-0 ${isHovering ? 'opacity-0' : ''}`} />
        <div className={`w-2 h-[1px] bg-slate-700 absolute right-0 ${isHovering ? 'opacity-0' : ''}`} />
      </div>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-1 h-1 -ml-[2px] -mt-[2px] bg-blue-500 rounded-full pointer-events-none z-[9999]" 
      />
    </>
  );
};

export default CustomCursor;
