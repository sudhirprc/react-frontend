import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const services = [
  {
    title: "Luxury Stays",
    description: "Elegant rooms and suites designed for comfort and style.",
    icon: "🏨",
  },
  {
    title: "Nature Tours",
    description: "Guided experiences to explore breathtaking surroundings.",
    icon: "🌿",
  },
  {
    title: "Spa & Wellness",
    description: "Relaxing spa therapies to rejuvenate your mind and body.",
    icon: "💆‍♀️",
  },
  {
    title: "Fine Dining",
    description: "World-class cuisine with a focus on local flavors.",
    icon: "🍽️",
  },
  {
    title: "Adventure Sports",
    description: "Exciting outdoor activities for thrill seekers.",
    icon: "🚵‍♂️",
  },
  {
    title: "Sustainable Travel",
    description: "Eco-conscious hospitality and experiences.",
    icon: "♻️",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen px-4 py-20 flex items-center justify-center bg-gradient-to-br from-cyan-50 via-emerald-100 to-teal-50"
    >
      {/* Background animations */}
      <motion.div
        animate={{
          rotate: [0, 180, 0],
          transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute left-10 top-10 w-32 h-32 bg-cyan-300/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [-15, 15, -15],
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute right-10 bottom-20 w-40 h-40 bg-emerald-300/30 rounded-full blur-2xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl text-center z-10"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Our Services
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 font-light"
        >
          At Lumora, we offer a complete suite of services designed to pamper,
          energize, and elevate your stay — whether you’re here to relax or
          explore.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white/30 backdrop-blur-sm border border-white/40 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
