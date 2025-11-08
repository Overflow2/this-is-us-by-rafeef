const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'philosophy', label: 'Why we exist?' },
  { id: 'team', label: 'Founders' },
];

export const TopRightNavbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-6 right-6 z-50 bg-transparent">
      <div className="flex space-x-8 border-b border-cyan-400/50 pb-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-cyan-100/80 hover:text-cyan-400 transition-all duration-200 font-orbitron text-sm bg-transparent"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 400,
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};