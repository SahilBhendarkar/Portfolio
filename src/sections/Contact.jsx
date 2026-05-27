import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo, emailjsConfig } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import GlowButton from '../components/GlowButton';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Check if EmailJS IDs are customized
      if (
        emailjsConfig.serviceId === 'YOUR_EMAILJS_SERVICE_ID' ||
        !emailjsConfig.serviceId
      ) {
        // Fallback simulate send for local dev/preview
        setTimeout(() => {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
        return;
      }

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formData,
        emailjsConfig.publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-white dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative backing shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's work together" 
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6 justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-white">
                Contact Info
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                I'm always open to discussing new projects, internship roles, or coding collaborations. Feel free to reach out to me!
              </p>

              {/* Direct Info list */}
              <div className="space-y-4">
                {[
                  { icon: FaEnvelope, title: 'Email Me', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: FaPhone, title: 'Call Me', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: FaMapMarkerAlt, title: 'Location', value: personalInfo.location }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow"
                  >
                    <span className="p-3 bg-primary-100 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 rounded-xl shrink-0">
                      <item.icon size={18} />
                    </span>
                    <div>
                      <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">{item.title}</span>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary-500 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          
          </motion.div>

          {/* Right Column: Floating Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-all"
          >
            <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-white mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-3 bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white rounded-2xl focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 transition-all text-sm font-sans"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white rounded-2xl focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 transition-all text-sm font-sans"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white rounded-2xl focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 transition-all text-sm font-sans"
                  placeholder="Subject of discussion"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white rounded-2xl focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 transition-all text-sm font-sans resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Action Submit */}
              <div className="pt-2 flex flex-col md:flex-row items-center gap-4">
                <GlowButton 
                  variant="primary" 
                  className="w-full md:w-auto"
                  icon={<FaPaperPlane size={14} />}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </GlowButton>

                {/* Status messages */}
                {status === 'success' && (
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30 rounded-full px-4 py-1.5"
                  >
                    🎉 Message sent successfully! I'll reply soon.
                  </motion.span>
                )}

                {status === 'error' && (
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 rounded-full px-4 py-1.5"
                  >
                    ❌ Error sending. Try again or email me directly!
                  </motion.span>
                )}
              </div>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
