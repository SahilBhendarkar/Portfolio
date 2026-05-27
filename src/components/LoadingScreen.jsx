import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-900 overflow-hidden">
      {/* Dynamic Animated Blobs in Loading Screen */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="relative flex flex-col items-center">
        {/* Animated Initial/Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-purple to-accent-blue shadow-glow-md mb-8"
        >
          <span className="font-display font-black text-4xl text-white tracking-widest">
            SB
          </span>
          {/* Neon Ring Glow */}
          <div className="absolute inset-0 rounded-2xl border border-white/20 animate-pulse-glow pointer-events-none" />
        </motion.div>

        {/* Text Fade In */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl font-bold font-display text-white mb-2"
        >
          Sahil Bhendarkar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-6"
        >
          Full Stack Java Developer
        </motion.p>

        {/* Loading Bar Container */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
