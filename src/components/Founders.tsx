import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sparkles, Code, Cpu } from 'lucide-react';

const founders = [
  {
    id: 'marjan',
    initial: 'M',
    name: 'Marjan Ahsan',
    role: 'Catalyst',
    description: 'A creative force with an obsession for innovation. Drives the conceptual direction of our projects. We engineer feelings, not just features.',
    skills: ['Strategic Thinking', 'Creative Ideas', 'Future Planning'],
    accent: '#ec4899',
    icon: Sparkles
  },
  {
    id: 'erfan',
    initial: 'E',
    name: 'Erfan Naor Marlin',
    role: 'Architect',
    description: 'The technical mastermind who transforms ideas into reality. Expertise in system design. Elegance is latency you never notice.',
    skills: ['System Design', 'Technical Architecture', 'Problem Solving'],
    accent: '#06b6d4',
    icon: Code
  },
  {
    id: 'rafael',
    initial: 'R',
    name: 'Rafeef Ammar',
    role: 'Visionary',
    description: 'The driving force that brings ideas to life. Passion for execution and tangible solutions. Momentum happens when trust meets clarity.',
    skills: ['Project Execution', 'Team Leadership', 'Process Optimization'],
    accent: '#f5f5f5',
    icon: Cpu
  },
];

export const Founders = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#020205] text-white overflow-hidden py-32 px-6"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#020205]/80 to-[#020205]" />

        {/* Animated Orbs */}
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              The Architects
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Three minds, one sentient studio.
          </p>
        </motion.div>

        {/* Founders List - Alternating Layout */}
        <div className="space-y-32">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Background Splash */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-10 blur-[100px] -z-10 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${founder.accent} 0%, transparent 70%)`,
                }}
              />

              {/* Image/Avatar Side */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Rotating Rings */}
                  <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-4 border border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

                  {/* Glowing Core */}
                  <div
                    className="absolute inset-0 rounded-full opacity-20 blur-3xl"
                    style={{ background: founder.accent }}
                  />

                  {/* Avatar Container */}
                  <div className="absolute inset-8 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-xl flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                    <founder.icon
                      className="w-24 h-24 transition-transform duration-700 group-hover:scale-110"
                      style={{ color: founder.accent }}
                    />

                    {/* Tech Overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30" />
                  </div>

                  {/* Floating Badge */}
                  <div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full glass-panel border border-white/10 text-sm font-mono tracking-widest uppercase"
                    style={{ color: founder.accent }}
                  >
                    {founder.role}
                  </div>
                </div>
              </div>

              {/* Description Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
                  {founder.name}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent mb-8 mx-auto lg:mx-0" />

                <p className="text-lg text-slate-300 leading-relaxed mb-8 font-light">
                  {founder.description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {founder.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};