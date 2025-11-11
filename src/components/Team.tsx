import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Lightbulb, Sparkles } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Rafeef Ammar',
    title: 'Founder',
    tagline: 'Code is poetry in motion',
    icon: Code,
    color: '#8b5cf6', // secondary-500
    gradient: 'from-secondary-400 to-primary-500',
  },
  {
    id: 2,
    name: 'Marjan Ahsan',
    title: 'Founder',
    tagline: 'Design Means Disruption',
    icon: Lightbulb,
    color: '#0ea5e9', // primary-500
    gradient: 'from-primary-500 to-secondary-600',
  },
  {
    id: 3,
    name: 'Erfan Noor Mahin',
    title: 'Founder',
    tagline: 'Building tomorrow, today',
    icon: Sparkles,
    color: '#a78bfa', // secondary-400
    gradient: 'from-secondary-600 to-secondary-400',
  },
];

export const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, 0.2);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-[#0c0a1d] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.05),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl w-full">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-500 mb-4">
            The Founders
          </h2>
          <p className="text-secondary-100/60 text-lg md:text-xl">Dreamers disguised as devs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {team.map((member, index) => {
            const Icon = member.icon;
            const slideDirection = index === 0 ? '-translate-x-32' : index === 2 ? 'translate-x-32' : 'translate-y-32';

            return (
              <div
                key={member.id}
                className={`relative group transition-all duration-1000 ${
                  isInView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${slideDirection}`
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div
                  className="relative rounded-3xl p-8 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(12, 10, 29, 0.9))',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1 transition-all duration-500 group-hover:h-2"
                    style={{
                      background: `linear-gradient(90deg, ${member.color}, transparent)`,
                      boxShadow: `0 0 20px ${member.color}`,
                    }}
                  ></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div
                        className="w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${member.color}20, transparent)`,
                          border: `2px solid ${member.color}40`,
                          boxShadow: `0 0 40px ${member.color}30`,
                        }}
                      >
                        <Icon className="w-14 h-14 transition-transform duration-500 group-hover:rotate-12" style={{ color: member.color }} />
                      </div>

                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `conic-gradient(from 0deg, ${member.color}00, ${member.color}60, ${member.color}00)`,
                          animation: 'spin-slow 3s linear infinite',
                          filter: 'blur(8px)',
                        }}
                      ></div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p
                      className="text-sm font-semibold mb-4 tracking-wider uppercase"
                      style={{ color: member.color }}
                    >
                      {member.title}
                    </p>
                    <p className="text-secondary-100/60 italic text-sm leading-relaxed">"{member.tagline}"</p>
                  </div>

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${member.color}08, transparent 70%)`,
                    }}
                  ></div>

                  <div className="absolute -bottom-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none">
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${member.color}, transparent)`,
                        filter: 'blur(40px)',
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}20, transparent)`,
                    filter: 'blur(30px)',
                    transform: 'translateY(10px)',
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div
            className="inline-block px-8 py-4 rounded-full backdrop-blur-xl border border-secondary-400/20"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(12, 10, 29, 0.8))',
            }}
          >
            <p className="text-secondary-100/70 text-sm md:text-base">
              Equal visionaries. Equal commitment. Equal impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};