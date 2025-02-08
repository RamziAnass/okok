import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const categories = [
  'All',
  'Cartographie des Informations',
  'Map Visualisations',
  'Rapports et études de Cas',
  'Livrables de Veille',
  'Vidéos Explicatives',
];

const projects = [
  {
    title: 'Visualisation de Carte des Pays Leaders en IA En 2024 ',
    description: 'Mrends.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Map Visualisations',
    technologies: ['Excel', 'PowerPoint', 'Canva'],
    demo: 'https://google.com',
    github: 'https://google.com',
  },
  {
    title:
      'Visualisation de carte des Top 5 Pays Européens Leaders En Transition Energétique En 2024',
    description: 'Analysis of customer behavior and segmentation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    category: 'Map Visualisations',
    technologies: ['Excel', 'Tableau', 'Canva'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Visualisation de Pays leaders en Competitivité en 2024  ',
    description: 'Real-time data visualization dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Map Visualisations',
    technologies: ['D3.js', 'React', 'Node.js'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Smart City Index en 2024  ',
    description: 'Real-time data visualization dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Map Visualisations',
    technologies: ['D3.js', 'React', 'Node.js'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Cartographie des Acteurs de Pays Leaders Engagés dans IA en 2024 ',
    description: 'Real-time data visualization dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Cartographie des Informations',
    technologies: ['D3.js', 'React', 'Node.js'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Rapport de Veille Stratégique pour Open AI - Mars 2024 ',
    description: 'Real-time data visualization dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Rapports et études de Cas',
    technologies: ['D3.js', 'React', 'Node.js'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Rapport de Veille Stratégique pour Nvidia - Mars 2024 ',
    description: 'Real-time data visualization dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Rapports et études de Cas',
    technologies: ['D3.js', 'React', 'Node.js'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Livrable Media Watch Pour la société INTELGUARDS  ',
    description: 'Real-time data visualization dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Livrables de Veille',
    technologies: ['D3.js', 'React', 'Node.js'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Livrable IntelBrief Pour la société INTELGUARDS  ',
    description: 'Real-time data visualization dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Livrables de Veille',
    technologies: ['D3.js', 'React', 'Node.js'],
    demo: 'https://example.com',
    github: 'https://github.com',
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold">Portfolio</h2>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white dark:bg-primary-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="portfolio-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Vue
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500"
                    ></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
