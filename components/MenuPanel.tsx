
import React from 'react';

interface MenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuPanel: React.FC<MenuPanelProps> = ({ isOpen, onClose }) => {
  const links = [
    { name: 'IDENTITY', id: 'identity', desc: 'Core system kernel' },
    { name: 'THE GUARDIAN', id: 'executive-dossier', desc: 'Executive subject intelligence' },
    { name: 'OPERATIONS', id: 'experience', desc: 'Career mission timeline' },
    { name: 'WEAPONS', id: 'tactical-assets', desc: 'Technical combat arsenal' },
    { name: 'ARCHIVE', id: 'archive', desc: 'Decrypted visual evidence' },
    { name: 'UPLINK', id: 'link', desc: 'Secure dispatch interface' }
  ];

  return (
    <div 
      className={`fixed inset-0 z-[60] flex justify-end transition-all duration-1000 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div 
        className={`absolute inset-0 bg-black/90 backdrop-blur-2xl transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <div 
        className={`relative w-full max-w-xl bg-black border-l border-slate-900 h-full flex flex-col p-12 md:p-24 transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent" />
        
        <div className="flex justify-between items-center mb-24">
          <div className="space-y-1">
            <div className="font-['JetBrains_Mono'] text-[9px] text-blue-500 uppercase tracking-[0.5em] animate-pulse">Nav_Control_Matrix</div>
            <div className="text-[7px] font-['JetBrains_Mono'] text-slate-700 uppercase tracking-widest">SULTANOV_ACCESS_NODE</div>
          </div>
          <button 
            onClick={onClose}
            className="group relative px-6 py-2 border border-slate-900 hover:border-blue-500/40 transition-all"
          >
            <span className="font-['JetBrains_Mono'] text-[10px] text-slate-500 group-hover:text-blue-400 transition-colors uppercase tracking-[0.3em]">Close</span>
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center space-y-10">
          {links.map((link, idx) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={onClose}
              className="group block relative"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-center gap-8">
                <span className="font-['JetBrains_Mono'] text-[9px] text-slate-800 group-hover:text-blue-500 transition-colors">0{idx + 1}</span>
                <div className="overflow-hidden">
                  <h3 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-bold text-slate-700 group-hover:text-white group-hover:translate-x-4 transition-all duration-700 uppercase tracking-tighter">
                    {link.name}
                  </h3>
                </div>
              </div>
              <p className="font-['JetBrains_Mono'] text-[9px] text-slate-800 uppercase tracking-[0.3em] mt-2 ml-14 group-hover:text-slate-500 transition-colors">
                // {link.desc}
              </p>
            </a>
          ))}
        </nav>

        <div className="mt-auto flex justify-between items-end border-t border-slate-900 pt-10">
          <div className="space-y-2 text-[8px] font-['JetBrains_Mono'] text-slate-700 uppercase tracking-widest">
            <div>Auth: Sultanov_FS</div>
            <div>Status: Secure</div>
          </div>
          <div className="text-[8px] font-['JetBrains_Mono'] text-blue-950 uppercase tracking-widest">
            Protocol: 0x290404
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPanel;
