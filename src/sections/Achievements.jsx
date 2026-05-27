import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { achievements, achievementStats } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import AnimatedCounter from '../components/AnimatedCounter';

export const Achievements = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="achievements" 
      className="py-24 bg-slate-50 dark:bg-dark-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle 
          title="Achievements" 
          subtitle="Milestones & accomplishments" 
          align="center"
        />

        {/* Highlight Stats Row */}
        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {achievementStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl flex flex-col items-center text-center hover:shadow-lg dark:hover:shadow-glow-sm hover:border-primary-500/20 dark:hover:border-primary-500/20 transition-all group"
            >
              <span className="text-4xl mb-3 transform group-hover:scale-120 duration-300 select-none">
                {stat.icon}
              </span>
              <span className="text-3xl font-black font-display text-slate-800 dark:text-white">
                <AnimatedCounter value={stat.value} duration={1.5} />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl flex items-start gap-5 hover:shadow-lg dark:hover:shadow-glow-sm hover:border-primary-500/20 dark:hover:border-primary-500/20 transition-all"
            >
              {/* Achievement Emoji Icon Badge */}
              <span className="p-4 bg-primary-100 dark:bg-primary-950/30 border border-primary-200/50 dark:border-primary-900/30 text-3xl rounded-2xl shrink-0 select-none flex items-center justify-center">
                {ach.icon}
              </span>

              {/* Details column */}
              <div className="space-y-2">
                <h4 className="text-lg md:text-xl font-bold font-display text-slate-800 dark:text-white leading-tight">
                  {ach.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-sans">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
