'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EmailConfirmed() {
  return (
    <main className="relative min-h-screen bg-white text-primary px-6 py-10 overflow-hidden scroll-smooth">
      {/* 🧭 Sticky Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-6 py-4 flex justify-center gap-6 text-sm text-[#4B3F72] font-semibold tracking-wide">
        <a href="/" className="hover:underline">Home</a>
        <a href="/#download" className="hover:underline">Get the App</a>
        <a href="/#feedback" className="hover:underline">Feedback</a>
      </nav>

      <div className="h-16" />

      {/* 🫧 Background blob */}
      {/* <div className="absolute top-[-100px] -left-20 w-[500px] h-[500px] bg-[#F3F0FF] rounded-full blur-[100px] opacity-60 z-0" /> */}

      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center animate-fade-in">
        {/* 🔥 Logo */}
        <motion.div
          whileTap={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image
            src="/logo.png"
            alt="kritik.ai logo"
            width={100}
            height={100}
            className="mx-auto mb-6 cursor-pointer"
          />
        </motion.div>

        <h1 className="text-3xl font-extrabold mb-4 text-[#4B3F72]">Welcome to kritik.ai! 🎨</h1>

        <p className="text-gray-700 leading-relaxed mb-2">
          Your email has been confirmed. You can now open the app and finish setting up your profile.
        </p>
        <p className="text-sm text-gray-500 italic">
          Still have the app open? Just return to it and continue.
        </p>

        {/* ✅ Divider */}
        <hr className="w-32 border-t-2 border-[#E0D7F2] my-10" />

        {/* Optional Button */}
        <a
          href="/"
          className="mt-2 px-5 py-3 bg-[#4B3F72] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#3d3460] transition-all duration-200 block"
        >
          ⬅ Back to Home
        </a>
      </div>
    </main>
  );
}