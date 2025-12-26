
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="link" className="py-40 relative px-8 bg-black overflow-hidden">
      {/* Background World Map Graphic (Subtle) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] border border-blue-500/20 rounded-full animate-[spin_200s_linear_infinite]" />
        <div className="absolute w-[60vw] h-[60vw] border border-slate-800 rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-6">
            <div className="font-['JetBrains_Mono'] text-[10px] text-blue-500 uppercase tracking-[0.5em]">Uplink // 05</div>
            <h3 className="text-5xl font-['Space_Grotesk'] font-bold uppercase tracking-tighter text-white">Secure<br />Dispatch</h3>
            <div className="w-20 h-1 bg-slate-800" />
            
            <div className="pt-10 space-y-8">
              <div className="p-4 border border-slate-900 bg-slate-950/50 space-y-4">
                <div className="flex justify-between items-center text-[9px] font-['JetBrains_Mono'] text-slate-500">
                  <span>SIGNAL_QUALITY</span>
                  <span className="text-green-500">OPTIMAL</span>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} className={`h-4 w-full ${i < 7 ? 'bg-blue-500/40' : 'bg-slate-900'} animate-pulse`} style={{ animationDelay: `${i*100}ms` }} />
                  ))}
                </div>
              </div>
              
              <div className="text-[9px] font-['JetBrains_Mono'] text-slate-600 uppercase tracking-[0.3em] leading-relaxed">
                LOC: 41.2995° N, 69.2401° E<br />
                REMOTE_ACCESS: ENABLED
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-12">
                {[
                  { label: "PROTOCOL_01", title: "Direct_Email", value: "fazliddinsultanov19@gmail.com", href: "mailto:fazliddinsultanov19@gmail.com" },
                  { label: "PROTOCOL_02", title: "Encrypted_Line", value: "+998 93 807 68 86", href: "tel:+998938076886" },
                  { label: "PROTOCOL_03", title: "Social_Node", value: "@fazliddin_designs", href: "https://t.me/fazliddin_designs" }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2 group">
                    <div className="text-[9px] font-['JetBrains_Mono'] text-blue-500/50 uppercase tracking-widest">{item.label}</div>
                    <h4 className="text-xs font-['JetBrains_Mono'] text-slate-500 uppercase tracking-[0.4em] group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <a href={item.href} className="block text-xl font-['Space_Grotesk'] font-medium text-white hover:text-blue-500 transition-colors break-all">
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>

              <div className="relative p-1 bg-gradient-to-br from-slate-900 to-black">
                <div className="bg-black p-10 flex flex-col items-center justify-center text-center space-y-10 relative overflow-hidden">
                  {/* Radar Pulse */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <div className="w-40 h-40 border border-blue-500 rounded-full animate-ping" />
                  </div>

                  <div className="w-20 h-20 border border-slate-900 flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-blue-500/10 rotate-45 animate-spin" />
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" />
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-[10px] font-['JetBrains_Mono'] text-white uppercase tracking-[0.5em]">Initiate Mission</h5>
                    <p className="text-[10px] font-['JetBrains_Mono'] text-slate-600 uppercase tracking-widest leading-loose">
                      System available for global strategic partnerships and elite creative operations.
                    </p>
                  </div>

                  <button className="w-full py-4 bg-blue-500/5 border border-blue-500/30 text-[10px] font-['JetBrains_Mono'] text-blue-400 uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all duration-500 overflow-hidden relative group">
                    <span className="relative z-10">Send Command</span>
                    <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
