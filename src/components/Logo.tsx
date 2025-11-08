import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex justify-center w-full mb-4">
      <img 
        src="../assets/logo1.svg" 
        alt="This Is Us Logo" 
        className="w-40 h-40 md:w-48 md:h-48"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.5)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
    </div>
  );

};
