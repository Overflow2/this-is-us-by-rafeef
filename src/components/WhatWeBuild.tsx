import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Zap, Rocket, Cpu } from 'lucide-react';


const projects = [
  {
    id: 1,
    title: 'Notionary',
    description: 'A place for thinkers & Revolution of note-taking',
    icon: Cpu,
    color: '#00FFFF',
  },
  {
    id: 2,
    title: 'OnlyPets',
    description: 'Find Your Fur-ever Friend',
    icon: Zap,
    color: '#6366F1',
  },
  {
    id: 3,
    title: 'Catalyst-js',
    description: 'A curated collection of beautiful React components. Built with Tailwind CSS and Framer Motion. Completely open-source.',
    icon: Rocket,
    color: '#B5179E',
  },
];

export const WhatWeBuild = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, 0.2);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="what-we-build"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-[#050B16] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-flow 20s linear infinite',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            What We Build
          </h2>
          <p className="text-cyan-100/60 text-lg md:text-xl">Innovation at the intersection of art and code</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredId === project.id;

            return (
                <motion.div
                key={project.id}
                className={`relative group cursor-pointer transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                  whileHover={{ y: -8 }}
              >
                <div
                  className="relative h-80 rounded-2xl p-8 backdrop-blur-xl border transition-all duration-500"
                  style={{
                    background: isHovered
                      ? `linear-gradient(135deg, ${project.color}15, rgba(5, 11, 22, 0.8))`
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(5, 11, 22, 0.8))',
                    borderColor: isHovered ? `${project.color}60` : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: isHovered
                      ? `0 20px 60px ${project.color}40, inset 0 0 40px ${project.color}10`
                      : '0 10px 40px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1 rounded-t-2xl transition-all duration-500"
                    style={{
                      background: isHovered ? project.color : 'transparent',
                      boxShadow: isHovered ? `0 0 20px ${project.color}` : 'none',
                    }}
                  ></div>

                  <div className="relative z-10 h-full flex flex-col">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}20, transparent)`,
                        border: `1px solid ${project.color}40`,
                        transform: isHovered ? 'rotate(12deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: project.color }} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-500">
                      {project.title}
                    </h3>

                    <p className="text-cyan-100/60 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div
                      className="mt-6 flex items-center gap-2 text-sm font-semibold transition-all duration-500"
                      style={{
                        color: isHovered ? project.color : 'rgba(255, 255, 255, 0.5)',
                        transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                      }}
                    >
                      <span>Explore</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {isHovered && (
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${project.color}10, transparent 70%)`,
                        animation: 'pulse-glow 2s ease-in-out infinite',
                      }}
                    ></div>
                  )}
                </div>

                <div
                  className="absolute inset-0 rounded-2xl transition-opacity duration-500"
                  style={{
                    opacity: isHovered ? 0.3 : 0,
                    background: `linear-gradient(135deg, ${project.color}, transparent)`,
                    filter: 'blur(40px)',
                    transform: 'translateY(20px)',
                    zIndex: -1,
                  }}
                ></div>
                </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};