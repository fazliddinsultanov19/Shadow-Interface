
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: "2024 – ACTIVE",
      role: "Freelance Graphic Intelligence",
      details: [
        "Architecting social identity systems",
        "Strategic branding for international clients",
        "High-impact visual decision making"
      ]
    },
    {
      period: "2023",
      role: "Software Deployment Lead — MEGA ZIYO",
      details: [
        "Instructing office automation systems",
        "Workflow optimization training",
        "Data management and asset structure"
      ]
    }
  ];

  return (
    <section id="experience" className="py-40 relative px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-4">
            <div className="font-['JetBrains_Mono'] text-[10px] text-blue-500 uppercase tracking-[0.5em]">History // 02</div>
            <h3 className="text-5xl font-['Space_Grotesk'] font-bold uppercase tracking-tighter text-white">Mission<br />Operations</h3>
            <div className="w-20 h-1 bg-slate-800" />
          </div>

          <div className="lg:col-span-8 space-y-16">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-12 border-l-2 border-slate-900 group">
                <div className="absolute left-[-10px] top-0 w-5 h-5 bg-black border-2 border-slate-800 rounded-full flex items-center justify-center transition-all group-hover:border-blue-500">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                </div>
                
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4">
                    <h4 className="text-2xl font-['Space_Grotesk'] font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                      {exp.role}
                    </h4>
                    <span className="font-['JetBrains_Mono'] text-[10px] text-slate-500 px-4 py-1.5 border border-slate-900 bg-slate-950/50 uppercase tracking-[0.2em]">
                      [{exp.period}]
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 border border-slate-900/50 bg-slate-950/20 text-slate-400 text-xs font-['Inter'] hover:bg-slate-900 transition-colors">
                        <span className="text-blue-500 text-[10px] font-['JetBrains_Mono']">+{i+1}</span>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="pt-10">
              <div className="p-4 border border-dashed border-slate-900 text-center opacity-40">
                <span className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-slate-500">Further timeline nodes encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
