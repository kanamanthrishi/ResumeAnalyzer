import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import Dashboard from "./Dashboard";

export default function Landing() {
  const [modal, setModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 🔥 NEW STATE

  // 🔥 If logged in → show Dashboard instead of Landing
  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Gradient Blobs */}
      <div className="absolute w-[700px] h-[700px] bg-blue-400 opacity-20 blur-3xl rounded-full -top-60 -left-60"></div>
      <div className="absolute w-[600px] h-[600px] bg-indigo-400 opacity-20 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* Navbar */}
      <header className="relative flex justify-between items-center px-16 py-6 z-10">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          ResumeAI
        </h1>

        <div className="space-x-6">
          <button
            onClick={() => setModal("login")}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Log In
          </button>

          <button
            onClick={() => setModal("signup")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:scale-105 transition shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-16 py-28 flex items-center justify-between z-10">

        {/* LEFT */}
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Land More Interviews <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              With AI-Powered Resume Analysis
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-gray-600 text-xl leading-relaxed"
          >
            ResumeAI intelligently compares your resume with job
            descriptions and gives actionable insights to boost your
            chances of getting shortlisted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex items-center gap-6"
          >
            <button
              onClick={() => setModal("signup")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg hover:scale-105 transition shadow-xl"
            >
              Get Started Free
            </button>

            <span className="text-gray-500 text-sm">
              No credit card required
            </span>
          </motion.div>

          {/* Features Row */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-blue-600">95%</h4>
              <p className="text-gray-500 mt-2">Match Accuracy</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-indigo-600">2x</h4>
              <p className="text-gray-500 mt-2">More Shortlists</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-purple-600">Instant</h4>
              <p className="text-gray-500 mt-2">AI Analysis</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          className="hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <div className="w-[420px] bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-md">

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Resume Match Report
            </h3>

            <div className="h-4 bg-gray-200 rounded-full mb-6">
              <div className="h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full w-4/5"></div>
            </div>

            <div className="space-y-3">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>

            <div className="mt-8 h-44 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 font-semibold">
              AI Analysis Preview
            </div>

          </div>
        </motion.div>

      </section>

      {/* MODALS */}
      <AnimatePresence>
        {modal === "signup" && (
          <SignupModal
            close={() => setModal(null)}
            switchToLogin={() => setModal("login")}
          />
        )}

        {modal === "login" && (
          <LoginModal
            close={() => setModal(null)}
            switchToSignup={() => setModal("signup")}
            onLoginSuccess={() => {
              setIsLoggedIn(true);  // 🔥 REDIRECT HERE
              setModal(null);
            }}
          />
        )}
      </AnimatePresence>

    </div>
  );
}