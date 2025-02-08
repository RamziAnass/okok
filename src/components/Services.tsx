import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart2,
  Brain,
  LineChart,
  PieChart,
} from 'lucide-react';

const services = [
  {
    icon: BarChart2,
    title: 'Data Analysis & Visualization',
    description:
      'Transform raw data into clear, actionable insights through advanced visualization techniques.',
  },
  {
    icon: LineChart,
    title: 'Veille Stratégique',
    description:
      'Develop statistical models to identify patterns and predict future trends.',
  },
  {
    icon: Brain,
    title: 'Market & Competitive  Intelligence',
    description:
      'Implement ML algorithms to automate processes and make data-driven predictions.',
  },
  {
    icon: PieChart,
    title: 'Visualisation des informations et Cartographie',
    description:
      'Create comprehensive BI solutions to support strategic decision-making.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold">Compétences Clès</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card"
              >
                <service.icon className="mb-4 h-12 w-12 text-primary-500 dark:text-primary-400" />
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;