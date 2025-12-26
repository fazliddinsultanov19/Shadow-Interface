
import React, { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-['Space_Grotesk'] font-bold text-xl tracking-tighter">
            FS<span className="text-blue-500 animate-pulse">.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {['Identity', 'System', 'Skillset', 'Archive', 'Link'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-['JetBrains_Mono'] text-[10px] text-slate-400 hover:text-slate-50 uppercase tracking-[0.2em] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="font-['JetBrains_Mono'] text-[9px] text-slate-500 hidden sm:block">
            <span className="text-blue-500 opacity-50">[</span> UTC+5 {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} <span className="text-blue-500 opacity-50">]</span>
          </div>
        </nav>
      </header>

      <main className="relative pt-20">
        {children}
      </main>

      <footer className="py-20 border-t border-slate-900 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-['JetBrains_Mono'] text-slate-600 tracking-widest uppercase">
            © {new Date().getFullYear()} FAZLIDDIN SULTANOV // ENCRYPTED ARCHIVE
          </div>
          <div className="flex space-x-8 text-[10px] font-['JetBrains_Mono'] text-slate-400 uppercase tracking-widest">
            <a href="https://t.me/fazliddin_designs" target="_blank" className="hover:text-blue-400 transition-colors">Telegram</a>
            <a href="https://www.behance.net/fazliddinsultanov" target="_blank" className="hover:text-blue-400 transition-colors">Behance</a>
            <a href="https://www.pinterest.com/fazliddin_designs/" target="_blank" className="hover:text-blue-400 transition-colors">Pinterest</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
