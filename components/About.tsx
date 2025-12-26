
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="system" className="py-32 relative px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3 space-y-4">
            <div className="font-['JetBrains_Mono'] text-[10px] text-blue-500 uppercase tracking-[0.4em]">Section 01</div>
            <h3 className="text-4xl font-['Space_Grotesk'] font-bold uppercase tracking-tight">Intelligence<br />Profile</h3>
            <div className="w-12 h-1 bg-slate-800" />
          </div>
          
          <div className="md:w-2/3 space-y-12">
            <div className="space-y-6 text-slate-400 font-['Inter'] leading-relaxed text-lg font-light">
              <p>
                Passionate and detail-oriented <span className="text-slate-50 font-normal">Graphic Designer</span> specialized in branding, social media design, and outdoor advertising.
              </p>
              <p>
                Currently a 3rd-year <span className="text-slate-50 font-normal">Computer Engineering</span> student at Fergana State Technical University and a Freelance Designer.
              </p>
              <p>
                Combines high-level creativity, critical thinking, and strong oratory skills to build meaningful visual systems that solve complex strategic problems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              <div className="p-6 border border-slate-900 bg-slate-950/20 space-y-4">
                <div className="text-xs font-['JetBrains_Mono'] text-slate-600 uppercase">Education</div>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex gap-2">
                    <span className="text-blue-500">▹</span>
                    <span>Fergana State Technical University</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-600 ml-5">
                    Bachelor’s in Computer Engineering (3rd year)
                  </li>
                  <li className="flex gap-2 pt-2">
                    <span className="text-blue-500">▹</span>
                    <span>Secondary School №40</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 border border-slate-900 bg-slate-950/20 space-y-4">
                <div className="text-xs font-['JetBrains_Mono'] text-slate-600 uppercase">Communication</div>
                <div className="space-y-4">
                  {[
                    { lang: 'Uzbek', level: 'Native (C2)', progress: 100 },
                    { lang: 'English', level: 'Advanced (C1)', progress: 90 },
                    { lang: 'Russian', level: 'Upper-Intermediate', progress: 80 },
                    { lang: 'Turkish', level: 'Intermediate', progress: 60 }
                  ].map((l) => (
                    <div key={l.lang} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-['JetBrains_Mono'] uppercase">
                        <span className="text-slate-400">{l.lang}</span>
                        <span className="text-slate-600">{l.level}</span>
                      </div>
                      <div className="h-[1px] bg-slate-800 relative">
                        <div className="absolute top-0 left-0 h-full bg-blue-500/50" style={{ width: `${l.progress}%` }} />
                      </div>
                    </div>
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

export default About;
