
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const coreRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!coreRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const rotateX = (clientY / innerHeight - 0.5) * 20;
      const rotateY = (clientX / innerWidth - 0.5) * 20;
      coreRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="identity" ref={containerRef} className="min-h-screen flex items-center justify-center relative bg-black px-8 overflow-hidden">
      {/* Background Ambience / Particles Overlay */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-float" style={{ animationDuration: '6s' }} />
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-slate-500 rounded-full animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
      </div>

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-blue-500/50 animate-[widthExtend_1s_ease-out]" />
              <p className="font-['JetBrains_Mono'] text-[10px] text-blue-500 tracking-[0.6em] uppercase animate-pulse">
                Profile ID: 29.04.04
              </p>
            </div>
            <h1 className="text-7xl md:text-9xl font-['Space_Grotesk'] font-bold tracking-tighter text-white leading-none overflow-hidden">
              <span className="block animate-[slideUp_0.8s_ease-out]">FAZLIDDIN</span>
              <span className="block text-slate-700/80 animate-[slideUp_0.8s_ease-out_0.2s] transition-colors hover:text-blue-500/40 cursor-default">SULTANOV</span>
            </h1>
          </div>
          
          <div className="space-y-6 border-l border-slate-900 pl-8 animate-[fadeIn_1.5s_ease-out_0.5s_both]">
            <h2 className="text-xl md:text-2xl font-['Space_Grotesk'] text-slate-400 font-light tracking-wide max-w-md">
              High-Security Graphic Systems • Branding Architect • Creative Intelligence
            </h2>
            <p className="text-slate-600 font-['JetBrains_Mono'] text-[10px] italic tracking-[0.2em] uppercase">
              // LOG_MESSAGE: "Decisions defined by visual logic."
            </p>
          </div>

          <div className="flex items-center space-x-12 pt-10 animate-[fadeIn_1.5s_ease-out_1s_both]">
            <a 
              href="#archive" 
              className="group relative flex items-center font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.3em] overflow-hidden"
            >
              <span className="text-white mr-4 transition-colors group-hover:text-blue-400">Initialize Archive</span>
              <div className="w-10 h-[1px] bg-blue-500 group-hover:w-16 transition-all duration-500 shadow-[0_0_8px_#3b82f6]" />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <div 
            ref={coreRef} 
            className="w-[450px] h-[450px] relative transform-gpu transition-transform duration-300 ease-out flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Tactical Geometry with slower, smoother rotations */}
            <div className="absolute inset-0 border-[0.5px] border-slate-900 rounded-full rotate-45 animate-[spin_60s_linear_infinite] opacity-50" />
            <div className="absolute inset-10 border-[0.5px] border-slate-900 rounded-full -rotate-12 animate-[spin_80s_linear_infinite_reverse] opacity-50" />
            <div className="absolute inset-20 border-[0.5px] border-blue-500/5 rounded-full animate-pulse" />
            
            {/* Pulsing Core */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl animate-[pulse_4s_infinite]" />
              <div className="font-['Space_Grotesk'] font-black text-4xl text-white/5 tracking-[0.3em] select-none group-hover:text-blue-500/20 transition-all duration-700">FS</div>
              <div className="absolute w-full h-[1px] bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-[scanlineMove_4s_ease-in-out_infinite]" />
            </div>

            {/* Live Data Overlays */}
            <div className="absolute top-0 left-0 text-[8px] font-['JetBrains_Mono'] text-slate-700 uppercase tracking-[0.4em] space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500 rounded-full animate-ping" />
                <span className="animate-pulse">UPLINK_STATUS: ACTIVE</span>
              </div>
              <div className="hover:text-slate-400 transition-colors">LOC: FER_TAS_UZB</div>
              <div className="hover:text-slate-400 transition-colors">ARCH_VER: 1.0.SULTANOV</div>
            </div>

            <div className="absolute bottom-0 right-0 text-[8px] font-['JetBrains_Mono'] text-slate-700 uppercase tracking-[0.4em] text-right space-y-2">
              <div className="opacity-40">ENCRYPTION: AES_256_RSA</div>
              <div className="text-blue-500/40 animate-pulse">SYSTEM_READY</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-6 opacity-30 group cursor-default">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-blue-500 group-hover:h-24 transition-all duration-700" />
        <span className="font-['JetBrains_Mono'] text-[8px] text-slate-600 uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr] group-hover:text-blue-400 transition-colors">Scroll_to_Decrypt</span>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(20px, -20px); opacity: 0.5; }
        }
        @keyframes widthExtend {
          from { width: 0; }
          to { width: 32px; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scanlineMove {
          0%, 100% { transform: translateY(-40px); opacity: 0.1; }
          50% { transform: translateY(40px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
