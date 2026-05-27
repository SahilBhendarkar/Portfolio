import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';

export const Experience = () => {
  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="experience" 
      className="py-24 bg-white dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative backing gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle 
          title="Experience" 
          subtitle="My professional journey" 
          align="center"
        />

        {/* Timeline Layout */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto mt-20">
          
          {/* Vertical center axis line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10 -translate-x-1/2" />

          {/* Animated axis progress overlay */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500 via-accent-purple to-accent-blue origin-top -translate-x-1/2"
          />

          {/* Timeline Cards Entries */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={exp.id} 
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Axis Glowing Dot indicator */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-slate-900 border-2 border-primary-500 -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-accent-purple"
                    />
                  </div>

                  {/* Left Column Spacer/Width handler */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content Column (takes remaining side) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8"
                  >
                    <div className="p-6 md:p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl hover:shadow-lg dark:hover:shadow-glow-sm hover:border-primary-500/20 dark:hover:border-primary-500/20 transition-all">
                      
                      {/* Job Header */}
                      <div className="flex flex-col gap-2 mb-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 bg-primary-100 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 border border-primary-300/20 dark:border-primary-800/30 rounded-full">
                            <FaCalendarAlt size={11} /> {exp.duration}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-semibold font-sans">
                            <FaMapMarkerAlt size={11} /> {exp.location}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold font-display text-slate-800 dark:text-white mt-1">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-semibold text-primary-500 dark:text-primary-400 flex items-center gap-1.5">
                          <FaBriefcase size={13} /> {exp.company}
                        </span>
                      </div>

                      {/* Bullet details list */}
                      <ul className="space-y-2 mb-6">
                        {exp.description.map((bullet, i) => (
                          <li key={i} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2 font-sans">
                            <span className="text-primary-500 dark:text-primary-400 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack row */}
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200/50 dark:border-white/5">
                        {exp.techUsed.map((tech, i) => (
                          <span 
                            key={i}
                            className="text-xs bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-lg px-2.5 py-1 font-mono font-medium border border-slate-200 dark:border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
