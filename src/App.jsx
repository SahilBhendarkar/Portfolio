import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300 overflow-x-hidden">
          
          {/* Scroll progress line indicator */}
          <ScrollProgress />

          {/* Premium follow cursor followers (desktops only) */}
          <CustomCursor />

          {/* Floating dynamic backdrop grid patterns */}
          <div 
            className="absolute inset-0 bg-transparent opacity-[0.02] dark:opacity-[0.04] pointer-events-none z-0"
            style={{
              backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />

          {/* Main sticky glass navigation */}
          <Navbar />

          {/* Interactive Sections Assembly */}
          <main id="main-content" className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </main>

          {/* Minimal professional brand footers */}
          <Footer />

        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
