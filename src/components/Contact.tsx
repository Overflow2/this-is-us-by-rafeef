import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Send, Github, Twitter, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, 0.3);
  const [step, setStep] = useState<'name' | 'email' | 'message'>('name');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleNameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || isProcessing) return;

    const userName = name.trim();
    setIsProcessing(true);

    const processingLogs = [
      `> Name received: "${userName}"`,
      '> Storing contact information...',
      '> Proceeding to email collection...',
      '',
    ];

    for (let i = 0; i < processingLogs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLogs((prev) => [...prev, processingLogs[i]]);
    }

    // Store name and move to email step
    setName(userName);
    setStep('email');
    setIsProcessing(false);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isProcessing) return;

    const userEmail = email.trim();
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      setLogs((prev) => [...prev, '> Invalid email format. Please try again.', '']);
      return;
    }

    setIsProcessing(true);

    const processingLogs = [
      `> Email received: "${userEmail}"`,
      '> Validating email format...',
      '> Email verified.',
      '> Ready for message input...',
      '',
    ];

    for (let i = 0; i < processingLogs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLogs((prev) => [...prev, processingLogs[i]]);
    }

    // Store email and move to message step
    setEmail(userEmail);
    setStep('message');
    setIsProcessing(false);
  };

  const handleMessageSubmit = async (e: React.FormEvent) => {
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
      '> Sending email...',
    ];

    for (let i = 0; i < processingLogs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLogs((prev) => [...prev, processingLogs[i]]);
    }

    try {
      // Send email using EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please set up environment variables.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
          to_email: 'thisisus533@gmail.com',
        },
        publicKey
      );

      const successLogs = [
        '> Email sent successfully!',
        '> Routing to founders...',
        '> Transmission successful!',
        '> We\'ll get back to you soon.',
        '',
      ];

      for (let i = 0; i < successLogs.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setLogs((prev) => [...prev, successLogs[i]]);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      const errorLogs = [
        '> Error: Failed to send email.',
        '> Please try again later or contact us directly.',
        '',
      ];

      for (let i = 0; i < errorLogs.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setLogs((prev) => [...prev, errorLogs[i]]);
      }
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-cyan-100/60 text-lg">Let's build something extraordinary together</p>
        </motion.div>

        <motion.div
          className="transition-all duration-1000 delay-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
                    <p className="mt-4 text-cyan-100/40">
                      {step === 'name' && 'Enter your name and hit enter'}
                      {step === 'email' && 'Enter your email and hit enter'}
                      {step === 'message' && 'Type your message and hit enter'}
                    </p>
                  </div>
                )}
                {logs.map((log, index) => (
                  <p
                    key={index}
                    className={`${
                      log.includes('successful') || log.includes('sent successfully')
                        ? 'text-green-400'
                        : log.includes('Error') || log.includes('Failed')
                        ? 'text-red-400'
                        : 'text-cyan-300/70'
                    } leading-relaxed`}
                  >
                    {log}
                  </p>
                ))}
                <div ref={logsEndRef} />
              </div>

              {step === 'name' && (
                <form onSubmit={handleNameSubmit} className="relative">
                  <div className="flex items-center gap-2 text-cyan-400/70 font-mono text-sm">
                    <span>{'>'}</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isProcessing}
                      className="flex-1 bg-transparent outline-none text-cyan-100 placeholder-cyan-400/30"
                      placeholder="enter your name and hit enter_"
                      autoComplete="name"
                    />
                    <button
                      type="submit"
                      disabled={isProcessing || !name.trim()}
                      className="p-2 rounded-lg bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                    >
                      <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}

              {step === 'email' && (
                <form onSubmit={handleEmailSubmit} className="relative">
                  <div className="flex items-center gap-2 text-cyan-400/70 font-mono text-sm">
                    <span>{'>'}</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isProcessing}
                      className="flex-1 bg-transparent outline-none text-cyan-100 placeholder-cyan-400/30"
                      placeholder="enter your email and hit enter_"
                      autoComplete="email"
                    />
                    <button
                      type="submit"
                      disabled={isProcessing || !email.trim()}
                      className="p-2 rounded-lg bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                    >
                      <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}

              {step === 'message' && (
                <form onSubmit={handleMessageSubmit} className="relative">
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
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
        </motion.div>

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