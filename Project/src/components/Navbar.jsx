import React from "react";
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="
        sticky top-0 z-50
        bg-black/70
        backdrop-blur-lg
        border-b border-gray-800
        transition-all
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Dumbbell className="text-purple-500 w-8 h-8" />
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              HOME
            </Link>

            <a
              href="#plan"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              PLANS
            </a>

            <a
              href="#gallery"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              GALLERY
            </a>

            <a
              href="#experience"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              EXPERIENCE
            </a>

            <Link
              to="/transformations"
              className="text-gray-300 font-medium hover:text-white transition"
            >
              TRANSFORMATIONS
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            to="/getstarted"
            className="
              bg-red-500 hover:bg-red-600 text-white text-sm
              px-6
              py-2
              font-semibold
              shadow-lg
              hover:scale-105
              active:scale-95
              transition
            "
          >
            GET STARTED
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
