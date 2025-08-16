'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🏃‍♂️',
    title: 'Performance Driven',
    description: 'Engineered for athletes who push their limits every day',
  },
  {
    icon: '🌱',
    title: 'Sustainable Materials',
    description: 'Eco-friendly fabrics that don&apos;t compromise on quality',
  },
  {
    icon: '🎯',
    title: 'Precision Fit',
    description: 'Tailored designs that move with your body naturally',
  },
  {
    icon: '⚡',
    title: 'Innovation First',
    description: 'Cutting-edge technology for superior comfort and style',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">About </span>
              <span className="text-gradient">Aclon Sports</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We&apos;re passionate about creating premium sportswear that empowers athletes to achieve their best performance. 
              Every piece is crafted with precision, using the finest materials and innovative technologies.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              From professional athletes to fitness enthusiasts, our gear is designed to support your journey, 
              enhance your performance, and reflect your dedication to excellence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Our Story
            </motion.button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group hover:bg-primary-red hover:text-white transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white/90">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-red mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-red mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-400">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-red mb-2">1M+</div>
            <div className="text-gray-600 dark:text-gray-400">Products Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-red mb-2">99%</div>
            <div className="text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
