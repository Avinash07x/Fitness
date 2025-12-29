import React from "react";
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Dumbbell className="text-black w-8 h-8" />
          </Link>

          {/* Menu Items */}
          <div className="hidden m-auto md:flex space-x-6">
            <Link to="/" className="text-gray-800 font-semibold hover:text-blue-500 transition">
              HOME
            </Link>
            <a href="#plan" className="text-gray-800 font-semibold hover:text-blue-500 transition">
              PLANS
            </a>
            <a href="#gallery" className="text-gray-800 font-semibold hover:text-blue-500 transition">
              GALLERY
            </a>
            <a href="#experience" className="text-gray-800 font-semibold hover:text-blue-500 transition">
              EXPERIENCE
            </a>
          </div>

          {/* Right Side Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/getstarted"
              className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
