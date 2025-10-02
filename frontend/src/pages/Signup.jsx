import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative min-h-[140vh] w-full overflow-x-hidden">
      {/* ======================== BACKGROUND ======================== */}
      {/* Variant A: FIXED background (stays put, page scrolls) */}
      {/* 
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[-2] pointer-events-none"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      */}

      {/* Variant B: SCROLLABLE background (moves with page) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-2] pointer-events-none"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Soft right-side gradient to improve form contrast without killing BG */}
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-gradient-to-l from-black/60 via-black/20 to-transparent" />

      {/* ======================== CONTENT ======================== */}
      <div className="relative z-10 flex min-h-screen items-center justify-end px-6 md:px-16 lg:px-24 py-16">
        {/* Spacer to ensure scroll room so robot stays visible even if user scrolls */}
        <div className="flex-1" />

        {/* Form Box with palette closer to BG (deep indigo + cyan accents) */}
        <div className="bg-[rgba(10,12,24,0.7)] backdrop-blur-xl p-6 sm:p-8 rounded-2xl w-full max-w-[400px] text-left shadow-2xl border border-white/10">
          <h2 className="text-white text-2xl font-semibold mb-6">
            Register to{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Virtual Assistant
            </span>
          </h2>

          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400/70 focus:outline-none border border-white/10"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400/70 focus:outline-none border border-white/10"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 pr-12 rounded-full bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400/70 focus:outline-none border border-white/10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/90 hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 text-white font-semibold transition shadow-lg border border-white/10"
            >
              Register
            </button>
            <p className="text-white text-18px p-4 cursor-pointer ">Already have an account ?            <span className="text-indigo-500 p-8 "onClick={()=>navigate("/Signin")}>Sign In</span></p>

            {/* Subtle cyan underline accent */}
            <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-transparent rounded-full mt-2" />
          </form>
        </div>
      </div>

      {/* Bottom spacer to allow more scroll so robot remains visible on tall images/videos */}
      <div className="h-[40vh]" />
    </div>
  );
}

export default Signup;1