import { useEffect, useMemo, useRef, useState } from 'react';

const founders = [
  {
    id: 'marjan',
    initial: 'M',
    name: 'Marjan Ahsan',
    role: 'Catalyst',
    description:
      'A creative force with an obsession for innovation. Drives the conceptual direction of our projects.',
    skills: ['Strategic Thinking', 'Creative Ideas', 'Future Planning'],
    achievements: [
      { label: 'Concept Systems', value: 48 },
      { label: 'Patents Filed', value: 12 },
    ],
    milestones: [
      { year: '2019', title: 'Vision Protocol', detail: 'Mapped first adaptive product strategy.' },
      { year: '2021', title: 'Mycelium Grid', detail: 'Launched cross-industry co-creation lab.' },
    ],
    quote: 'We engineer feelings, not just features.',
    accent: '#ec4899',
  },
  {
    id: 'erfan',
    initial: 'E',
    name: 'Erfan Naor Marlin',
    role: 'Architect',
    description: 'The technical mastermind who transforms ideas into reality. Expertise in system design.',
    skills: ['System Design', 'Technical Architecture', 'Problem Solving'],
    achievements: [
      { label: 'Systems Deployed', value: 63 },
      { label: 'Latency Reduced', value: 87, suffix: '%' },
    ],
    milestones: [
      { year: '2018', title: 'Nova Kernel', detail: 'Shipped self-healing infra runtime.' },
      { year: '2022', title: 'Helix Mesh', detail: 'Unified collaboration surface across orgs.' },
    ],
    quote: 'Elegance is latency you never notice.',
    accent: '#06b6d4',
  },
  {
    id: 'rafael',
    initial: 'R',
    name: 'Rafael Ammar',
    role: 'Visionary',
    description: 'The driving force that brings ideas to life. Passion for execution and tangible solutions.',
    skills: ['Project Execution', 'Team Leadership', 'Process Optimization'],
    achievements: [
      { label: 'Launches Led', value: 37 },
      { label: 'Teams Mentored', value: 19 },
    ],
    milestones: [
      { year: '2020', title: 'Pulse Framework', detail: 'Scaled delivery rituals globally.' },
      { year: '2023', title: 'Flux Guild', detail: 'Built the company-wide outcomes radar.' },
    ],
    quote: 'Momentum happens when trust meets clarity.',
    accent: '#f5f5f5',
  },
];

const philosophyWords = ['Precision', 'Empathy', 'Momentum', 'Integrity', 'Play', 'Courage'];

const connectionMatrix = [
  { from: 'Marjan', to: 'Erfan', label: 'Vision → Architecture' },
  { from: 'Erfan', to: 'Rafael', label: 'Systems → Delivery' },
  { from: 'Rafael', to: 'Marjan', label: 'Execution → Future' },
];

const useCountUp = (target: number, active: boolean) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, active]);
  return value;
};

