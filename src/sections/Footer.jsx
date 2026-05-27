import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { personalInfo, navLinks } from '../data/portfolioData';

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-white/5 relative z-10 select-none">
      
      {/* Dynamic light blob backing inside footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 flex flex-col gap-8">
        
        {/* Top Part: Brands, NavLinks, Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand/Role */}
          <div className="space-y-3">
            <h4 className="font-display font-black text-2xl tracking-widest text-white">
              <span className="bg-gradient-to-r from-primary-400 to-accent-purple bg-clip-text text-transparent">
                {personalInfo.firstName}
              </span>{' '}
              {personalInfo.lastName}
            </h4>
            <p className="text-xs uppercase tracking-widest font-mono text-slate-500">
              {personalInfo.roles[0]}
            </p>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Crafting scalable full stack applications with beautiful designs and robust code architectures.
            </p>
          </div>

          {/* Quick Links Menu */}
          <div className="md:mx-auto">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-display">
              Quick Links
            </h5>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Row Connect */}
          <div className="md:ml-auto space-y-4">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-display">
              Connect With Me
            </h5>
            <div className="flex gap-3">
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
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="p-2.5 bg-white/5 border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/10 text-slate-400 hover:text-primary-400 rounded-full transition-all"
                  aria-label={soc.label}
                >
                  <soc.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Part: Copyright, Made with heart, Scroll top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-medium font-sans">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </span>

        

          {/* Scroll back to top */}
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 bg-white/5 border border-white/10 text-slate-300 hover:text-white rounded-full transition-all shadow-sm hover:shadow-glow-sm cursor-pointer"
            aria-label="Back to top"
          >
            <FaArrowUp size={14} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
