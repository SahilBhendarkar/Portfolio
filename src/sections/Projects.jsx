import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaLaptopCode } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import ProjectModal from '../components/ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-dark-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <SectionTitle
          title="My Projects"
          subtitle="Things I've built"
          align="center"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-md hover:shadow-xl dark:hover:shadow-glow-sm hover:border-primary-500/20 dark:hover:border-primary-500/20 transition-all flex flex-col h-full group"
            >
              {/* Card visual mock placeholder */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden shrink-0 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${project.color || '#6366f1'}, #0a0a0f)`
                }}
              >
                {/* Floating graphic bubbles */}
                <div className="absolute top-2 right-6 w-20 h-20 rounded-full bg-white/5 blur-lg pointer-events-none animate-float" />
                <div className="absolute bottom-2 left-6 w-16 h-16 rounded-full bg-white/5 blur-md pointer-events-none animate-float-delayed" />

                {/* Simulated illustration centered */}
                <span className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-lg flex items-center justify-center">
                  <FaLaptopCode size={40} className="animate-pulse" />
                </span>

                {/* Small category tag floated top left */}
                <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest text-white bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
                  {project.category}
                </span>
              </div>

              {/* Card Content Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow space-y-4">
                <h3 className="text-xl font-bold font-display text-slate-800 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Tech Badges List */}
                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-2 pt-2 flex-grow">

                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="
        h-9
        inline-flex
        items-center
        justify-center
        whitespace-nowrap
        text-xs
        bg-slate-100
        dark:bg-white/5
        border
        border-slate-200
        dark:border-white/10
        text-slate-600
        dark:text-slate-300
        rounded-full
        px-4
        font-mono
        font-medium
        transition-all
        duration-300
        hover:border-primary-500/30
        hover:text-primary-500
        dark:hover:text-primary-400
      "
                    >
                      {tech}
                    </span>
                  ))}

                  {project.techStack.length > 4 && (
                    <span
                      className="
        h-9
        inline-flex
        items-center
        justify-center
        whitespace-nowrap
        text-xs
        bg-primary-100
        dark:bg-primary-950/20
        text-primary-600
        dark:text-primary-400
        border
        border-primary-200/50
        dark:border-primary-800/30
        rounded-full
        px-4
        font-semibold
        transition-all
        duration-300
      "
                    >
                      +{project.techStack.length - 4} more
                    </span>
                  )}

                </div>

                {/* Actions row */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-display"
                  >
                    <FaInfoCircle /> Details
                  </button>

                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2 bg-slate-100 dark:bg-white/5 hover:bg-primary-500/10 dark:hover:bg-primary-500/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/30 rounded-full transition-all"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={16} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2 bg-slate-100 dark:bg-white/5 hover:bg-primary-500/10 dark:hover:bg-primary-500/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/30 rounded-full transition-all"
                      aria-label="Live Demo Link"
                    >
                      <FaExternalLinkAlt size={14} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal Window Mount */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
