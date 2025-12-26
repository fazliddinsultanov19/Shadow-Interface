
import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  
  // Refs for smooth LERP movement
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRotRef = useRef({ x: 0, y: 0, z: 0 });
  const [proximityGlow, setProximityGlow] = useState(0);

  useEffect(() => {
    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize to -1 to 1
      mouseRef.current.x = (e.clientX / innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / innerHeight) * 2 - 1;

      // Calculate proximity to center for core glow
      const dx = e.clientX - innerWidth / 2;
      const dy = e.clientY - innerHeight / 2;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDist = Math.sqrt((innerWidth / 2) ** 2 + (innerHeight / 2) ** 2);
      setProximityGlow(Math.max(0, 1 - distance / (maxDist * 0.4)));
    };

    const animate = () => {
      // Weighted mechanical follow logic (LERP)
      const targetX = mouseRef.current.y * -15; // Vertical mouse moves X rotation
      const targetY = mouseRef.current.x * 15;  // Horizontal mouse moves Y rotation
      
      const lerp = 0.04;
      
      currentRotRef.current.x += (targetX - currentRotRef.current.x) * lerp;
      currentRotRef.current.y += (targetY - currentRotRef.current.y) * lerp;
      
      // Micro idle breathing on Z
      currentRotRef.current.z = Math.sin(Date.now() * 0.001) * 2;

      if (coreRef.current) {
        coreRef.current.style.transform = `rotateX(${currentRotRef.current.x}deg) rotateY(${currentRotRef.current.y}deg) rotateZ(${currentRotRef.current.z}deg)`;
      }
      
      if (innerRef.current) {
        innerRef.current.style.transform = `translateZ(50px) rotateX(${currentRotRef.current.x * 0.5}deg) rotateY(${currentRotRef.current.y * 0.5}deg)`;
      }
      
      if (outerRef.current) {
        outerRef.current.style.transform = `translateZ(-30px) rotateX(${currentRotRef.current.x * -0.2}deg) rotateY(${currentRotRef.current.y * -0.2}deg)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section id="identity" ref={containerRef} className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden select-none">
      <div className="absolute inset-0 z-0 bg-black" />
      
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-20">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-px h-px bg-blue-400 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center relative z-10 text-center">
        <div className="space-y-4 mb-12 animate-reveal-up">
          <div className="flex items-center justify-center gap-4 opacity-40">
            <div className="h-px w-8 bg-blue-500" />
            <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.8em] text-blue-500">
              CORE_IDENTITY_INITIATED
            </p>
            <div className="h-px w-8 bg-blue-500" />
          </div>
          <h1 className="text-7xl md:text-9xl font-['Space_Grotesk'] font-bold tracking-tighter text-white leading-none">
            <span className="block opacity-90">FAZLIDDIN</span>
            <span className="block text-slate-900 transition-colors hover:text-white/5 duration-1000">SULTANOV</span>
          </h1>
          <p className="text-slate-700 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.5em] mt-8">
            // STATUS: SYSTEM_OPTIMAL // ARCHIVE_READY
          </p>
        </div>

        <div className="relative w-[320px] h-[320px] md:w-[600px] md:h-[600px] perspective-2000">
          <div 
            ref={coreRef}
            className="w-full h-full relative transform-style-3d flex items-center justify-center"
          >
            <div ref={outerRef} className="absolute inset-0 transform-style-3d opacity-20">
              <div className="absolute inset-[10%] border border-slate-900 rounded-full animate-slow-spin" />
              <div className="absolute inset-[15%] border-t border-b border-blue-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              {[0, 90, 180, 270].map((deg) => (
                <div 
                  key={deg}
                  className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-slate-800"
                  style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateX(180px)` }}
                >
                  <div className="absolute right-0 w-2 h-4 border-r border-slate-700 -translate-y-1/2" />
                </div>
              ))}
            </div>

            <div className="absolute inset-[25%] transform-style-3d">
              <div className="absolute inset-0 border border-blue-500/5 rounded-full" 
                   style={{ boxShadow: `0 0 ${20 + proximityGlow * 40}px rgba(59,130,246,${0.05 + proximityGlow * 0.2})` }} />
              <div className="absolute inset-4 border border-blue-500/10 rounded-full animate-[spin_25s_linear_infinite]" />
            </div>

            <div 
              ref={innerRef}
              className="relative w-28 h-28 md:w-40 md:h-40 bg-black border border-slate-800 rounded-sm flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,1)] z-10 transform-style-3d transition-all duration-700"
              style={{ 
                boxShadow: `0 0 ${40 + proximityGlow * 60}px rgba(59,130,246,${0.1 + proximityGlow * 0.3})`,
                borderColor: proximityGlow > 0.5 ? 'rgba(59,130,246,0.4)' : 'rgba(30,41,59,1)'
              }}
            >
              <div className="absolute inset-2 border border-blue-500/10 rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/10 to-blue-500/0 animate-shimmer opacity-30" />
              </div>
              
              <div className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl text-white tracking-widest opacity-90 relative z-20">
                FS
              </div>

              <div className="absolute -top-12 -right-12 text-left opacity-30">
                <div className="text-[7px] font-['JetBrains_Mono'] text-blue-400 uppercase mb-1">SYNC_FREQ: 60Hz</div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-3 bg-slate-800">
                      <div className="w-full bg-blue-500 animate-pulse" style={{ height: `${20 + Math.random() * 80}%`, animationDelay: `${i * 0.2}s` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute w-[500px] h-[500px] border border-blue-500/[0.03] rounded-full rotate-12 pointer-events-none" />
            <div className="absolute w-[500px] h-[500px] border border-blue-500/[0.03] rounded-full -rotate-12 pointer-events-none" />
          </div>
        </div>

        <div className="mt-12 group">
          <a 
            href="#archive"
            className="group relative inline-flex items-center gap-8 px-16 py-6 border border-slate-900 bg-black hover:border-blue-500/30 transition-all duration-700 overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-500/40 -translate-y-full group-hover:animate-scanline" />
            
            <span className="relative z-10 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.6em] text-slate-500 group-hover:text-white transition-colors">
              Access Private Archive
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-[3.5] transition-transform duration-500 shadow-[0_0_15px_#3b82f6]" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes reveal-up {
          from { transform: translateY(40px); opacity: 0; filter: blur(12px); }
          to { transform: translateY(0); opacity: 1; filter: blur(0); }
        }
        @keyframes shimmer {
          0% { transform: translate(-100%, -100%) rotate(45deg); }
          100% { transform: translate(100%, 100%) rotate(45deg); }
        }
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-reveal-up { animation: reveal-up 2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slow-spin { animation: slow-spin 80s linear infinite; }
        .animate-shimmer { animation: shimmer 4s ease-in-out infinite; }
        .animate-scanline { animation: scanline 2s linear infinite; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
  );
};

export default Hero;
