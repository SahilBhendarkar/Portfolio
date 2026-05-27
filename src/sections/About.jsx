import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { personalInfo, stats, education } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import AnimatedCounter from '../components/AnimatedCounter';

export const About = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="about" 
      className="py-24 bg-slate-50 dark:bg-dark-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative vector elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better" 
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Stylized Rounded Placeholder Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Outer Glow Borders */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 via-accent-purple to-accent-blue rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary-500 to-accent-purple rounded-[28px] animate-pulse-glow pointer-events-none" />
              
              {/* Core card display */}
              <div className="relative w-full h-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center">
                <img 
                  src="/Photo.png" 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Visual tech floating labels inside image area */}
                <div className="absolute bottom-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono text-slate-300">
                  {`<FullStack />`}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-white">
              Who I Am
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-lg">
              {personalInfo.bio}
            </p>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: FaMapMarkerAlt, title: 'Location', desc: personalInfo.location.split(',')[0] + ', India' },
                { icon: FaEnvelope, title: 'Email', desc: personalInfo.email },
                { icon: FaBriefcase, title: 'Experience', desc: 'Software Developer' }
              ].map((info, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex flex-col gap-2 hover:shadow-md transition-shadow dark:hover:border-primary-500/20"
                >
                  <span className="p-2.5 bg-primary-100 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 rounded-xl w-max">
                    <info.icon size={16} />
                  </span>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">{info.title}</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 break-all">{info.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl flex flex-col items-center justify-center text-center hover:shadow-lg dark:hover:shadow-glow-sm dark:hover:border-primary-500/20 transition-all group"
            >
              <span className="text-4xl sm:text-5xl font-black font-display bg-gradient-to-r from-primary-500 to-accent-purple bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-white mb-10 text-center relative w-max mx-auto pb-2">
            Education
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-12 bg-primary-500 rounded-full" />
          </h3>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl flex items-start gap-4 hover:shadow-md dark:hover:border-primary-500/20 transition-all"
              >
                <div className="p-3.5 bg-primary-100 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 rounded-2xl shrink-0 mt-1">
                  <FaGraduationCap size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">{edu.duration}</span>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white font-display">{edu.degree}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{edu.institution}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold">
                    {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
