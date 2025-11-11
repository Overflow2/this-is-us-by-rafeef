import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'what-we-build', label: 'What We Build' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  return (
    <nav className="fixed top-6 left-6 z-50">
      <div 
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Hamburger Button */}
        <button
          className="relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full backdrop-blur-xl border border-secondary-400/30 bg-[rgba(12,10,29,0.8)] transition-all duration-300 hover:border-secondary-400/60 hover:bg-[rgba(12,10,29,0.95)] group z-10"
          style={{
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.05)',
          }}
        >
          <span
            className={`w-6 h-0.5 bg-secondary-400 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            style={{
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
            }}
          />
          <span
            className={`w-6 h-0.5 bg-secondary-400 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
            style={{
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
            }}
          />
          <span
            className={`w-6 h-0.5 bg-secondary-400 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            style={{
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
            }}
          />
        </button>

        {/* Invisible bridge to prevent gap issues */}
        <div 
          className="absolute top-12 left-0 w-full h-2"
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        />

        {/* Navigation Menu */}
        <div
          className={`absolute top-14 left-0 min-w-[200px] backdrop-blur-xl border border-secondary-400/30 bg-[rgba(12,10,29,0.95)] rounded-lg overflow-hidden transition-all duration-300 ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{
            boxShadow: '0 10px 40px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.05)',
          }}
        >
          <div className="py-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full px-6 py-3 text-left text-secondary-100/80 hover:text-secondary-400 hover:bg-secondary-400/10 transition-all duration-200 font-space-grotesk text-sm tracking-wide relative group"
                style={{
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute left-0 top-0 h-full w-0.5 bg-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};