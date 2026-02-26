import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignupModal from "./SignupModal";

export default function Landing() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">

      {/* Background Aesthetic Shapes */}
      <div className="absolute w-[500px] h-[500px] bg-blue-300 opacity-30 blur-3xl rounded-full -top-40 -left-40"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-300 opacity-30 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* Navbar */}
      <header className="relative flex justify-between items-center px-16 py-6 z-10">
        <h1 className="text-2xl font-bold text-blue-700">ResumeAI</h1>

        <div className="space-x-6">
          <button className="text-gray-600">Log In</button>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-16 py-28 z-10">
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Optimize your resume <br /> to get more interviews
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            ResumeAI helps you analyze your resume and match it
            with job descriptions using intelligent AI scoring.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition"
          >
            Scan Your Resume For Free
          </button>
        </div>
      </section>

      {/* Signup Modal */}
      <AnimatePresence>
        {open && <SignupModal close={() => setOpen(false)} />}
      </AnimatePresence>

    </div>
  );
}