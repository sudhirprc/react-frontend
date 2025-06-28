import React from "react";
import { motion } from "framer-motion";
import Search from "./Search";

/** ——— Animation reused ——— */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};
const titleVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const searchVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};
const rotatingAnimation = {
  rotate: [0, 360],
  transition: { duration: 20, repeat: Infinity, ease: "linear" },
};

const Hero = () => (
  <section
    id="home"
    className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4"
  >
    {/* --- Gradient layers --- */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100">
      <div className="absolute inset-0 bg-gradient-to-tr from-green-200/30 via-transparent to-blue-200/30" />
    </div>

    {/* --- Floating blobs (sizes shrink on small screens) --- */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={floatingAnimation}
        className="absolute -top-24 -left-24 w-56 md:w-80 h-56 md:h-80 rounded-full blur-3xl bg-gradient-to-br from-emerald-300/20 to-teal-400/20"
      />
      <motion.div
        animate={{
          y: [10, -20, 10],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/3 -right-40 w-72 md:w-96 h-72 md:h-96 rounded-full blur-3xl bg-gradient-to-bl from-cyan-300/20 to-blue-400/20"
      />
      <motion.div
        animate={{
          y: [-20, 15, -20],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-0 left-1/4 w-52 md:w-64 h-52 md:h-64 rounded-full blur-2xl bg-gradient-to-tr from-green-400/20 to-emerald-500/20"
      />
      {/* geometric accents */}
      <motion.div
        animate={rotatingAnimation}
        className="absolute top-16 md:top-20 right-8 md:right-20 w-12 md:w-16 h-12 md:h-16 border-2 border-emerald-300/40 rotate-45"
      />
      <motion.div
        animate={{
          rotate: [0, -360],
          transition: { duration: 15, repeat: Infinity, ease: "linear" },
        }}
        className="absolute bottom-28 md:bottom-32 left-10 md:left-16 w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-500/30"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/2 left-6 md:left-10 w-6 md:w-8 h-6 md:h-8 rotate-45 bg-gradient-to-r from-emerald-500/40 to-green-600/40"
      />
    </div>

    {/* --- Hero Content --- */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative z-10 mx-auto max-w-5xl"
    >
      {/* badge */}
      <motion.div
        variants={subtitleVariants}
        className="inline-flex items-center px-4 py-1.5 md:py-2 mb-5 md:mb-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow"
      >
        <span className="w-2 h-2 mr-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs md:text-sm font-medium text-emerald-800">
          ✨ Experience Luxury Reimagined
        </span>
      </motion.div>

      {/* title */}
      <motion.h1
        variants={titleVariants}
        className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6"
      >
        <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Welcome to
        </span>
        <br />
        <span className="bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
          Lumora
        </span>
        <motion.span
          animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="ml-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-[length:200%_100%] bg-clip-text text-transparent inline-block"
        >
          Hotels
        </motion.span>
      </motion.h1>

      {/* subtitle */}
      <motion.p
        variants={subtitleVariants}
        className="max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-gray-700 font-light mb-6 md:mb-8"
      >
        Discover extraordinary stays where{" "}
        <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          luxury meets nature
        </span>
        . Your perfect escape awaits in breathtaking landscapes.
      </motion.p>

      {/* search */}
      <motion.div
        variants={searchVariants}
        className="relative mx-auto md:mx-0 max-w-md"
      >
        <div className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-r from-emerald-200/50 to-teal-200/50" />
        <div className="relative p-2 border border-white/50 rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl">
          <Search />
        </div>
      </motion.div>

      {/* stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10 md:mt-12 text-center"
      >
        {[
          { value: "50+", label: "Premium Locations" },
          { value: "98%", label: "Guest Satisfaction" },
          { value: "24/7", label: "Concierge Service" },
        ].map(({ value, label }) => (
          <div
            key={value}
            className="px-5 py-4 bg-white/20 border border-white/30 rounded-xl backdrop-blur-sm"
          >
            <div className="text-xl md:text-2xl font-bold text-emerald-700">
              {value}
            </div>
            <div className="text-xs md:text-sm text-gray-600">{label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>

    {/* scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex flex-col items-center text-emerald-600"
      >
        <span className="text-xs md:text-sm mb-1 md:mb-2 opacity-70">
          Scroll to explore
        </span>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-2 md:w-1 md:h-3 mt-1 md:mt-2 rounded-full bg-emerald-500"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
