
import React from 'react';

const Portfolio: React.FC = () => {
  const archives = [
    {
      platform: "Behance",
      url: "https://www.behance.net/fazliddinsultanov",
      description: "Visual identity and branding case studies",
      id: "ARC_001"
    },
    {
      platform: "Pinterest",
      url: "https://www.pinterest.com/fazliddin_designs/",
      description: "Creative curation and visual exploration",
      id: "ARC_002"
    },
    {
      platform: "Telegram",
      url: "https://t.me/fazliddin_designs",
      description: "Direct stream of latest design iterations",
      id: "ARC_003"
    }
  ];

  return (
    <section id="archive" className="py-32 relative bg-slate-950/20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3 space-y-4">
            <div className="font-['JetBrains_Mono'] text-[10px] text-blue-500 uppercase tracking-[0.4em]">Section 04</div>
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
                className="group relative p-8 border border-slate-900 bg-black overflow-hidden"
              >
                {/* Tactical Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-800 group-hover:border-blue-500 transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-800 group-hover:border-blue-500 transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-800 group-hover:border-blue-500 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-800 group-hover:border-blue-500 transition-colors" />
                
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="text-[10px] font-['JetBrains_Mono'] text-slate-600 tracking-widest">{item.id}</div>
                    <div className="w-1 h-1 rounded-full bg-blue-500/20 group-hover:bg-blue-500 group-hover:animate-ping transition-all" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-2xl font-['Space_Grotesk'] font-bold text-slate-100 uppercase tracking-tighter transition-all group-hover:text-blue-400">{item.platform}</h4>
                    <p className="text-xs text-slate-500 font-['Inter'] leading-relaxed">{item.description}</p>
                  </div>

                  <div className="pt-4 flex items-center text-[10px] font-['JetBrains_Mono'] text-slate-400 uppercase tracking-widest group-hover:text-slate-100">
                    <span>Initiate Link</span>
                    <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>

                {/* Hover Background */}
                <div className="absolute inset-0 bg-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            
            <div className="p-8 border border-dashed border-slate-900 flex items-center justify-center">
              <div className="text-[9px] font-['JetBrains_Mono'] text-slate-700 uppercase tracking-[0.3em] text-center">
                Additional files<br />under encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
