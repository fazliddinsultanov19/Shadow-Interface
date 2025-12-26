
import React from 'react';

const Portfolio: React.FC = () => {
  const archives = [
    {
      platform: "Behance",
      url: "https://www.behance.net/fazliddinsultanov",
      description: "Visual identity and branding case studies",
      id: "CASE_FILE_001",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      status: "DECRYPTED"
    },
    {
      platform: "Pinterest",
      url: "https://www.pinterest.com/fazliddin_designs/",
      description: "Creative curation and visual exploration",
      id: "CASE_FILE_002",
      img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
      status: "DECRYPTED"
    },
    {
      platform: "Telegram",
      url: "https://t.me/fazliddin_designs",
      description: "Direct stream of latest design iterations",
      id: "CASE_FILE_003",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      status: "LIVE_FEED"
    }
  ];

  return (
    <section id="archive" className="py-40 relative px-8 bg-black overflow-hidden">
      {/* Background Frame with Floating Corners */}
      <div className="absolute inset-x-20 inset-y-40 border border-slate-900/30 pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-blue-500/20 animate-pulse" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500/20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-blue-500/20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-blue-500/20 animate-pulse" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-2">
              <div className="font-['JetBrains_Mono'] text-[10px] text-blue-500 uppercase tracking-[0.5em] animate-pulse">Archive // 04</div>
              <h3 className="text-5xl font-['Space_Grotesk'] font-bold uppercase tracking-tighter text-white">Visual<br />Evidence</h3>
            </div>
            <div className="w-20 h-1 bg-slate-800" />
            <p className="font-['JetBrains_Mono'] text-[10px] text-slate-500 uppercase leading-relaxed tracking-widest max-w-[250px]">
              Accessing encrypted visual databases. High-fidelity renders and strategic identity maps.
            </p>
            <div className="pt-8 flex flex-col gap-4 text-[8px] font-['JetBrains_Mono'] text-slate-700 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500/40 rounded-full animate-ping" />
                DATABASE_SYNC: CONTINUOUS
              </div>
              <div className="opacity-50">ENCRYPTION: AES_256_ACTIVE</div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {archives.map((item, idx) => (
              <a 
                key={item.id} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative h-[380px] bg-slate-950 border border-slate-900 overflow-hidden flex flex-col p-8 transition-all duration-700 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
              >
                {/* Image Layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 grayscale group-hover:grayscale-0 opacity-10 group-hover:opacity-40 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                {/* Scanning Line Overlay */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-400/30 animate-scan-fast pointer-events-none opacity-0 group-hover:opacity-100" style={{ animationDelay: `${idx * 0.2}s` }} />

                {/* Data Header */}
                <div className="relative z-10 flex justify-between items-start mb-auto">
                  <div className="space-y-1">
                    <div className="text-[9px] font-['JetBrains_Mono'] text-blue-500 tracking-tighter group-hover:translate-x-1 transition-transform">[{item.id}]</div>
                    <div className="text-[8px] font-['JetBrains_Mono'] text-slate-600 uppercase tracking-widest">Type: Digital_Asset</div>
                  </div>
                  <div className="px-3 py-1 border border-blue-500/20 text-[8px] font-['JetBrains_Mono'] text-blue-500/60 animate-pulse bg-blue-500/[0.02]">
                    {item.status}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-5">
                  <div className="h-[1px] w-12 bg-blue-500 group-hover:w-full transition-all duration-1000 ease-out" />
                  <h4 className="text-4xl font-['Space_Grotesk'] font-bold text-white uppercase tracking-tighter group-hover:text-blue-400 transition-colors duration-500">
                    {item.platform}
                  </h4>
                  <p className="text-[10px] font-['JetBrains_Mono'] text-slate-500 uppercase tracking-widest leading-loose opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700">
                    {item.description}
                  </p>
                  
                  <div className="pt-4 flex items-center gap-3 text-[9px] font-['JetBrains_Mono'] text-slate-400 uppercase tracking-[0.4em] group-hover:text-blue-500 transition-colors">
                    INITIATE_UPLINK <span className="text-blue-500 group-hover:translate-x-3 transition-transform duration-500">{"\u003E\u003E\u003E"}</span>
                  </div>
                </div>

                {/* Corner Highlighters */}
                <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-6 h-6 border-b border-r border-blue-500 shadow-[0_0_10px_#3b82f6]" />
                </div>
              </a>
            ))}

            {/* Locked Slot */}
            <div className="relative h-[380px] border border-dashed border-slate-900 bg-slate-950/20 flex flex-col items-center justify-center p-12 text-center group overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/[0.01] animate-pulse" />
              <div className="w-16 h-16 border border-slate-900 rounded-full flex items-center justify-center mb-8 group-hover:border-blue-500/30 transition-all duration-700">
                <div className="w-2 h-2 bg-slate-800 rounded-full animate-ping" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="text-[11px] font-['JetBrains_Mono'] text-slate-700 uppercase tracking-[0.4em]">Classified_Slot</div>
                <div className="text-[8px] font-['JetBrains_Mono'] text-slate-800 uppercase tracking-[0.6em]">Awaiting_Permissions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scan-fast {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(380px); opacity: 0; }
        }
        .animate-scan-fast { animation: scan-fast 3s linear infinite; }
      `}</style>
    </section>
  );
};

export default Portfolio;
