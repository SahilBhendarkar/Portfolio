import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCheck } from 'react-icons/fa';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-dark-800/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
          >
            {/* Top Bar with Colored Gradient Background (Project Theme) */}
            <div 
              className="h-44 flex flex-col justify-end p-6 relative overflow-hidden shrink-0"
              style={{
                background: `linear-gradient(to top, rgba(18, 18, 26, 1), rgba(18, 18, 26, 0.4)), linear-gradient(135deg, ${project.color || '#6366f1'}, #0a0a0f)`
              }}
            >
              {/* Floating tech background shapes */}
              <div className="absolute top-4 right-12 w-24 h-24 rounded-full bg-white/5 blur-xl pointer-events-none" />
              
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-300 bg-primary-950/50 backdrop-blur-md border border-primary-500/30 rounded-full px-3 py-1 w-max mb-2">
                {project.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                {project.title}
              </h3>

              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-dark-900/60 hover:bg-dark-900 border border-white/10 text-slate-400 hover:text-white rounded-full transition-colors"
                aria-label="Close modal"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow custom-scrollbar">
              
              {/* Full Description */}
              <div>
                <h4 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-2">
                  Project Overview
                </h4>
                <p className="text-slate-300 leading-relaxed font-sans">
                  {project.fullDesc}
                </p>
              </div>

              {/* Features Checklist */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="mt-1 shrink-0 p-0.5 bg-primary-500/20 border border-primary-500/30 rounded text-primary-400">
                          <FaCheck size={10} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Used */}
              <div>
                <h4 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-white/5 border border-white/10 text-slate-300 rounded-full px-3 py-1 font-mono font-medium hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions Footer */}
            <div className="p-6 bg-dark-900/60 border-t border-white/5 flex gap-4 items-center justify-end shrink-0">
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-dark-800 hover:bg-dark-700 border border-white/10 text-white rounded-full font-semibold transition-all hover:shadow-glow-sm"
              >
                <FaGithub /> GitHub Repo
              </a>
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-purple hover:opacity-90 text-white rounded-full font-semibold transition-all shadow-glow-sm hover:shadow-glow-md"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
