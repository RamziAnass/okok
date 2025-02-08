import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarClose, setIsSidebarClose] = useState(false);


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-black">
      {/* Sidebar Toggle Button - Always visible */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full 
                 bg-white shadow-lg transition-all duration-200 hover:bg-gray-50 
                 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 
                 dark:bg-gray-900 dark:hover:bg-gray-800"
        aria-label="Toggle sidebar menu"
      >
        <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </button>

      <Sidebar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <main className="flex-1 w-full transition-all duration-300 ease-in-out">
        <div className="px-4 pb-12 pt-20">
          <ParticlesBackground />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            <About />
            <Services />
            <Portfolio />
            <Contact />
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default App;