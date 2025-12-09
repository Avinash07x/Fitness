import React from "react";
import { Dumbbell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Dumbbell className="text-black w-8 h-8" />
            <h1 className="ml-2 text-2xl font-bold text-black">EliteFit</h1>
          </div>

          {/* Menu Items */}
          <div className="hidden m-auto md:flex space-x-6">
            <a href="/" className="text-gray-800 font-semibold hover:text-blue-500 transition">
              HOME
            </a>
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
            <a
              href="/getstarted"
              className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
