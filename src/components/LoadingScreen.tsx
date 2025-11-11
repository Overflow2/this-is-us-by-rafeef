import { useState, useEffect } from 'react';

const lines = [
  '> Initializing: ThisIsUs',
  '> Loading core modules...',
  '> Connecting founders...',
  '> Launching innovation protocol...',
  '> System ready.',
];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 400);

      return () => clearTimeout(timeout);
    } else {
      const completeTimeout = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }, 500);

      return () => clearTimeout(completeTimeout);
    }
  }, [currentLine, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0c0a1d] transition-opacity duration-800 ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="relative"
                style={{
                  animation: 'assemble 2s ease-out forwards',
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0,
                }}
              >
                <div
                  className="w-4 h-12 backdrop-blur-md border-2 rounded"
                  style={{
                    borderColor: i === 0 ? '#8b5cf6' : i === 1 ? '#0ea5e9' : '#a78bfa',
                    background: `linear-gradient(135deg, ${
                      i === 0 ? '#8b5cf6' : i === 1 ? '#0ea5e9' : '#a78bfa'
                    }20, transparent)`,
                    boxShadow: `0 0 20px ${i === 0 ? '#8b5cf6' : i === 1 ? '#0ea5e9' : '#a78bfa'}40`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="font-mono text-secondary-300/80 space-y-2">
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards',
              }}
            >
              <p className="text-sm md:text-base flex items-center gap-2">
                <span className="text-secondary-400">{'>'}</span>
                {line}
                {index === displayedLines.length - 1 && currentLine < lines.length && (
                  <span className="inline-block w-2 h-4 bg-secondary-400 ml-1 animate-blink"></span>
                )}
              </p>
            </div>
          ))}
        </div>

        {currentLine >= lines.length && (
          <div className="mt-8 flex justify-center">
            <div
              className="w-64 h-1 bg-gradient-to-r from-secondary-400 via-primary-500 to-secondary-600 rounded-full opacity-0 animate-fade-in"
              style={{
                animationDelay: '0.5s',
                animationFillMode: 'forwards',
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-secondary-400 to-transparent rounded-full animate-loading-bar"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};