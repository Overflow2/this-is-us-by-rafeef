import React from 'react';

export const Logo: React.FC = () => {
  return (
    <img 
      src="./logo1.svg" 
      alt="This Is Us Logo" 
      className="w-full h-full object-contain animate-spin-slow"
      style={{
        filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.5)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))',
      }}
    />
  );
};