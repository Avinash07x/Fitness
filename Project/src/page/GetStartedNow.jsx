import React, { useState } from "react";
import { User, Mail, Lock, Dumbbell } from "lucide-react";

function GetStartedNow() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <style>{`
        .animated-bg {
          background: linear-gradient(270deg, #ffffff, #c8d9daff, #96b0b7ac, #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        .form-card {
          animation: fadeSlideUp 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 20% cover 50%;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .title-animate {
          animation: fadeInTitle 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
        }

        @keyframes fadeInTitle {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="animated-bg min-h-screen flex items-center justify-center py-20 px-6">
        <div className="form-card max-w-md w-full bg-white/90 p-10 rounded-2xl shadow-xl border border-gray-300">

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <Dumbbell className="w-12 h-12 text-black" />
          </div>

          {/* Title */}
          <h1 className="title-animate text-3xl font-bold text-center text-black mb-2">
            Get Started Now
          </h1>

          <p className="text-center text-gray-700 mb-8">
            Create your account and start your transformation today.
          </p>

          {/* Form */}
          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
              <div className="flex items-center bg-gray-100 p-3 rounded-xl border border-gray-300">
                <User className="w-5 h-5 text-gray-700 mr-3" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
              <div className="flex items-center bg-gray-100 p-3 rounded-xl border border-gray-300">
                <Mail className="w-5 h-5 text-gray-700 mr-3" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Password</label>
              <div className="flex items-center bg-gray-100 p-3 rounded-xl border border-gray-300">
                <Lock className="w-5 h-5 text-gray-700 mr-3" />
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-800"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-black text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-700 mt-6 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-black font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default GetStartedNow;
