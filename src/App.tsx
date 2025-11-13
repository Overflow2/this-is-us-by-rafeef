import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { TopRightNavbar } from './components/TopRightNavbar';
import { Hero } from './components/Hero';
import { WhatWeBuild } from './components/WhatWeBuild';
import { Philosophy } from './components/Philosophy';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { WhyWeExist } from './components/WhyWeExist';
import { Founders } from './components/Founders';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure page scrolls to top on initial load
    window.scrollTo(0, 0);
    
    // Prevent hash-based scrolling on load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Remove the additional delay to ensure immediate display
    window.scrollTo(0, 0);
  };

  return (
    <>
      <CustomCursor />
      <Navbar />
      <TopRightNavbar />

      <Routes>
        <Route path="/" element={
          <>
            {/* Pre-render Hero section during loading for instant display */}
            <div 
              className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              style={{
                pointerEvents: isLoading ? 'none' : 'auto',
                position: 'relative',
                zIndex: isLoading ? 0 : 1,
              }}
            >
              <Hero />
            </div>

            {/* Other sections */}
            <div 
              className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              style={{
                pointerEvents: isLoading ? 'none' : 'auto',
              }}
            >
              <WhatWeBuild />
              <Philosophy />
              <Team />
              <Contact />
            </div>

            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
          </>
        } />
        <Route path="/why-we-exist" element={<WhyWeExist />} />
        <Route path="/founders" element={<Founders />} />
      </Routes>
    </>
  );
}

export default App;