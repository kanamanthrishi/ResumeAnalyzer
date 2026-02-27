import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignupModal from "./SignupModal";

export default function Landing() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100">

      {/* Background Blur Shapes */}
      <div className="absolute w-[600px] h-[600px] bg-blue-400 opacity-20 blur-3xl rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-400 opacity-20 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* Navbar */}
      <header className="relative flex justify-between items-center px-16 py-6 z-10">
        <h1 className="text-2xl font-bold text-blue-700">ResumeAI</h1>

        <div className="space-x-6">
          <button className="text-gray-600 hover:text-gray-800 transition">
            Log In
          </button>

          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-16 py-28 flex items-center justify-between z-10">

        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Optimize your resume <br /> to get more interviews
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            ResumeAI analyzes your resume using intelligent AI and
            compares it with job descriptions to maximize your chances
            of getting shortlisted.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            Scan Your Resume For Free
          </button>
        </div>

        {/* RIGHT SIDE VISUAL WITH FLOAT ANIMATION */}
        <motion.div
          className="hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <div className="w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl p-6">

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Resume Match Report
            </h3>

            {/* Match Bar */}
            <div className="h-4 bg-gray-200 rounded-full mb-4">
              <div className="h-4 bg-green-400 rounded-full w-3/4"></div>
            </div>

            {/* Fake Resume Lines */}
            <div className="space-y-3">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>

            {/* Chart Area */}
            <div className="mt-6 h-40 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-semibold">
              AI Analysis Preview
            </div>

          </div>
        </motion.div>

      </section>

      {/* Signup Modal */}
      <AnimatePresence>
        {open && <SignupModal close={() => setOpen(false)} />}
      </AnimatePresence>

    </div>
  );
}