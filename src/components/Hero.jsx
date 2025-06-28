import React from "react";
import { motion } from "framer-motion";
import Search from "./Search";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => (
  <section
    id="home"
    className="relative flex items-center justify-center overflow-hidden min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
  >
    {/* Background Gradients */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100" />
    <div className="absolute inset-0 bg-gradient-to-tr from-green-200/40 via-transparent to-blue-200/40" />

    {/* Floating BLOB 1 */}
    <motion.div
      animate={{ y: [-12, 12, -12] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-16 -left-16 w-32 h-32 sm:-top-24 sm:-left-24 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full blur-3xl bg-gradient-to-br from-emerald-300/20 to-teal-400/20"
    />

    {/* Floating BLOB 2 */}
    <motion.div
      animate={{ y: [8, -18, 8] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/3 -right-16 w-32 h-32 sm:-right-24 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full blur-3xl bg-gradient-to-bl from-cyan-300/20 to-blue-400/20"
    />

    {/* Main Content */}
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center space-y-6 sm:space-y-8"
    >
      {/* Badge */}
      <motion.span
        variants={fadeUp}
        className="flex items-center gap-2 px-4 py-1.5 mb-4 sm:mb-6 bg-white/30 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-emerald-800"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Experience Luxury Reimagined
      </motion.span>

      {/* Title */}
      <motion.h1
        variants={fadeUp}
        className="overflow-visible font-extrabold leading-tight mb-4 sm:mb-6 tracking-tight
             text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
          Welcome&nbsp;to
        </span>
        <br />
        <span className="bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
          Lumora
        </span>
        <motion.span
          animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="ml-2 w-fit inline-block
             bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
             bg-[length:200%_auto] bg-clip-text text-transparent"
        >
          Hotels
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 font-light"
      >
        Discover extraordinary stays where{" "}
        <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          luxury meets nature
        </span>
        . Your perfect escape awaits in breathtaking landscapes.
      </motion.p>

      {/* Search Box */}
      <motion.div
        variants={fadeUp}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md"
      >
        <div className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-r from-emerald-200/40 to-teal-200/40" />
        <div className="relative p-2 bg-white/80 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl">
          <Search />
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={fadeUp}
        className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6"
      >
        {[
          { value: "50+", label: "Premium Locations" },
          { value: "98%", label: "Guest Satisfaction" },
          { value: "24/7", label: "Concierge Service" },
        ].map(({ value, label }) => (
          <div
            key={value}
            className="px-4 py-3 sm:px-5 sm:py-4 bg-white/25 border border-white/40 rounded-xl backdrop-blur-sm text-center"
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-700">
              {value}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">{label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
