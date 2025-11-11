import { useEffect } from 'react';

const foundersData = [
  {
    id: 1,
    name: 'Rafeef Ammar',
    role: 'Visionary',
    color: '#8b5cf6', // secondary-500
    bio: 'A creative force with an obsession for innovation. Rafeef drives the conceptual direction of our projects, ensuring that each solution pushes the boundaries of what\'s possible.',
    skills: ['Strategic Thinking', 'Creative Vision', 'Future Planning']
  },
  {
    id: 2,
    name: 'Erfan Noor Mahin',
    role: 'Architect',
    color: '#0ea5e9', // primary-500
    bio: 'The technical mastermind who transforms ideas into reality. Erfan\'s expertise in system design ensures our solutions are not only innovative but also robust and scalable.',
    skills: ['System Design', 'Technical Architecture', 'Problem Solving']
  },
  {
    id: 3,
    name: 'Marjan Ahsan',
    role: 'Catalyst',
    color: '#a78bfa', // secondary-400
    bio: 'The driving force that brings ideas to life. Marjan\'s passion for execution ensures that our visions are transformed into tangible, impactful solutions.',
    skills: ['Project Execution', 'Team Leadership', 'Process Optimization']
  }
];

export const Founders = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen py-20 px-6 flex items-center justify-center bg-gradient-to-br from-[#0c0a1d] via-[#120f2d] to-[#0c0a1d]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-16 text-center bg-gradient-to-r from-secondary-400 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
          Our Founders
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foundersData.map((founder) => (
            <div 
              key={founder.id}
              className="group relative rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-105"
              style={{
                background: `radial-gradient(circle, ${founder.color}20, transparent)`,
                boxShadow: `0 0 60px ${founder.color}30`,
              }}
            >
              <div className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <div 
                    className="w-32 h-32 rounded-full mb-6 flex items-center justify-center relative"
                    style={{
                      background: `radial-gradient(circle, ${founder.color}40, ${founder.color}10)`,
                      boxShadow: `0 0 40px ${founder.color}60, inset 0 0 20px ${founder.color}40`,
                    }}
                  >
                    <div 
                      className="absolute inset-2 rounded-full backdrop-blur-xl border border-white/10 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${founder.color}20, transparent)`,
                      }}
                    >
                      <div className="text-4xl font-orbitron" style={{ color: founder.color }}>
                        {founder.name.charAt(0)}
                      </div>
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
                  
                  <h2 className="text-3xl font-orbitron text-white mb-2">{founder.name}</h2>
                  <p 
                    className="text-lg font-space-grotesk"
                    style={{ color: founder.color }}
                  >
                    {founder.role}
                  </p>
                </div>
                
                <p className="text-secondary-100/80 font-space-grotesk text-lg mb-6 text-center leading-relaxed">
                  {founder.bio}
                </p>
                
                <div className="border-t border-white/10 pt-4">
                  <h3 className="text-xl font-orbitron text-white mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {founder.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-space-grotesk"
                        style={{
                          background: `${founder.color}20`,
                          color: founder.color,
                          border: `1px solid ${founder.color}40`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-xl bg-gradient-to-r from-secondary-500/10 to-primary-500/10 border border-secondary-400/30 max-w-3xl">
            <blockquote className="text-2xl font-orbitron italic text-secondary-100 mb-4">
              "Together, we are more than the sum of our parts."
            </blockquote>
            <p className="text-secondary-100/70 font-space-grotesk text-lg">
              United by a shared obsession for excellence and innovation, we push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};