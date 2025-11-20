import { useState } from 'react';
import { useIsTouchDevice } from '../hooks/useIsTouchDevice';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'what-we-build', label: 'What We Build' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isTouchDevice = useIsTouchDevice();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsOpen(false);
  };

  const handleToggle = () => {
    if (isTouchDevice) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <nav className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hamburger Button */}
        <button
          onClick={handleToggle}
          aria-label="Main navigation"
          aria-expanded={isOpen}
          className="relative w-10 h-10 sm:w-12 sm:h-12 flex flex-col items-center justify-center gap-1.5 rounded-full backdrop-blur-xl border border-cyan-400/30 bg-[rgba(5,11,22,0.85)] transition-all duration-300 hover:border-cyan-400/60 hover:bg-[rgba(5,11,22,0.95)] group z-10"
          style={{
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.2), inset 0 0 20px rgba(34, 211, 238, 0.05)',
          }}
        >
          <span
            className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            style={{
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
            }}
          />
          <span
            className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
            style={{
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
            }}
          />
          <span
            className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            style={{
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
            }}
          />
        </button>

        {/* Invisible bridge to prevent gap issues */}
        <div
          className="absolute top-12 left-0 w-full h-2"
          style={{ pointerEvents: !isTouchDevice && isOpen ? 'auto' : 'none' }}
        />

        {/* Navigation Menu */}
        <div
          className={`absolute top-14 left-0 w-[75vw] max-w-xs sm:w-64 backdrop-blur-xl border border-cyan-400/30 bg-[rgba(5,11,22,0.95)] rounded-lg overflow-hidden transition-all duration-300 ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{
            boxShadow: '0 10px 40px rgba(34, 211, 238, 0.2), inset 0 0 20px rgba(34, 211, 238, 0.05)',
          }}
        >
          <div className="py-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full px-5 py-3 text-left text-cyan-100/80 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 font-space-grotesk text-sm sm:text-base tracking-wide relative group"
                style={{
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute left-0 top-0 h-full w-0.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};