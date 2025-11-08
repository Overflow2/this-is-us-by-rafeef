import { useState, useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { Send, Github, Twitter, Linkedin } from 'lucide-react';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, 0.3);
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const message = input;
    setInput('');
    setIsProcessing(true);

    const processingLogs = [
      '> Processing input...',
      '> Establishing secure connection...',
      '> Encrypting message...',
      `> Message received: "${message}"`,
      '> Routing to founders...',
      '> Transmission successful!',
      '> We\'ll get back to you soon.',
      '',
    ];

    for (let i = 0; i < processingLogs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLogs((prev) => [...prev, processingLogs[i]]);
    }

    setIsProcessing(false);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-b from-[#050B16] to-[#0a0f1a] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-cyan-100/60 text-lg">Let's build something extraordinary together</p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div
            className="rounded-2xl backdrop-blur-2xl border border-cyan-400/30 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.03), rgba(5, 11, 22, 0.95))',
              boxShadow: '0 20px 60px rgba(0, 255, 255, 0.2)',
            }}
          >
            <div className="bg-gradient-to-r from-cyan-400/20 to-blue-500/20 px-6 py-4 border-b border-cyan-400/20 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-400/70"></div>
              </div>
              <span className="ml-4 text-cyan-300/70 text-sm font-mono">terminal://thisIsUs/contact</span>
            </div>

            <div className="p-6">
              <div
                className="font-mono text-sm text-cyan-100/80 mb-4 h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-400/20 scrollbar-track-transparent"
              >
                {logs.length === 0 && (
                  <div className="text-cyan-400/50">
                    <p>{'>'} System initialized...</p>
                    <p>{'>'} Ready for input_</p>
                    <p className="mt-4 text-cyan-100/40">Type your message and hit enter</p>
                  </div>
                )}
                {logs.map((log, index) => (
                  <p
                    key={index}
                    className={`${log.includes('successful') ? 'text-green-400' : 'text-cyan-300/70'} leading-relaxed`}
                  >
                    {log}
                  </p>
                ))}
                <div ref={logsEndRef} />
              </div>

              <form onSubmit={handleSubmit} className="relative">
                <div className="flex items-center gap-2 text-cyan-400/70 font-mono text-sm">
                  <span>{'>'}</span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isProcessing}
                    className="flex-1 bg-transparent outline-none text-cyan-100 placeholder-cyan-400/30"
                    placeholder="type your message and hit enter_"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    disabled={isProcessing || !input.trim()}
                    className="p-2 rounded-lg bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                  >
                    <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 flex justify-center gap-6 transition-all duration-1000 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { icon: Github, color: '#00FFFF', href: '#' },
            { icon: Twitter, color: '#6366F1', href: '#' },
            { icon: Linkedin, color: '#B5179E', href: '#' },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="group relative w-14 h-14 rounded-full backdrop-blur-xl border border-white/10 hover:border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(5, 11, 22, 0.8))',
                }}
              >
                <Icon className="w-6 h-6 text-cyan-100/60 group-hover:text-cyan-100 transition-colors" />
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 30px ${social.color}60`,
                    border: `1px solid ${social.color}40`,
                  }}
                ></div>
              </a>
            );
          })}
        </div>

        <footer className="mt-20 text-center">
          <div
            className="inline-block px-8 py-4 rounded-full backdrop-blur-xl border border-white/5"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(5, 11, 22, 0.8))',
            }}
          >
            <p className="text-cyan-100/40 text-sm">
              © 2025 ThisIsUs. Built with obsession.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};