export const Founders = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeId, setActiveId] = useState(founders[0].id);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleTarget = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) return;
      const { innerWidth, innerHeight } = window;
      const offsetX = (event.clientX / innerWidth - 0.5) * 20;
      const offsetY = (event.clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty('--hero-offset-x', `${offsetX}px`);
      heroRef.current.style.setProperty('--hero-offset-y', `${offsetY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta == null || event.gamma == null) return;
      setTilt({
        x: event.beta * 0.05,
        y: event.gamma * 0.05,
      });
    };
    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        const dx = particleTarget.current.x - particle.x;
        const dy = particleTarget.current.y - particle.y;
        particle.vx += dx * 0.0005;
        particle.vy += dy * 0.0005;
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        particle.x += particle.vx;
        particle.y += particle.vy;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' ? 'rgba(6,182,212,0.6)' : 'rgba(15,23,42,0.4)';
        ctx.fill();
      });
      animationId = requestAnimationFrame(render);
    };
    render();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  useEffect(() => {
    const activeCard = document.querySelector<HTMLElement>(`[data-founder="${activeId}"]`);
    if (!activeCard) return;
    const rect = activeCard.getBoundingClientRect();
    particleTarget.current = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }, [activeId]);

  useEffect(() => {
    const cards = document.querySelectorAll('.founder-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const playVoice = (quote: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(quote);
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    } else {
      alert(quote);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX == null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 80) {
      const currentIndex = founders.findIndex((f) => f.id === activeId);
      const nextIndex = diff < 0 ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex >= 0 && nextIndex < founders.length) {
        setActiveId(founders[nextIndex].id);
      }
    }
    setTouchStartX(null);
  };

  const connectionText = useMemo(
    () =>
      connectionMatrix.filter((conn) =>
        conn.from.startsWith(founders.find((f) => f.id === activeId)?.name.split(' ')[0] || '')
      ),
    [activeId]
  );

  return (
    <section className={`founders-shell ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <canvas ref={canvasRef} className="founders-canvas" />

      <div className="theme-toggle">
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div
        ref={heroRef}
        className="founders-hero"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="hero-content">
          <p className="eyebrow">THE ARCHITECTS OF TOMORROW</p>
          <h1>The Digital Sculpture Garden of Talent</h1>
          <p className="hero-subtitle">
            Three minds, one sentient studio. Each founder is a living system, evolving in sync.
          </p>
        </div>
      </div>

      <div className="philosophy-particles">
        {philosophyWords.map((word, index) => (
          <span key={word} style={{ animationDelay: `${index * 0.4}s` }}>
            {word}
          </span>
        ))}
      </div>

      <div className="founders-grid">
        {founders.map((founder) => {
          const isActive = founder.id === activeId;
          return (
            <article
              key={founder.id}
              className={`founder-card ${isActive ? 'active' : ''}`}
              data-founder={founder.id}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
              onMouseEnter={() => setActiveId(founder.id)}
              onFocus={() => setActiveId(founder.id)}
              onClick={() => playVoice(founder.quote)}
            >
              <div className="holo-portrait">
                <div className="portrait-ring" style={{ borderColor: founder.accent }} />
                <div className="portrait-core" />
                <div className="portrait-label">{founder.initial}</div>
              </div>

              <div className="founder-info">
                <p className="founder-role" style={{ color: founder.accent }}>
                  {founder.role}
                </p>
                <h2 className="founder-name">{founder.name}</h2>
                <p className="founder-description">{founder.description}</p>
              </div>

              <div className="skill-web">
                <svg viewBox="0 0 200 160">
                  <circle cx="100" cy="80" r="6" className="skill-node center" />
                  {founder.skills.map((skill, index) => {
                    const angle = (index / founder.skills.length) * Math.PI * 2;
                    const radius = 55;
                    const x = 100 + Math.cos(angle) * radius;
                    const y = 80 + Math.sin(angle) * radius;
                    return (
                      <g key={skill} className={`skill-node-group ${isActive ? 'connected' : ''}`}>
                        <line x1="100" y1="80" x2={x} y2={y} className="skill-link" />
                        <circle cx={x} cy={y} r="5" className="skill-node" />
                        <text x={x} y={y - 12} className="skill-label">
                          {skill}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="achievements">
                {founder.achievements.map((metric) => {
                  const display = useCountUp(metric.value, isActive);
                  return (
                    <div key={metric.label} className="achievement">
                      <span className="achievement-value">
                        {display}
                        {metric.suffix || ''}
                      </span>
                      <span className="achievement-label">{metric.label}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>

      <div className="connection-visual">
        <h3>Connection Visualization</h3>
        <div className="connection-map">
          {connectionMatrix.map((conn) => (
            <div key={`${conn.from}-${conn.to}`} className="connection-link">
              <span>{conn.from}</span>
              <div className="connection-line">
                <div className="connection-flow" />
              </div>
              <span>{conn.to}</span>
              <p>{conn.label}</p>
            </div>
          ))}
        </div>
        <div className="connection-active">
          {connectionText.length ? connectionText[0].label : 'Synchronized thinking in motion.'}
        </div>
      </div>

      <div className="timeline-section">
        <h3>Journey Timeline</h3>
        <div className="timeline-track">
          {founders.flatMap((founder) =>
            founder.milestones.map((milestone) => (
              <div key={`${founder.id}-${milestone.year}`} className="timeline-card">
                <p className="timeline-year">{milestone.year}</p>
                <p className="timeline-title">{milestone.title}</p>
                <p className="timeline-detail">{milestone.detail}</p>
                <span className="timeline-owner">{founder.name}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="collaboration-map">
        <h3>Collaboration Map</h3>
        <div className="collaboration-grid">
          <div className="collab-node">Vision Lab</div>
          <div className="collab-node active">Systems Forge</div>
          <div className="collab-node">Delivery Orbit</div>
        </div>
      </div>
    </section>
  );
};