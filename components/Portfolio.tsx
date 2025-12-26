
import React from 'react';

const Portfolio: React.FC = () => {
  const archives = [
    {
      platform: "Behance",
      url: "https://www.behance.net/fazliddinsultanov",
      description: "Visual identity and branding case studies",
      id: "ARC_001",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" // High-tech circuit
    },
    {
      platform: "Pinterest",
      url: "https://www.pinterest.com/fazliddin_designs/",
      description: "Creative curation and visual exploration",
      id: "ARC_002",
      img: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800" // Dark minimal cityscape
    },
    {
      platform: "Telegram",
      url: "https://t.me/fazliddin_designs",
      description: "Direct stream of latest design iterations",
      id: "ARC_003",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" // Blue tech light
    }
  ];

  return (
    <section id="archive" className="py-32 relative bg-slate-950/20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3 space-y-4">
            <div className="font-['JetBrains_Mono'] text-[10px] text-blue-500 uppercase tracking-[0.4em] animate-pulse">Section 04</div>
            <h3 className="text-4xl font-['Space_Grotesk'] font-bold uppercase tracking-tight">Classified<br />Archive</h3>
            <div className="w-12 h-1 bg-slate-800" />
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {archives.map((item) => (
              <a 
                key={item.id} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative h-[280px] border border-slate-900 bg-black overflow-hidden flex flex-col justify-end p-8"
              >
                {/* Background Image with Dark Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-20 group-hover:opacity-40"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                {/* Tactical Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-800 group-hover:border-blue-500 transition-colors z-20" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-800 group-hover:border-blue-500 transition-colors z-20" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-800 group-hover:border-blue-500 transition-colors z-20" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-800 group-hover:border-blue-500 transition-colors z-20" />
                
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="text-[10px] font-['JetBrains_Mono'] text-slate-500 tracking-widest group-hover:text-blue-400 transition-colors">{item.id}</div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_#3b82f6] transition-all" />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-2xl font-['Space_Grotesk'] font-bold text-slate-100 uppercase tracking-tighter group-hover:text-white">{item.platform}</h4>
                    <p className="text-xs text-slate-500 font-['Inter'] leading-relaxed h-0 overflow-hidden group-hover:h-8 transition-all duration-500 opacity-0 group-hover:opacity-100">{item.description}</p>
                  </div>

                  <div className="pt-2 flex items-center text-[10px] font-['JetBrains_Mono'] text-slate-400 uppercase tracking-widest group-hover:text-slate-100">
                    <span className="relative">
                      Initiate Link
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-500" />
                    </span>
                    <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>

                {/* Scanline overlay inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
              </a>
            ))}
            
            <div className="h-[280px] border border-dashed border-slate-900 flex flex-col items-center justify-center space-y-4 group">
              <div className="w-8 h-8 border border-slate-800 rounded-full flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                <div className="w-1 h-1 bg-slate-800 rounded-full group-hover:bg-blue-500 animate-pulse" />
              </div>
              <div className="text-[9px] font-['JetBrains_Mono'] text-slate-700 uppercase tracking-[0.3em] text-center leading-relaxed">
                Vault offline<br />
                <span className="text-slate-800">Additional data encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
