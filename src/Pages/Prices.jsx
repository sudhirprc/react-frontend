import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const pricingPlans = [
  {
    name: "Standard",
    price: "$199/night",
    features: ["1 Night Stay", "Complimentary Breakfast", "Free Wi-Fi"],
    highlight: false,
  },
  {
    name: "Deluxe",
    price: "$299/night",
    features: ["2 Night Stay", "All Meals Included", "Spa Access", "City Tour"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$499/night",
    features: [
      "3+ Nights",
      "Private Villa",
      "24/7 Butler Service",
      "Nature Excursions",
    ],
    highlight: false,
  },
];

const Prices = () => {
  return (
    <section
      id="pricing"
      className="relative min-h-screen px-4 py-20 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-cyan-100 to-teal-50"
    >
      {/* Decorative blur */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-40 h-40 bg-teal-300/20 blur-2xl rounded-full"
      />

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent"
      >
        Choose Your Perfect Stay
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-gray-700 text-center max-w-2xl mb-12"
      >
        Whether you're planning a short retreat or a luxury escape, Lumora
        offers flexible packages tailored to your experience.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full z-10">
        {pricingPlans.map((plan, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className={`relative border rounded-xl p-6 transition-transform duration-300 transform bg-white/40 backdrop-blur-md hover:scale-105 shadow-lg ${
              plan.highlight
                ? "border-emerald-600 shadow-emerald-200"
                : "border-gray-300"
            }`}
          >
            {/* Highlight badge */}
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              {plan.name}
            </h3>
            <p className="text-3xl font-bold text-gray-900 mb-4">
              {plan.price}
            </p>

            <ul className="text-gray-700 text-sm space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-lg font-semibold text-white ${
                plan.highlight
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-teal-500 hover:bg-teal-600"
              } transition duration-200`}
            >
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Prices;
