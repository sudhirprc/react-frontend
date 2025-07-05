// src/Pages/HotelPrice.jsx
import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import emailjs from "emailjs-com";

import successAnimation from "../animations/success.json";

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_sw6shtt",
  TEMPLATE_ID: "template_3x92iff",
  USER_ID: "aqoGU9Nb0N2uCTxmP",
};

const hotelData = {
  Standard: [
    {
      id: 1,
      name: "Lumora Inn",
      location: "Goa",
      price: "$199/night",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
      description: "A cozy beachfront hotel with tropical vibes.",
      amenities: ["Free Wi-Fi", "Breakfast Included", "AC Rooms"],
    },
    {
      id: 2,
      name: "Green Stay",
      location: "Kerala",
      price: "$189/night",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop",
      description: "Surrounded by lush greenery and backwaters.",
      amenities: ["Free Parking", "Laundry Service", "Room Heater"],
    },
    {
      id: 3,
      name: "Le Meridien",
      location: "Chennai",
      price: "$189/night",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop",
      description: "City-view rooms with premium amenities.",
      amenities: ["Gym", "Free Parking", "Rooftop Bar"],
    },
  ],

  Deluxe: [
    {
      id: 4,
      name: "Deluxe Suites",
      location: "Shimla",
      price: "$299/night",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
      description: "Mountain-facing luxury suites with balconies.",
      amenities: ["Spa", "City Tour", "Heated Pool"],
    },
    {
      id: 5,
      name: "City Palace",
      location: "Jaipur",
      price: "$289/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=870&auto=format&fit=crop",
      description: "Royal architecture with modern comforts.",
      amenities: ["Airport Pickup", "Breakfast", "Cultural Show"],
    },
    {
      id: 8,
      name: "Himalayan View Resort",
      location: "Dharamshala",
      price: "$309/night",
      image:
        "https://images.unsplash.com/photo-1551888410-61b2840779d7?auto=format&fit=crop&w=800&q=60",
      description: "Panoramic valley views with rooftop dining.",
      amenities: ["Infinity Pool", "Yoga Sessions", "Free Wi-Fi"],
    },
  ],

  Premium: [
    {
      id: 6,
      name: "Grand Villa",
      location: "Manali",
      price: "$499/night",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
      description: "Private villa with snowy views and jacuzzi.",
      amenities: ["24/7 Butler", "Fireplace", "Nature Walks"],
    },
    {
      id: 7,
      name: "Royal Retreat",
      location: "Udaipur",
      price: "$479/night",
      image:
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=870&auto=format&fit=crop",
      description: "A palace-turned-resort on the lakefront.",
      amenities: ["Boat Ride", "Lake-view Rooms", "Fine Dining"],
    },
    {
      id: 9,
      name: "Ocean Pearl Estate",
      location: "Andaman",
      price: "$519/night",
      image:
        "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d7?auto=format&fit=crop&w=800&q=60",
      description: "Luxury beachfront estate with private pier.",
      amenities: ["Snorkeling Gear", "Sunset Cruise", "Gourmet Seafood"],
    },
  ],
};

const HotelPrice = () => {
  const location = useLocation();
  const plan = new URLSearchParams(location.search).get("plan");
  const hotels = hotelData[plan] || [];

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.USER_ID
      );

      setBookingSuccess(true);
      formRef.current.reset();

      setTimeout(() => {
        setBookingSuccess(false);
        setSelectedHotel(null);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Booking failed. Please try again.");
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    if (!isSubmitting) {
      setSelectedHotel(null);
      setBookingSuccess(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-emerald-50 via-teal-100 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-8">
          {plan} Plan Hotels
        </h2>

        {hotels.length === 0 ? (
          <p className="text-center text-gray-600">
            No hotels available for this plan.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: hotel.id * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-emerald-800">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {hotel.location}
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      {hotel.description}
                    </p>

                    <ul className="text-xs text-gray-600 space-y-1 mb-4">
                      {hotel.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-1">•</span> {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-emerald-600 mb-2">
                      {hotel.price}
                    </p>
                    <button
                      onClick={() => setSelectedHotel(hotel)}
                      className="w-full py-2 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Booking Modal */}
        <AnimatePresence>
          {selectedHotel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="relative bg-white rounded-xl p-6 w-full max-w-sm shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={closeModal}
                  disabled={isSubmitting}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {bookingSuccess ? (
                  <div className="text-center py-6">
                    <div className="mx-auto w-20 h-20 mb-4">
                      <Lottie
                        animationData={successAnimation}
                        loop={false}
                        className="w-full h-full"
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-emerald-600 mb-2">
                      Booking Confirmed!
                    </h4>
                    <p className="text-gray-500 text-sm mb-4">
                      Your booking at {selectedHotel.name} is confirmed.
                    </p>
                    <p className="text-xs text-gray-400">
                      Confirmation details will be sent to your email.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      Book {selectedHotel.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                      {selectedHotel.location} • {selectedHotel.price}
                    </p>

                    <form
                      ref={formRef}
                      onSubmit={handleBooking}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Check-in Date
                        </label>
                        <input
                          name="date"
                          type="date"
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>

                      <input
                        type="hidden"
                        name="hotel"
                        value={selectedHotel.name}
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-2.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          "Confirm Booking"
                        )}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HotelPrice;
