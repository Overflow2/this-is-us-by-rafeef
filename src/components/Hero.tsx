import { useRef, useMemo, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useIsTouchDevice } from '../hooks/useIsTouchDevice';
import { Users, Code, Cpu, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

const founders = [
  {
    id: 1,
    name: 'Rafeef Ammar',
    role: 'Visionary',
    color: '#00FFFF',
    icon: Sparkles,
    stats: { label: 'Focus', value: 'Future' }
  },
  {
    id: 2,
    name: 'Erfan Noor Mahin',
    role: 'Architect',
    color: '#6366F1',
    icon: Code,
    stats: { label: 'Stack', value: 'Full' }
  },
  {
    id: 3,
    name: 'Marjan Ahsan',
    role: 'Catalyst',
    color: '#B5179E',
    icon: Cpu,
    stats: { label: 'Core', value: 'Logic' }
  }
];

export const Hero = () => {
  const mousePosition = useMousePosition();
  const heroRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef({ x: 0, y: 0 });
  const isTouchDevice = useIsTouchDevice();
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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

    return () => {
      window.removeEventListener('resize', updateCenter);
    };
  }, []);

  // Optimized parallax calculation
  const getParallaxStyle = (depth: number) => {
    if (isTouchDevice) {
      return { transform: 'translate3d(0, 0, 0)' };
    }
    const centerX = centerRef.current.x;
    const centerY = centerRef.current.y;
    const moveX = (mousePosition.x - centerX) * depth;
    const moveY = (mousePosition.y - centerY) * depth;

    return {
      transform: `translate3d(${moveX}px, ${moveY}px, 0)`,
      willChange: 'transform',
    };
  };

  const textParallaxStyle = useMemo(
    () => getParallaxStyle(0.015),
    [mousePosition.x, mousePosition.y, isTouchDevice]
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020205]"
    >
      {/* Dynamic Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Central Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-fuchsia-500/10 blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-cyan-900/10 to-transparent" />

        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Left Column - Text & Founders */}
        <motion.div
          className="md:w-1/2 flex flex-col items-start justify-center text-left md:pr-12"
          style={{ ...textParallaxStyle, y: y1 }}
        >
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-space-grotesk tracking-[0.2em] text-cyan-300 uppercase">
              System Online
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black tracking-tighter mb-6 cursor-default"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-gradient-premium block">THIS</span>
            <span className="text-white/90 block mt-[-0.2em]">IS US</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl font-space-grotesk text-slate-400 font-light tracking-wide mb-12 max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where <span className="text-cyan-400 font-normal">tech</span> meets obsession.
            Building the digital future, one pixel at a time.
          </motion.p>

          {/* Holographic Founder Cards */}
          <div className="flex flex-wrap gap-6 mt-4">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.id}
                className="group relative hover:z-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                style={getParallaxStyle(0.02 + index * 0.01)}
              >
                {/* Connection Line (Visual only) */}
                {index < founders.length - 1 && (
                  <div className="absolute top-1/2 left-full w-6 h-[1px] bg-gradient-to-r from-white/10 to-transparent hidden md:block" />
                )}

                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  {/* Glowing Ring */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-50 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      border: `1px solid ${founder.color}`,
                      boxShadow: `0 0 15px ${founder.color}40`,
                      transform: 'rotate(45deg)'
                    }}
                  />

                  {/* Inner Content */}
                  <div className="absolute inset-1 bg-slate-950/80 backdrop-blur-md rounded-lg flex items-center justify-center overflow-hidden z-10 border border-white/5 group-hover:border-white/20 transition-colors">
                    <founder.icon
                      className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-500 group-hover:scale-110"
                      style={{ color: founder.color }}
                    />
                  </div>

                  {/* Hover Info Card */}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 p-4 rounded-xl glass-panel opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -translate-y-2 group-hover:translate-y-0 z-50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{founder.role}</span>
                      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: founder.color }} />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1">{founder.name}</h3>
                    <div className="h-[1px] w-full bg-white/10 my-2" />
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">{founder.stats.label}</span>
                      <span className="text-cyan-300 font-mono">{founder.stats.value}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - 3D Logo / Visual */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end mt-16 md:mt-0 relative"
          style={{ y: y2, opacity }}
        >
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[80px] animate-pulse-slow" />

            {/* Logo Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center drop-shadow-[0_0_50px_rgba(34,211,238,0.3)]">
              <Logo />
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin-slow border border-white/5 rounded-full" />
            <div className="absolute inset-[15%] animate-spin-slow border border-white/5 rounded-full" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};