import { motion } from "framer-motion";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      {/* Animated Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-20 right-20"></div>

      {/* Signup Card */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-10 w-[400px]"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Create Account
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-lg text-white font-semibold shadow-lg">
            Sign Up
          </button>
        </div>

        <p className="text-gray-300 text-sm text-center mt-6">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}