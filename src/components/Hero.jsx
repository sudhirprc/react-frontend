import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Search from "./Search";

const Hero = () => {
  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const searchVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  // Floating elements animation
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const rotatingAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-200/30 via-transparent to-blue-200/30"></div>
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        <motion.div
          animate={floatingAnimation}
          className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-emerald-300/20 to-teal-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [10, -20, 10],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-to-bl from-cyan-300/20 to-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [-20, 15, -20],
            transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-green-400/20 to-emerald-500/20 rounded-full blur-2xl"
        />

        {/* Geometric shapes */}
        <motion.div
          animate={rotatingAnimation}
          className="absolute top-20 right-20 w-16 h-16 border-2 border-emerald-300/40 rotate-45"
        />
        <motion.div
          animate={{
            rotate: [0, -360],
            transition: { duration: 15, repeat: Infinity, ease: "linear" },
          }}
          className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-br from-teal-400/30 to-cyan-500/30 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-r from-emerald-500/40 to-green-600/40 transform rotate-45"
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="max-w-5xl mx-auto"
        >
          {/* Animated Badge */}
          <motion.div
            variants={subtitleVariants}
            className="inline-flex items-center px-4 py-2 mb-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-emerald-800 font-medium text-sm">
              ✨ Experience Luxury Reimagined
            </span>
          </motion.div>

          {/* Main Title with Gradient Text */}
          <motion.h1
            variants={titleVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
              Lumora
            </span>
            <motion.span
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_100%] ml-4"
            >
              Hotels
            </motion.span>
          </motion.h1>

          {/* Subtitle with Better Typography */}
          <motion.p
            variants={subtitleVariants}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed font-light"
          >
            Discover extraordinary stays where{" "}
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              luxury meets nature
            </span>
            . Your perfect escape awaits in the heart of breathtaking
            landscapes.
          </motion.p>

          {/* Enhanced Search Component */}
          <motion.div variants={searchVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/50 to-teal-200/50 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-white/50">
              <Search />
            </div>
          </motion.div>

          {/* Call to Action Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mt-12 text-center"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/30">
              <div className="text-2xl font-bold text-emerald-700">50+</div>
              <div className="text-sm text-gray-600">Premium Locations</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/30">
              <div className="text-2xl font-bold text-emerald-700">98%</div>
              <div className="text-sm text-gray-600">Guest Satisfaction</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/30">
              <div className="text-2xl font-bold text-emerald-700">24/7</div>
              <div className="text-sm text-gray-600">Concierge Service</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-emerald-600"
        >
          <span className="text-sm mb-2 opacity-70">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-emerald-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
