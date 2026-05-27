import { motion } from 'framer-motion';

export const GlowButton = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  className = '', 
  icon,
  download
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 via-accent-purple to-accent-blue text-white shadow-glow-sm hover:shadow-glow-md border border-transparent',
    outline: 'bg-transparent text-slate-800 dark:text-white border-2 border-primary-500/50 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-glow-sm'
  };

  const Component = href ? motion.a : motion.button;

  const extraProps = href ? { href, download } : { onClick };

  return (
    <Component
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...extraProps}
    >
      {/* Hover background overlay for primary */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" />
      )}
      
      {/* Content wrapper to handle icon layout */}
      <span className="flex items-center gap-2 relative z-10 font-display">
        {children}
        {icon && <span className="text-lg">{icon}</span>}
      </span>
    </Component>
  );
};

export default GlowButton;
