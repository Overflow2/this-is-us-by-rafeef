import { useRef, useMemo, useEffect } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { Users } from 'lucide-react';
import { Logo } from './Logo';


const founders = [
  { id: 1, name: 'Rafeef Ammar', role: 'Visionary', color: '#8b5cf6' }, // purple-500
  { id: 2, name: 'Erfan Noor Mahin', role: 'Architect', color: '#0ea5e9' }, // primary-500
  { id: 3, name: 'Marjan Ahsan', role: 'Catalyst', color: '#a78bfa' } // secondary-400
];

export const Hero = () => {
  const mousePosition = useMousePosition();
  const heroRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef({ x: 0, y: 0 });

  // Update center position on mount and resize
  useEffect(() => {
    const updateCenter = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        centerRef.current = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      }
    };

    updateCenter();
    window.addEventListener('resize', updateCenter, { passive: true });
    window.addEventListener('scroll', updateCenter, { passive: true });

    return () => {
      window.removeEventListener('resize', updateCenter);
      window.removeEventListener('scroll', updateCenter);
    };
  }, []);

  

  // Optimized parallax calculation
  const getParallaxStyle = (depth: number) => {
    const centerX = centerRef.current.x;
    const centerY = centerRef.current.y;
    const moveX = (mousePosition.x - centerX) * depth;
    const moveY = (mousePosition.y - centerY) * depth;
    
    return {
      transform: `translate3d(${moveX}px, ${moveY}px, 0)`,
      willChange: 'transform',
    };
  };

  // Memoize parallax styles to prevent unnecessary recalculations
  const textParallaxStyle = useMemo(() => getParallaxStyle(0.02), [mousePosition.x, mousePosition.y]);
  
  const founderParallaxStyles = useMemo(() => 
    founders.map((_, index) => getParallaxStyle(0.03 + index * 0.01)),
    [mousePosition.x, mousePosition.y]
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0c0a1d] via-[#120f2d] to-[#0c0a1d]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_50%)] animate-pulse-slow"></div>

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 10}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 flex flex-col items-center justify-center" style={{ ...textParallaxStyle, paddingTop: '15px' }}>
        <Logo />
        <div className="mb-8 bg-transparent mt-4">
          <h1 
            className="text-8xl md:text-9xl font-orbitron font-semibold tracking-tighter animate-fade-in"
            style={{
              background: 'transparent',
              color: 'transparent',
              backgroundImage: 'linear-gradient(to right, #8b5cf6, #0ea5e9, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(14, 165, 233, 0.2), 0 0 60px rgba(167, 139, 250, 0.15)',
            }}
          >
            This Is Us
          </h1>
        </div>

        <p className="text-xl md:text-2xl font-space-grotesk text-secondary-100/70 font-light tracking-wide mb-4 animate-fade-in-delay">
          Where tech meets obsession.
        </p>

        <div className="flex justify-center items-center gap-12 md:gap-20 mt-10">
          {founders.map((founder, index) => (
            <div
              key={founder.id}
              className="group relative cursor-pointer"
              style={{
                ...founderParallaxStyles[index],
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div
                className="w-24 h-24 md:w-32 md:h-32 rounded-full relative transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `radial-gradient(circle, ${founder.color}40, ${founder.color}10)`,
                  boxShadow: `0 0 60px ${founder.color}60, inset 0 0 20px ${founder.color}40`,
                }}
              >
                <div
                  className="absolute inset-2 rounded-full backdrop-blur-xl border border-white/10 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${founder.color}20, transparent)`,
                  }}
                >
                  <Users className="w-10 h-10 md:w-12 md:h-12" style={{ color: founder.color }} />
                </div>

                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${founder.color}80, transparent)`,
                    }}
                  ></div>
                </div>
              </div>

              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-48 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4 pointer-events-none"
                style={{
                  background: 'rgba(12, 10, 29, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${founder.color}40`,
                  boxShadow: `0 10px 40px ${founder.color}30`,
                }}
              >
                <p className="text-white font-semibold text-lg mb-1">{founder.name}</p>
                <p className="text-secondary-300/70 text-sm">{founder.role}</p>
                <div className="absolute top-0 left-4 w-0.5 h-6 -translate-y-full" style={{ background: founder.color }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-secondary-400/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-secondary-400/70 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};