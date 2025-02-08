import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const skills = [
  { name: 'Veille Stratégique', level: 95 },
  { name: 'Data Analysis', level: 90 },
  { name: 'Market Intelligence', level: 85 },
  { name: 'Competitive Analysis', level: 88 },
  { name: 'Data Visualization', level: 92 },
  { name: 'Strategic Planning', level: 85 },
];

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Parcours Professionnel</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white dark:bg-black rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <GraduationCap className="h-8 w-8 text-primary-500" />
                  <h3 className="text-2xl font-semibold">Formation Académique</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h4 className="text-xl font-semibold">Master Spécialisé en Management de l'Information</h4>
                    <p className="text-gray-600 dark:text-gray-400">École des Sciences de l'Information, Rabat</p>
                    <p className="text-sm text-gray-500">2022 - 2024</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h4 className="text-xl font-semibold">Licence Fondamentale en Sciences Économiques et Gestion</h4>
                    <p className="text-gray-600 dark:text-gray-400">Faculté Polydisciplinaire, Béni Mellal</p>
                    <p className="text-sm text-gray-500">2019 - 2022</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h4 className="text-xl font-semibold">Baccalauréat Scientifique</h4>
                    <p className="text-gray-600 dark:text-gray-400">Lycée Zerktouni, Béni Mellal</p>
                    <p className="text-sm text-gray-500">2018 - 2019</p>
                  </div>
                </div>
              </div>

      
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-black rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <Briefcase className="h-8 w-8 text-primary-500" />
                  <h3 className="text-2xl font-semibold">Expérience Professionnelle</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold">Stage en Veille Stratégique</h4>
                    <p className="text-gray-600 dark:text-gray-400">Analyse de données et veille concurrentielle</p>
                    <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                      <li>Collecte et analyse de données stratégiques</li>
                      <li>Élaboration de rapports de veille</li>
                      <li>Développement de tableaux de bord</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Freelance</h4>
                    <p className="text-gray-600 dark:text-gray-400">Commerce de Noms de Domaines, POD, Data Annotation</p>
                    <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                      <li>Gestion de portefeuille de domaines</li>
                      <li>Création et vente de designs POD</li>
                      <li>Annotation et évaluation de données</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-black rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <BookOpen className="h-8 w-8 text-primary-500" />
                  <h3 className="text-2xl font-semibold">Compétences Techniques</h3>
                </div>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="https://app.razuna.eu/fi/l/stewjtq5mrp0a3syydzcp"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-white transition-colors hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              <FileDown className="h-5 w-5" />
             Voir Mon CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;