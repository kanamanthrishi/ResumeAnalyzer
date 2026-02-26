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
        initial={{ scale: 0.6, opacity: 0, rotateX: -15 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        exit={{ scale: 0.6, opacity: 0, rotateX: -15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed inset-0 flex items-center justify-center z-30"
      >
        <div className="bg-white w-[420px] p-10 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create Account
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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