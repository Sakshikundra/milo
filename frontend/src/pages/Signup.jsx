import React, { useState, useContext } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { userDatacontext } from "../context/Usercontext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(""); // ✅ Fixed: err state was missing

  const navigate = useNavigate();
  const { serverurl } = useContext(userDatacontext);

  const handleSignup = async (e) => {
    e.preventDefault();
    setErr(""); // Reset error

    try {
      let response = await fetch(`${serverurl}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        setErr(result.message || "Signup failed, try again!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErr("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="relative min-h-[140vh] w-full overflow-x-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-2] pointer-events-none"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 z-[-1] bg-gradient-to-l from-black/60 via-black/20 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center justify-end px-6 md:px-16 lg:px-24 py-16">
        <div className="flex-1" />

        <div className="bg-[rgba(10,12,24,0.7)] backdrop-blur-xl p-6 sm:p-8 rounded-2xl w-full max-w-[400px] text-left shadow-2xl border border-white/10">
          <h2 className="text-white text-2xl font-semibold mb-6">
            Register to{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Virtual Assistant
            </span>
          </h2>

          <form onSubmit={handleSignup} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400/70 focus:outline-none border border-white/10"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400/70 focus:outline-none border border-white/10"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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

            {/* ✅ Error Message */}
            {err && <p className="text-red-500 text-sm mt-1">* {err}</p>}

            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-full bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 text-white font-semibold transition shadow-lg border border-white/10"
            >
              Register
            </button>

            <p className="text-white text-sm mt-4 cursor-pointer">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-indigo-400 hover:underline"
              >
                Sign In
              </span>
            </p>

            <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-transparent rounded-full mt-2" />
          </form>
        </div>
      </div>

      <div className="h-[40vh]" />
    </div>
  );
}

export default Signup;
