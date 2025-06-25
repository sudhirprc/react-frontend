// src/Components/NoMatch.jsx
import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#fdfdfd]">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-gray-700 text-lg mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="text-white bg-green-600 px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NoMatch;
