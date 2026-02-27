import { motion } from "framer-motion";

export default function SignupModal({ close }) {
  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black backdrop-blur-sm z-20"
        onClick={close}
      />

      {/* Center Popup */}
      <motion.div
  initial={{ scale: 0.8, opacity: 0, y: 40 }}
  animate={{ scale: 1, opacity: 1, y: 0 }}
  exit={{ scale: 0.8, opacity: 0, y: 40 }}
  transition={{ type: "spring", stiffness: 120, damping: 15 }}
  className="fixed inset-0 flex items-center justify-center z-30"
>
        <div className="bg-white w-[420px] p-10 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-[1.02]">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Create Account
          </h2>

          <div className="space-y-4">
            

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />

            <input
              type="password"
              placeholder="Password"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"  
              
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Sign Up
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Already have an account?
            <span className="text-blue-600 cursor-pointer ml-1">
              Login
            </span>
          </p>
        </div>
      </motion.div>
    </>
  );
}