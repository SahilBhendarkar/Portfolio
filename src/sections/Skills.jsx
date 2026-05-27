import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const selectedCategoryData = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section 
      id="skills" 
      className="py-24 bg-white dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background visual shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle 
          title="My Skills" 
          subtitle="Technologies I work with" 
          align="center"
        />

        {/* Tab Controls Bar */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-3xl mx-auto">
          {skillCategories.map((cat) => {
            const isActive = cat.id === activeCategory;
            const TabIcon = cat.icon;
            
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-full font-display font-semibold text-sm transition-all border ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-500 to-accent-purple border-transparent text-white shadow-glow-sm'
                    : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400'
                }`}
              >
                <TabIcon size={16} />
                <span>{cat.title}</span>
                
                {/* Active hover layer indicator */}
                {isActive && (
                  <motion.span 
                    layoutId="activeTabUnderlay"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple z-[-1] pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid Display */}
        <div ref={contentRef} className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {selectedCategoryData?.skills.map((skill, idx) => {
                const SkillIcon = skill.icon;
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -5 }}
                    style={{ '--glow-color': skill.color }}
                    className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl flex flex-col gap-4 hover:shadow-lg dark:hover:shadow-glow-sm hover:border-primary-500/20 dark:hover:border-primary-500/20 transition-all cursor-default"
                  >
                    {/* Header: Icon + Name */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span 
                          className="p-2.5 rounded-2xl bg-white dark:bg-white/10 shadow-sm border border-slate-100 dark:border-white/5 flex items-center justify-center transition-transform hover:rotate-6 duration-300"
                          style={{ color: skill.color }}
                        >
                          <SkillIcon size={24} />
                        </span>
                        <span className="font-display font-bold text-slate-800 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-sm text-primary-500 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="space-y-1 mt-2">
                      <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={contentInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.05 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
