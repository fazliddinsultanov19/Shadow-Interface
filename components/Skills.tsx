
import React, { useEffect, useState, useRef } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const assets = [
    { name: "Photoshop", level: 90, type: "Raster_Engine" },
    { name: "Illustrator", level: 75, type: "Vector_Matrix" },
    { name: "CorelDRAW", level: 70, type: "Legacy_Arch" },
    { name: "Figma", level: 55, type: "Collaborative_UI" },
    { name: "InDesign", level: 60, type: "Layout_Kernel" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tactical-assets" ref={sectionRef} className="py-48 relative px-8 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <div className="font-['JetBrains_Mono'] text-[9px] text-blue-500 uppercase tracking-[0.6em] animate-pulse">Tactical_Assets // 03</div>
              <h3 className="text-6xl font-['Space_Grotesk'] font-bold text-white uppercase tracking-tighter leading-none">Weapons<br />Systems</h3>
            </div>
            
            <div className="p-8 bg-slate-950/40 border border-slate-900 space-y-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/[0.01] transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                <span className="font-['JetBrains_Mono'] text-[9px] text-white uppercase tracking-[0.3em]">Armory_Status: Ready</span>
              </div>
              <p className="text-[10px] font-['JetBrains_Mono'] text-slate-500 uppercase leading-loose tracking-widest">
                Deployment of specialized creative software for visual dominance.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {assets.map((asset, idx) => (
              <div 
                key={asset.name} 
                className="p-8 border border-slate-900 bg-black group hover:border-blue-500/30 transition-all duration-700 overflow-hidden relative"
              >
                <div className="flex justify-between items-end mb-6">
                  <div className="space-y-1">
                    <div className="text-[8px] font-['JetBrains_Mono'] text-blue-500/60 uppercase tracking-[0.2em]">{asset.type}</div>
                    <div className="text-2xl font-['Space_Grotesk'] font-bold text-white group-hover:text-blue-400 transition-colors">{asset.name}</div>
                  </div>
                  <div className="text-[10px] font-['JetBrains_Mono'] text-slate-600">
                    {isVisible ? asset.level : 0}%_LD
                  </div>
                </div>
                <div className="h-[1px] bg-slate-900 relative">
                  <div 
                    className="absolute top-0 left-0 h-full bg-blue-500/80 shadow-[0_0_15px_#3b82f6] transition-all duration-[2s] ease-out"
                    style={{ 
                      width: isVisible ? `${asset.level}%` : '0%',
                      transitionDelay: `${idx * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
