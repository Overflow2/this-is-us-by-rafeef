import { useEffect, useState } from 'react';

export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    const updateState = () => setIsTouchDevice(mediaQuery.matches);

    updateState();
    mediaQuery.addEventListener('change', updateState);

    return () => mediaQuery.removeEventListener('change', updateState);
  }, []);

  return isTouchDevice;
};

