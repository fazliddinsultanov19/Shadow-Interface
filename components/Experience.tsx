
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: "2024 – Present",
      role: "Freelance Graphic Designer",
      details: [
        "Branding for social media platforms",
        "Outdoor advertising and SMM visuals",
        "Direct client collaboration"
      ]
    },
    {
      period: "2023",
      role: "Office Software Instructor — MEGA ZIYO",
      details: [
        "Microsoft Word, Excel, PowerPoint",
        "Practical, real-world teaching"
      ]
    }
  ];

  return (
    <section className="py-32 relative bg-slate-950/10 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3 space-y-4">
            <div className="font-['JetBrains_Mono'] text-[10px] text-blue-500 uppercase tracking-[0.4em]">Section 02</div>
            <h3 className="text-4xl font-['Space_Grotesk'] font-bold uppercase tracking-tight">Active<br />Operations</h3>
            <div className="w-12 h-1 bg-slate-800" />
          </div>

          <div className="md:w-2/3 space-y-16">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l border-slate-800 group">
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_#3b82f6]" />
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <h4 className="text-xl font-['Space_Grotesk'] font-medium text-slate-50">{exp.role}</h4>
                    <span className="font-['JetBrains_Mono'] text-[10px] text-slate-600 px-3 py-1 border border-slate-800 uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-3">
                        <span className="text-blue-500 mt-1 text-[8px] opacity-50">■</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
