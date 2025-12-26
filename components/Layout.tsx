
import React, { useEffect, useState } from 'react';
import MenuPanel from './MenuPanel';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black min-h-screen">
      <MenuPanel isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <nav className="container mx-auto px-8 flex justify-between items-center">
          <div className="font-['Space_Grotesk'] font-bold text-2xl tracking-tighter flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-white">SULTANOV</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:animate-ping" />
          </div>
          
          <div className="flex items-center space-x-12">
            <div className="hidden lg:block font-['JetBrains_Mono'] text-[9px] text-slate-600 uppercase tracking-[0.3em]">
              Security Level: <span className="text-blue-500">Tier 1</span> • <span className="text-slate-400">SULTANOV ENTERPRISES</span>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-4 group"
              aria-label="Open Navigation"
            >
              <div className="text-right hidden sm:block">
                <div className="font-['JetBrains_Mono'] text-[10px] text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">System Access</div>
                <div className="font-['JetBrains_Mono'] text-[8px] text-slate-600 uppercase tracking-[0.2em]">Private Archive</div>
              </div>
              <div className="w-10 h-10 border border-slate-800 flex flex-col items-center justify-center gap-1.5 group-hover:border-blue-500 transition-colors">
                <span className="w-5 h-[1px] bg-slate-300 group-hover:bg-blue-400 transition-colors" />
                <span className="w-5 h-[1px] bg-slate-300 group-hover:bg-blue-400 transition-colors" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <main className="relative">
        {children}
      </main>

      <footer className="py-24 border-t border-slate-900 bg-black">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 max-w-sm">
            <div className="font-['Space_Grotesk'] font-bold text-xl tracking-tighter uppercase text-white">Sultanov Enterprises</div>
            <p className="text-slate-500 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest leading-loose">
              Architect of visual decision systems. Specialized in high-impact branding and strategic design identity.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-4">
              <div className="text-[10px] font-['JetBrains_Mono'] text-blue-500 uppercase tracking-widest">Network</div>
              <div className="flex flex-col space-y-3 text-[10px] font-['JetBrains_Mono'] text-slate-400 uppercase tracking-widest">
                <a href="https://t.me/fazliddin_designs" target="_blank" rel="noopener" className="hover:text-white transition-colors">Telegram</a>
                <a href="https://www.behance.net/fazliddinsultanov" target="_blank" rel="noopener" className="hover:text-white transition-colors">Behance</a>
                <a href="https://www.pinterest.com/fazliddin_designs/" target="_blank" rel="noopener" className="hover:text-white transition-colors">Pinterest</a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-['JetBrains_Mono'] text-blue-500 uppercase tracking-widest">Archive</div>
              <div className="text-[10px] font-['JetBrains_Mono'] text-slate-600 uppercase tracking-widest">
                © {new Date().getFullYear()} FS_PRV_ARCH
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
