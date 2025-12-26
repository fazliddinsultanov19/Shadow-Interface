
import React from 'react';

interface MenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuPanel: React.FC<MenuPanelProps> = ({ isOpen, onClose }) => {
  const links = [
    { name: 'Identity', id: 'identity', desc: 'Personal core profile' },
    { name: 'Intelligence', id: 'system', desc: 'Background & education' },
    { name: 'Operations', id: 'experience', desc: 'Career timeline' },
    { name: 'Arsenal', id: 'skillset', desc: 'Technical capabilities' },
    { name: 'Archive', id: 'archive', desc: 'Visual database' },
    { name: 'Uplink', id: 'link', desc: 'Secure communication' }
  ];

  return (
    <div 
      className={`fixed inset-0 z-[60] flex justify-end transition-all duration-700 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div 
        className={`relative w-full max-w-md bg-black border-l border-slate-900 h-full flex flex-col p-12 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-20">
          <div className="font-['JetBrains_Mono'] text-[10px] text-blue-500 uppercase tracking-[0.4em]">Navigation System</div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-white transition-colors group"
          >
            <span className="font-['JetBrains_Mono'] text-[10px] tracking-widest group-hover:animate-pulse">[CLOSE]</span>
          </button>
        </div>

        <nav className="flex-1 space-y-10">
          {links.map((link, idx) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={onClose}
              className="group block space-y-2"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-center gap-4">
                <span className="font-['JetBrains_Mono'] text-[10px] text-blue-500/50">0{idx + 1}</span>
                <h3 className="text-3xl font-['Space_Grotesk'] font-bold text-slate-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 uppercase tracking-tighter">
                  {link.name}
                </h3>
              </div>
              <p className="font-['JetBrains_Mono'] text-[9px] text-slate-600 uppercase tracking-widest ml-10">
                {link.desc}
              </p>
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-10 border-t border-slate-900">
          <div className="font-['JetBrains_Mono'] text-[9px] text-slate-700 space-y-2 uppercase tracking-widest">
            <div>Access Level: Authorized</div>
            <div>Identity: Sultanov_F_Pvt</div>
            <div className="text-blue-500/30 animate-pulse">Scanning for intruders...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPanel;
