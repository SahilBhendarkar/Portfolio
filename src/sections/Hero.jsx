import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChevronDown, FaCode } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import GlowButton from '../components/GlowButton';

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Custom typing effect implementation
  useEffect(() => {
    const roles = personalInfo.roles;
    const currentRole = roles[roleIndex];
    let timer;

    const type = () => {
      if (isDeleting) {
        setTypedText(prev => prev.slice(0, -1));
      } else {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      }
    };

    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && typedText === currentRole) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(type, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const handleScrollDown = (e) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white dark:bg-dark-900 transition-colors duration-300"
    >
      {/* 1. Animated Radial Background Gradients (Aesthetic mesh blobs) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-600/10 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 dark:bg-accent-purple/15 rounded-full blur-3xl animate-blob animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent-blue/10 dark:bg-accent-blue/10 rounded-full blur-3xl animate-blob pointer-events-none" />

      {/* 2. Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-transparent opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Intro text content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 dark:bg-primary-950/40 border border-primary-300/30 dark:border-primary-800/30 rounded-full text-sm font-semibold text-primary-600 dark:text-primary-400">
            <span>👋 Welcome to my portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-slate-800 dark:text-white leading-none">
            I am <span className="block mt-2 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-pink bg-clip-text text-transparent font-black">{personalInfo.name}</span>
          </h1>

          {/* Typing Role Loop */}
          <div className="h-10 md:h-12 flex items-center">
            <h2 className="text-xl sm:text-3xl font-display font-semibold text-slate-700 dark:text-slate-200">
              <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent mr-1">
                {typedText}
              </span>
              <span className="animate-pulse text-primary-500">|</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-sans max-w-xl leading-relaxed">
            {personalInfo.tagline}. {personalInfo.bio.split('.')[0]}.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap gap-4 pt-2">
            <GlowButton href="#contact" variant="primary">
              Hire Me
            </GlowButton>
            <GlowButton 
              href={personalInfo.resumeUrl} 
              variant="outline" 
              download="Sahil_Bhendarkar_Resume.pdf"
            >
              Resume
            </GlowButton>
          </div>

          {/* Social Icons row */}
          <div className="flex gap-4 items-center pt-4">
            {[
              { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
              { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
              { icon: FaEnvelope, href: personalInfo.social.email, label: 'Email' }
            ].map((soc, i) => (
              <motion.a
                key={i}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.15 }}
                className="p-3 bg-slate-100 hover:bg-primary-500/10 dark:bg-white/5 dark:hover:bg-primary-500/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/30 rounded-full transition-all hover:shadow-glow-sm"
                aria-label={soc.label}
              >
                <soc.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Code Terminal Mock Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center w-full relative"
        >
          {/* Decorative Backing Glow Card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-accent-purple blur-2xl opacity-20 pointer-events-none animate-pulse-glow" />

          {/* Terminal Box */}
          <motion.div 
            className="w-full max-w-md bg-dark-800/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Terminal Window Header Bar */}
            <div className="bg-dark-900/80 px-4 py-3 flex items-center justify-between border-b border-white/5 shrink-0 select-none">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-xs text-slate-500 flex items-center gap-1.5"><FaCode size={11} /> sahil_profile.js</span>
              <span className="w-8" />
            </div>

            {/* Terminal Code Mock Body */}
            <div className="p-6 space-y-4 text-left leading-relaxed text-slate-300">
              <div>
                <span className="text-primary-400 font-bold">const</span>{' '}
                <span className="text-accent-blue">developer</span> = {'{'}
              </div>
              <div className="pl-4">
                <span className="text-slate-400">name:</span>{' '}
                <span className="text-accent-pink">'{personalInfo.name}'</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">role:</span>{' '}
                <span className="text-accent-pink">'{personalInfo.roles[0]}'</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">skills:</span>{' '}
                <span className="text-slate-300">['Java', 'Spring Boot', 'React.js', 'MySQL']</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">passion:</span>{' '}
                <span className="text-[#a5b4fc]">'Building clean, efficient code'</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">hobbies:</span>{' '}
                <span className="text-[#a5b4fc]">'Exploring new tech, gaming'</span>
              </div>
              <div>{'};'}</div>

              <div className="pt-2 border-t border-white/5">
                <span className="text-accent-purple font-semibold">console</span>
                <span className="text-slate-400">.</span>
                <span className="text-[#a5b4fc]">log</span>
                <span className="text-slate-400">(</span>
                <span className="text-accent-blue">developer</span>
                <span className="text-slate-400">.</span>
                <span className="text-[#fca5a5]">passion</span>
                <span className="text-slate-400">);</span>
              </div>
              
              <div className="text-primary-400 font-bold text-xs select-none">
                {`> "Building clean, efficient code"`}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Chevron indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <a 
          href="#about"
          onClick={handleScrollDown}
          className="text-slate-400 dark:text-slate-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors animate-bounce p-2"
          aria-label="Scroll to About Section"
        >
          <FaChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
