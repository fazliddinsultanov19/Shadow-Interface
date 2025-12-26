
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="link" className="py-32 relative px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3 space-y-4">
            <div className="font-['JetBrains_Mono'] text-[10px] text-blue-500 uppercase tracking-[0.4em]">Section 05</div>
            <h3 className="text-4xl font-['Space_Grotesk'] font-bold uppercase tracking-tight">Direct<br />Uplink</h3>
            <div className="w-12 h-1 bg-slate-800" />
          </div>

          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-12">
                <div className="space-y-2">
                  <div className="text-[10px] font-['JetBrains_Mono'] text-slate-600 uppercase tracking-widest">Protocol 01</div>
                  <h4 className="text-lg font-['Space_Grotesk'] font-medium text-slate-100">Email Dispatch</h4>
                  <a href="mailto:fazliddinsultanov19@gmail.com" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm break-all">
                    fazliddinsultanov19@gmail.com
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-['JetBrains_Mono'] text-slate-600 uppercase tracking-widest">Protocol 02</div>
                  <h4 className="text-lg font-['Space_Grotesk'] font-medium text-slate-100">Secure Line</h4>
                  <a href="tel:+998938076886" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    +998 93 807 68 86
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-['JetBrains_Mono'] text-slate-600 uppercase tracking-widest">Protocol 03</div>
                  <h4 className="text-lg font-['Space_Grotesk'] font-medium text-slate-100">Satellite Comm</h4>
                  <a href="https://t.me/fazliddin_designs" target="_blank" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    t.me/fazliddin_designs
                  </a>
                </div>
              </div>

              <div className="bg-slate-950/40 p-10 border border-slate-900 flex flex-col items-center justify-center text-center space-y-8">
                <div className="w-16 h-16 border border-slate-800 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 border border-blue-500/30 rounded-full animate-ping" />
                  <div className="absolute w-2 h-2 bg-blue-500 rounded-full" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-['JetBrains_Mono'] text-slate-400 uppercase tracking-widest">Awaiting Command</p>
                  <p className="text-xs text-slate-600 max-w-[200px] font-['Inter']">Available for worldwide strategic partnerships and elite design commissions.</p>
                </div>
                <button className="w-full py-4 border border-blue-500/50 text-[11px] font-['JetBrains_Mono'] text-blue-400 uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-all duration-500">
                  Initiate Connection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
