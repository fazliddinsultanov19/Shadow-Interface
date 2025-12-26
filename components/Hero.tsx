
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!coreRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const rotateX = (clientY / innerHeight - 0.5) * 30;
      const rotateY = (clientX / innerWidth - 0.5) * 30;
      coreRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="identity" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 z-10">
          <div className="space-y-2">
            <p className="font-['JetBrains_Mono'] text-[11px] text-blue-500 tracking-[0.5em] uppercase animate-pulse">
              System Authorization Confirmed
            </p>
            <h1 className="text-6xl md:text-8xl font-['Space_Grotesk'] font-bold tracking-tighter text-slate-50 leading-none">
              Fazliddin<br />
              <span className="text-slate-400">Sultanov</span>
            </h1>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-['Space_Grotesk'] text-slate-400 font-light tracking-wide max-w-md">
              Graphic Designer • Creative Thinker • Orator
            </h2>
            <div className="h-[1px] w-24 bg-blue-500" />
            <p className="text-slate-500 font-['Inter'] text-sm italic tracking-widest uppercase">
              "Design is not decoration. It is decision."
            </p>
          </div>

          <div className="flex items-center space-x-8 pt-6">
            <a 
              href="#archive" 
              className="group relative px-8 py-3 bg-slate-50 text-black font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest overflow-hidden transition-all hover:pr-12"
            >
              <span className="relative z-10">Access Portfolio</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center perspective-1000">
          <div 
            ref={coreRef} 
            className="w-80 h-80 relative transform-gpu transition-transform duration-200 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Tactical Rings */}
            <div className="absolute inset-0 border border-slate-800 rotate-45 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 border border-blue-500/10 -rotate-12 animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-8 border border-slate-700 animate-[pulse_4s_ease-in-out_infinite]" />
            
            {/* Central Energy Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 bg-blue-500 h-1/2 opacity-30 blur-[2px]" />
              <div className="absolute w-1/2 bg-blue-500 h-1 opacity-30 blur-[2px]" />
              <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_30px_#3b82f6] animate-ping" />
              <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]" />
            </div>

            {/* Floating Tech Data */}
            <div className="absolute -top-10 -left-10 text-[9px] font-['JetBrains_Mono'] text-slate-600 uppercase tracking-widest space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                <span>CORE_STATUS: ONLINE</span>
              </div>
              <div>OS_VER: 2.0.4.FS</div>
              <div>ENCRYPTION: AES-256</div>
            </div>

            <div className="absolute -bottom-10 -right-10 text-[9px] font-['JetBrains_Mono'] text-slate-600 uppercase tracking-widest text-right space-y-1">
              <div>LAT: 40.3894</div>
              <div>LNG: 71.7830</div>
              <div className="text-blue-500/50">SCANNING...</div>
            </div>

            {/* Grid Overlay inside the object for depth */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-700 to-blue-500 animate-bounce" />
        <span className="font-['JetBrains_Mono'] text-[9px] text-slate-600 uppercase tracking-[0.3em]">Vertical Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
