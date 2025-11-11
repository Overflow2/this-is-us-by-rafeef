import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export const Philosophy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, 0.3);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-b from-[#0c0a1d] via-[#120f2d] to-[#0c0a1d] overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              border: '1px solid rgba(139, 92, 246, 0.05)',
              borderRadius: '30%',
              animation: `spin-slow ${20 + i * 5}s linear infinite`,
              animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
            }}
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: `float ${5 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div
                className="w-32 h-32 backdrop-blur-sm border border-secondary-400/20"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(14, 165, 233, 0.05))',
                  transform: `rotate(${i * 60}deg)`,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  boxShadow: '0 0 40px rgba(139, 92, 246, 0.2)',
                }}
              ></div>
            </div>
          ))}

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48"
            style={{
              animation: 'spin-slow 15s linear infinite',
            }}
          >
            <div
              className="w-full h-full backdrop-blur-md border-2 border-secondary-500/30 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1), transparent)',
                boxShadow: '0 0 60px rgba(167, 139, 250, 0.3)',
                transform: 'rotate(45deg)',
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl text-center">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-primary-500 to-secondary-600 leading-tight mb-8">
            Innovation is not a department —
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 via-secondary-500 to-secondary-400 leading-tight">
            it's our DNA.
          </h2>

          <div className="mt-16 space-y-4">
            <div
              className={`inline-block px-6 py-3 rounded-full backdrop-blur-xl border border-secondary-400/30 transition-all duration-700 delay-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(14, 165, 233, 0.05))',
              }}
            >
              <p className="text-secondary-100/80 text-lg md:text-xl font-light">
                We don't follow trends. We create them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-400/50 to-transparent"></div>
    </section>
  );
};