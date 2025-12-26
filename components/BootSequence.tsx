
import React, { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "INITIALIZING SULTANOV_CORE_ALPHA...",
  "VERIFYING RSA KEY [2048-BIT]...",
  "ESTABLISHING SECURE HANDSHAKE: TAS_01",
  "DECRYPTING ARCHIVAL NODES...",
  "IDENTITY CONFIRMED: FAZLIDDIN SULTANOV",
  "SYSTEM STATUS: OPTIMAL",
  "WELCOME, ARCHITECT."
];

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 4) + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const logIdx = Math.min(Math.floor((progress / 100) * BOOT_LOGS.length), BOOT_LOGS.length - 1);
    if (!logs.includes(BOOT_LOGS[logIdx])) {
      setLogs(prev => [...prev.slice(-3), BOOT_LOGS[logIdx]]);
    }

    if (progress === 100) {
      setTimeout(() => setFinished(true), 800);
      setTimeout(onComplete, 1600);
    }
  }, [progress, onComplete, logs]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-all duration-1000 ${finished ? 'opacity-0 scale-110 blur-3xl' : 'opacity-100'}`}>
      <div className="w-full max-w-xs space-y-12">
        <div className="space-y-4">
          <div className="flex justify-between items-end font-['JetBrains_Mono'] text-[8px] text-blue-500/40 uppercase tracking-[0.4em]">
            <span>Booting System</span>
            <span className="text-white">{progress}%</span>
          </div>
          <div className="h-[1px] w-full bg-slate-900 overflow-hidden">
            <div 
              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="h-20 space-y-2 overflow-hidden">
          {logs.map((log, i) => (
            <p key={i} className="font-['JetBrains_Mono'] text-[8px] text-slate-500 uppercase tracking-widest animate-reveal-log">
              {log}
            </p>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes reveal-log {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal-log { animation: reveal-log 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default BootSequence;
