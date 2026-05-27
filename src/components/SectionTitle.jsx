import { motion } from 'framer-motion';

export const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const isLeft = align === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-16 flex flex-col ${isLeft ? 'items-start text-left' : 'items-center text-center'} w-full`}
    >
      {subtitle && (
        <span className="text-sm font-semibold tracking-widest text-primary-500 uppercase dark:text-primary-400 mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 dark:text-white relative pb-4">
        {title}
        <span 
          className={`absolute bottom-0 ${isLeft ? 'left-0' : 'left-1/2 -translate-x-1/2'} h-[4px] w-20 rounded-full bg-gradient-to-r from-primary-500 via-accent-purple to-accent-pink`}
        />
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
