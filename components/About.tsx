
import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const hudRef = useRef<HTMLDivElement>(null);
  const [hudRotation, setHudRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hudRef.current) return;
      const rect = hudRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = (e.clientY - centerY) / 20;
      const rotateY = (centerX - e.clientX) / 20;
      setHudRotation({ x: rotateX, y: rotateY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="executive-dossier" className="py-48 relative px-8 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Interactive Complex Element */}
          <div className="lg:col-span-5 flex justify-center perspective-1000">
            <div 
              ref={hudRef}
              className="relative w-72 h-72 md:w-96 md:h-96 transition-transform duration-200 ease-out"
              style={{ 
                transform: `rotateX(${hudRotation.x}deg) rotateY(${hudRotation.y}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* HUD Layers */}
              <div className="absolute inset-0 border border-slate-900 rounded-full flex items-center justify-center">
                <div className="absolute inset-4 border border-blue-500/5 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-8 border-t-2 border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
                
                {/* Tactical Core */}
                <div className="w-40 h-40 bg-slate-950/80 rounded-full border border-slate-800 flex flex-col items-center justify-center p-6 text-center backdrop-blur-xl shadow-2xl">
                  <div className="font-['JetBrains_Mono'] text-[8px] text-blue-500 uppercase tracking-widest mb-2">Subject_Bio</div>
                  <div className="font-['Space_Grotesk'] text-2xl font-bold text-white tracking-tighter mb-4">F. SULTANOV</div>
                  <div className="w-12 h-[1px] bg-blue-500/30" />
                  <div className="mt-4 text-[7px] font-['JetBrains_Mono'] text-slate-500 uppercase tracking-[0.3em]">Status: Verified</div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 px-3 py-1 bg-black border border-slate-800 text-[7px] font-['JetBrains_Mono'] text-blue-400">
                  LAT: 41.2995 N
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 px-3 py-1 bg-black border border-slate-800 text-[7px] font-['JetBrains_Mono'] text-blue-400">
                  LON: 69.2401 E
                </div>
              </div>
              
              {/* Outer Orbitals */}
              <div className="absolute inset-[-40px] border border-blue-500/5 rounded-full opacity-20" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <div className="font-['JetBrains_Mono'] text-[9px] text-blue-500 uppercase tracking-[0.6em]">Executive_Dossier // 01</div>
              <h3 className="text-6xl font-['Space_Grotesk'] font-bold text-white uppercase tracking-tighter leading-none">
                Design<br />Intelligence
              </h3>
            </div>
            
            <div className="space-y-8 text-slate-500 font-['Inter'] leading-relaxed text-lg font-light border-l border-slate-900 pl-10 relative">
              <p className="hover:text-slate-300 transition-colors duration-500">
                A system architect specialized in the intersection of <span className="text-white font-medium">Visual Logic</span> and <span className="text-white font-medium">Strategic Identity</span>. Currently deploying advanced branding frameworks from the Tashkent node.
              </p>
              <p className="text-base opacity-70">
                Bridging technical software engineering with high-fidelity creative direction to build cohesive, high-precision visual systems for modern enterprises.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="p-6 bg-slate-950/20 border border-slate-900 group hover:border-blue-500/20 transition-all">
                <div className="text-[9px] font-['JetBrains_Mono'] text-blue-500/60 uppercase mb-4">Academic_Node</div>
                <div className="text-white font-['Space_Grotesk'] font-bold">FSTU University</div>
                <div className="text-[9px] font-['JetBrains_Mono'] text-slate-600 mt-1 uppercase tracking-widest">Comp_Eng // Year_3</div>
              </div>
              <div className="p-6 bg-slate-950/20 border border-slate-900 group hover:border-blue-500/20 transition-all">
                <div className="text-[9px] font-['JetBrains_Mono'] text-blue-500/60 uppercase mb-4">Linguistic_Sync</div>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                </div>
                <div className="text-[9px] font-['JetBrains_Mono'] text-slate-600 mt-2 uppercase tracking-widest">Multi_Lingual_Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
