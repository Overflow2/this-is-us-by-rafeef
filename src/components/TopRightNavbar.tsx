import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { id: '/', label: 'Home' },
  { id: '/why-we-exist', label: 'Why we exist?', isRoute: true },
  { id: '/founders', label: 'Founders', isRoute: true },
];

export const TopRightNavbar = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleClick = (item: typeof navItems[0]) => {
    if (item.isRoute || item.id.startsWith('/')) {
      navigate(item.id);
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileOpen(false);
  };

  return (
    <nav className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 bg-transparent">
      {/* Desktop pill nav */}
      <div className="hidden md:flex items-center justify-center">
        <div className="px-8 h-14 rounded-full backdrop-blur-2xl border border-white/10 bg-[rgba(5,11,22,0.8)] shadow-[0_10px_40px_rgba(34,211,238,0.2)] flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              className="text-sm font-orbitron text-cyan-100/80 hover:text-white transition-colors"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 500,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile / compressed view */}
      <div className="md:hidden relative flex items-center justify-center">
        <button
          aria-label="Open navigation menu"
          className="w-12 h-12 rounded-full backdrop-blur-xl border border-cyan-400/30 bg-[rgba(5,11,22,0.85)] flex flex-col items-center justify-center gap-1 shadow-[0_0_25px_rgba(34,211,238,0.2)]"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
        </button>

        <div
          className={`absolute top-14 right-0 w-40 rounded-2xl backdrop-blur-xl border border-cyan-400/30 bg-[rgba(5,11,22,0.95)] shadow-[0_10px_40px_rgba(34,211,238,0.25)] transition-all duration-300 overflow-hidden ${
            isMobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              className="w-full px-5 py-3 text-left text-cyan-100/80 hover:text-cyan-400 hover:bg-cyan-400/10 font-space-grotesk text-sm transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};