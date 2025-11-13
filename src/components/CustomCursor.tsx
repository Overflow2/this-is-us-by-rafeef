import { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafId = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      
      // Cancel any pending animation frame
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      
      // Schedule new animation frame
      rafId.current = requestAnimationFrame(() => {
        setPosition(mouseRef.current);
        rafId.current = null;
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [isVisible]);

  // Reset RAF on visibility change
  useEffect(() => {
    if (!isVisible && rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div
          className="w-4 h-4 rounded-full border-2 border-cyan-400"
          style={{
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
          }}
        ></div>
      </div>

      <div
        className="fixed pointer-events-none z-[9998] will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 1.5 : 1})`,
          opacity: isClicking ? 0.6 : 0.3,
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        }}
      >
        <div
          className="w-12 h-12 rounded-full border border-cyan-400/50"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent)',
          }}
        ></div>
      </div>

      {isClicking && (
        <div
          className="fixed pointer-events-none z-[9997] animate-ping will-change-transform"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-8 h-8 rounded-full bg-cyan-400/30"></div>
        </div>
      )}
    </>
  );
};