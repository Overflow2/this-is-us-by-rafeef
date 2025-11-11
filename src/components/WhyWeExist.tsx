import { useEffect } from 'react';

export const WhyWeExist = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen py-20 px-6 flex items-center justify-center bg-gradient-to-br from-[#0c0a1d] via-[#120f2d] to-[#0c0a1d]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-12 bg-gradient-to-r from-secondary-400 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
          Why We Exist
        </h1>
        
        <div className="space-y-8 text-left">
          <div className="p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-secondary-400/20">
            <h2 className="text-2xl font-orbitron text-secondary-300 mb-4">Our Purpose</h2>
            <p className="text-secondary-100/80 font-space-grotesk text-lg leading-relaxed">
              We exist to push the boundaries of what's possible in technology. Our obsession with innovation drives us to create solutions that don't just solve problems, but redefine what's possible.
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-primary-500/20">
            <h2 className="text-2xl font-orbitron text-primary-300 mb-4">Our Vision</h2>
            <p className="text-secondary-100/80 font-space-grotesk text-lg leading-relaxed">
              We envision a future where technology seamlessly integrates with human potential, amplifying creativity and enabling breakthroughs that transform industries and improve lives.
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-secondary-600/20">
            <h2 className="text-2xl font-orbitron text-secondary-500 mb-4">Our Commitment</h2>
            <p className="text-secondary-100/80 font-space-grotesk text-lg leading-relaxed">
              We are committed to excellence in every line of code, every design decision, and every interaction. Our work is not just our profession—it's our passion and our responsibility to future generations.
            </p>
          </div>
          
          <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-secondary-500/10 to-primary-500/10 border border-secondary-400/30">
            <blockquote className="text-2xl font-orbitron text-center italic text-secondary-100">
              "Where tech meets obsession, magic happens."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};