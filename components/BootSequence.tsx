
import React, { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "INITIALIZING SECURE KERNEL...",
  "VERIFYING IDENTITY: FAZLIDDIN SULTANOV",
  "DECRYPTING PRIVATE ARCHIVES...",
  "CONNECTING TO GLOBAL NODE: UZBEKISTAN/TAS",
  "ESTABLISHING SECURE PROTOCOLS...",
  "LOADING CORE ASSETS...",
  "ACCESS GRANTED."
];

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLogIdx, setCurrentLogIdx] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setFinished(true), 500);
      setTimeout(onComplete, 1200);
    }
    
    // Cycle logs based on progress
    const idx = Math.min(Math.floor((progress / 100) * BOOT_LOGS.length), BOOT_LOGS.length - 1);
    setCurrentLogIdx(idx);
  }, [progress, onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${finished ? 'opacity-0 scale-105' : 'opacity-100'}`}>
      <div className="w-full max-w-md px-6 space-y-8">
        <div className="space-y-2">
          <div className="flex justify-between items-end font-['JetBrains_Mono'] text-[10px] text-slate-500 tracking-widest uppercase">
            <span>System Status: Booting</span>
            <span className="text-slate-300">{progress}%</span>
          </div>
          <div className="h-[2px] w-full bg-slate-900 overflow-hidden relative">
            <div 
              className="absolute top-0 left-0 h-full bg-slate-300 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="h-12 flex flex-col items-center">
          <p className="font-['JetBrains_Mono'] text-[11px] text-blue-400 tracking-widest uppercase text-center animate-pulse">
            {BOOT_LOGS[currentLogIdx]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;
