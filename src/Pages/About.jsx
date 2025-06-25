import React from "react";
import { motion } from "framer-motion";
import resortImage from "../assets/resort.jpg";
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

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] px-4 py-16 md:py-24 bg-gradient-to-br from-teal-50 via-emerald-100 to-cyan-50 flex items-center justify-center"
    >
      {/* Background blurs */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-28 h-28 bg-teal-200/30 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-300/20 rounded-full blur-2xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl w-full mx-auto z-10 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left side – image */}
        <motion.div
          variants={fadeUp}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={resortImage}
            alt="Luxurious resort"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Right side – text */}
        <motion.div variants={fadeUp} className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Discover the Spirit of Lumora
          </h2>

          <p className="text-md md:text-lg text-gray-700 font-light mb-5 leading-relaxed">
            At Lumora Hotels, we combine luxury and sustainability. Every resort
            is built with care for nature, designed to rejuvenate your soul with
            peaceful surroundings and thoughtful experiences.
          </p>

          <p className="text-sm text-gray-600 mb-6">
            Since our founding, we’ve hosted over 200,000 guests across 30+
            boutique resorts, powered by over 85% renewable energy. Our story is
            one of passion for people, the planet, and personalized hospitality.
          </p>

          <button className="mt-3 inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition duration-200">
            Explore More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
