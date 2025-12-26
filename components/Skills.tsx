
import React from 'react';

const Skills: React.FC = () => {
  const designTools = [
    { name: "Photoshop", level: 90 },
    { name: "Illustrator", level: 75 },
    { name: "CorelDRAW", level: 70 },
    { name: "InDesign", level: 60 },
    { name: "Figma", level: 55 }
  ];

  const softSkills = [
    "Creativity", "Critical thinking", "Time management", "Problem solving", "Public speaking"
  ];

  return (
    <section id="skillset" className="py-32 relative px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3 space-y-4">
            <div className="font-['JetBrains_Mono'] text-[10px] text-blue-500 uppercase tracking-[0.4em]">Section 03</div>
            <h3 className="text-4xl font-['Space_Grotesk'] font-bold uppercase tracking-tight">Tactical<br />Arsenal</h3>
            <div className="w-12 h-1 bg-slate-800" />
          </div>

          <div className="md:w-2/3 space-y-20">
            <div className="grid grid-cols-1 gap-10">
              <div className="space-y-8">
                <h4 className="text-xs font-['JetBrains_Mono'] text-slate-500 uppercase tracking-widest border-b border-slate-900 pb-2">Technical Capability</h4>
                <div className="space-y-6">
                  {designTools.map((tool) => (
                    <div key={tool.name} className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-['JetBrains_Mono'] uppercase tracking-widest">
                        <span className="text-slate-300">{tool.name}</span>
                        <span className="text-blue-500">{tool.level}%</span>
                      </div>
                      <div className="h-1 bg-slate-900 relative">
                        <div 
                          className="absolute top-0 left-0 h-full bg-slate-300 transition-all duration-1000"
                          style={{ width: `${tool.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xs font-['JetBrains_Mono'] text-slate-500 uppercase tracking-widest border-b border-slate-900 pb-2">Soft Assets</h4>
                <div className="flex flex-wrap gap-4">
                  {softSkills.map((skill) => (
                    <span key={skill} className="px-5 py-2 border border-slate-800 bg-slate-950 text-[10px] font-['JetBrains_Mono'] text-slate-400 uppercase tracking-widest hover:border-blue-500/50 hover:text-slate-100 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
