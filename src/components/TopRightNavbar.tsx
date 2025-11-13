import { useNavigate } from 'react-router-dom';

const navItems = [
  { id: '/', label: 'Home' },
  { id: '/why-we-exist', label: 'Why we exist?', isRoute: true },
  { id: '/founders', label: 'Founders', isRoute: true },
];

export const TopRightNavbar = () => {
  const navigate = useNavigate();

  const handleClick = (item: typeof navItems[0]) => {
    if (item.isRoute || item.id.startsWith('/')) {
      navigate(item.id);
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="fixed top-6 right-6 z-50 bg-transparent">
      <div className="flex space-x-8 border-b border-cyan-400/50 pb-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            className="text-cyan-100/80 hover:text-cyan-400 transition-all duration-200 font-orbitron text-sm bg-transparent cursor-pointer"
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