import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold">Contact </h2>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-semibold">Contactez Moi</h3>
              <p className="mb-8 text-gray-600 dark:text-gray-400"></p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary-500 dark:text-primary-400" />
                  <span>RamziiAnase@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary-500 dark:text-primary-400" />
                  <span>+212637281017</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary-500 dark:text-primary-400" />
                  <span>Rabat,Maroc</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary-500 px-6 py-3 text-white transition-colors hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                Envoyez
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
