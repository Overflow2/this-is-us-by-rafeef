import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const lines = [
  'Initializing system core...',
  'Loading neural architecture...',
  'Establishing secure connection...',
  'Syncing founder nodes...',
  'System ready.',
];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      const completeTimeout = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 500); // Wait for exit animation
      }, 800);
      return () => clearTimeout(completeTimeout);
    }
  }, [currentLine, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020205] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (isComplete) onComplete();
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Central Loader */}
        <div className="flex justify-center mb-12">
          <div className="relative w-24 h-24">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-0 border-t-2 border-cyan-400 rounded-full animate-spin-slow" style={{ animationDuration: '3s' }} />

            {/* Inner Ring */}
            <div className="absolute inset-4 border-2 border-purple-500/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            <div className="absolute inset-4 border-b-2 border-purple-500 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '4s' }} />

            {/* Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            </div>
          </div>
        </div>

        {/* Text Output */}
        <div className="font-mono text-sm space-y-2 min-h-[160px]">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: index <= currentLine ? (index === currentLine ? 1 : 0.5) : 0,
                x: index <= currentLine ? 0 : -10
              }}
              className="flex items-center gap-3"
            >
              <span className="text-cyan-500/50">{`0${index + 1}`}</span>
              <span className={index === currentLine ? "text-cyan-300" : "text-slate-500"}>
                {line}
              </span>
              {index === currentLine && (
                <span className="w-1.5 h-4 bg-cyan-400 animate-blink ml-auto" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min((currentLine / (lines.length - 1)) * 100, 100)}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};