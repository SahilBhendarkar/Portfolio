import { motion } from 'framer-motion';
import {
  FaCertificate,
  FaMicrosoft,
  FaJava,
} from 'react-icons/fa';

import { SiSap } from 'react-icons/si';

import SectionTitle from '../components/SectionTitle';
import { certifications } from '../data/portfolioData';

const iconMap = {
  microsoft: <FaMicrosoft size={38} />,
  java: <FaJava size={38} />,
  sap: <SiSap size={38} />,
  certificate: <FaCertificate size={38} />,
};

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-white dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <SectionTitle
          title="Certifications"
          subtitle="Professional learning & achievements"
          align="center"
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl dark:hover:shadow-glow-sm hover:border-primary-500/20 transition-all group flex flex-col h-full"
            >

              {/* Top Banner */}
              <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${cert.color}, #0a0a0f)`,
                }}
              >
                {/* Decorative Blur Circles */}
                <div className="absolute top-3 right-4 w-24 h-24 rounded-full bg-white/5 blur-2xl" />
                <div className="absolute bottom-3 left-4 w-20 h-20 rounded-full bg-white/5 blur-xl" />

                {/* Icon */}
                <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-lg">
                  {iconMap[cert.icon] || (
                    <FaCertificate size={38} />
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-primary-500 dark:text-primary-400 font-semibold mt-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-5">
                  {cert.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {cert.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 rounded-full px-3 py-1 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="pt-8 mt-auto">
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-500 dark:text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-primary-500/30"
                  >
                    View Credential →
                  </motion.a>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;