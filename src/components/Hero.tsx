import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onToggleSidebar: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen w-full">
      {/* Main Hero Content */}
      <div className="container mx-auto flex min-h-screen items-center px-4 py-20 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Transformation des informations à 
            <br />
            <span className="text-primary-500 dark:text-primary-400">
              des Recommandations et Leviers Stratégiques
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-8 text-lg text-gray-600 dark:text-gray-400 sm:text-xl"
          >
            <TypeAnimation
              sequence={[
                'Je suis Ramzi Anass, Je maitrise ',
                2000,
                'la Veille Stratégique',
                2000,
                'Market & Competitive Intelligence',
                2000,
                'Visualisation des informations et la Cartographie',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
          >
            <strong>
              Manager De l'information, Chargé de Veille Strategique / Competitive
              Intelligence Analyste, et Data Analyst.
            </strong>
            <br />
            EX DN Investor, EX POD Designer, EX Data Evaluator.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 
                       py-3 text-white transition-all duration-200 hover:bg-primary-600 
                       focus:outline-none focus:ring-2 focus:ring-primary-500 
                       focus:ring-offset-2 dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              Mes Projets
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l 
                   from-primary-50/20 to-transparent dark:from-primary-900/10"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;