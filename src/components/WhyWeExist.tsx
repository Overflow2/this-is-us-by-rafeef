'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    y: -4,
    transition: { duration: 0.3 },
  },
};

const problemStatements = [
  {
    icon: '📱',
    title: 'Too Many Apps',
    accent: '#22d3ee',
    border: 'border-cyan-400/40',
    glow: 'hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]',
    description:
      "We're drowning in tools that promise to simplify but only add noise to our lives.",
  },
  {
    icon: '⚙️',
    title: 'Too Complex',
    accent: '#6366F1',
    border: 'border-indigo-400/40',
    glow: 'hover:shadow-[0_0_35px_rgba(99,102,241,0.3)]',
    description: "Every feature feels like an onboarding course. Where's the simplicity?",
  },
  {
    icon: '😑',
    title: 'No Joy',
    accent: '#C084FC',
    border: 'border-purple-400/40',
    glow: 'hover:shadow-[0_0_35px_rgba(192,132,252,0.3)]',
    description: "Using software feels like a chore, not a gift. Where's the delight?",
  },
];

const manifesto = [
  {
    title: 'Complexity Is Laziness',
    accent: 'text-cyan-300',
    statement: 'Adding features is easy. Editing them down to their essence is mastery.',
  },
  {
    title: 'Software Should Anticipate',
    accent: 'text-blue-300',
    statement: 'Great tools think ahead. They understand your intent before you click.',
  },
  {
    title: 'Joy Is A Feature',
    accent: 'text-purple-300',
    statement: "If it doesn’t make you smile, it isn’t finished. Delight is not optional.",
  },
];

export const WhyWeExist = () => {
  return (
    <main className="relative bg-[#040714] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(147,51,234,0.07),transparent_40%)]"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="uppercase tracking-[0.3em] text-sm text-cyan-300/70 mb-6"
          >
            Why We Exist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-7xl font-orbitron font-semibold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_25px_rgba(14,165,233,0.35)]"
          >
            The digital world is broken.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xl md:text-2xl text-cyan-100/70 max-w-3xl mx-auto font-space-grotesk"
          >
            And we’re not pretending it’s fine. We’re building the antidote.
          </motion.p>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-[#050B16] to-[#050B16]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-center text-3xl md:text-5xl font-orbitron text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6 }}
          >
            The Problem
          </motion.h2>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
          >
            {problemStatements.map((problem) => (
              <motion.div
                key={problem.title}
                variants={itemVariants}
                whileHover="hover"
                className={`p-8 rounded-2xl backdrop-blur-xl bg-[rgba(5,11,22,0.85)] border ${problem.border} transition-all duration-300 ${problem.glow}`}
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: problem.accent }}>
                  {problem.title}
                </h3>
                <p className="text-cyan-100/70 font-space-grotesk leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-96 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1d44] via-[#0b132a] to-[#070b15] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.15),transparent_45%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.12),transparent_40%)]"></div>
              <p className="relative z-10 text-cyan-100/70 font-space-grotesk text-lg">
                We build where others hesitate.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron text-white">Our Origin</h2>
            <p className="text-lg text-cyan-100/70 font-space-grotesk">
              <span className="text-cyan-300 font-semibold">Three builders.</span>{' '}
              <span className="text-blue-400 font-semibold">One late-night obsession.</span>{' '}
              <span className="text-purple-300 font-semibold">Zero tolerance for mediocre tools.</span>
            </p>
            <p className="text-cyan-100/70 font-space-grotesk leading-relaxed">
              We watched brilliant teams drown in clunky workflows and joyless software. So we stopped waiting
              for better tools and started creating them—obsessively.
            </p>
            <p className="text-cyan-100/70 font-space-grotesk leading-relaxed">
              This isn’t about adding more apps to the pile. It’s about re-engineering how technology feels,
              behaves, and inspires.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative py-24 px-6 bg-[rgba(5,11,22,0.9)]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-center text-3xl md:text-5xl font-orbitron text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6 }}
          >
            Our Manifesto
          </motion.h2>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
          >
            {manifesto.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, x: 6 }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#060b1c] via-[#090f24] to-[#05070e] transition-all duration-300"
                style={{
                  boxShadow: idx === 0
                    ? '0 0 30px rgba(34,211,238,0.15)'
                    : idx === 1
                      ? '0 0 30px rgba(59,130,246,0.15)'
                      : '0 0 30px rgba(147,51,234,0.15)',
                }}
              >
                <h3 className={`text-2xl font-semibold mb-4 font-orbitron ${item.accent}`}>{item.title}</h3>
                <p className="text-cyan-100/70 font-space-grotesk leading-relaxed">{item.statement}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};