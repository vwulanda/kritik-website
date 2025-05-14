'use client';


import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-primary px-6 py-10 overflow-hidden scroll-smooth">
      {/* 🧭 Sticky Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-6 py-4 flex justify-center gap-6 text-sm text-[#4B3F72] font-semibold tracking-wide">
        <a href="#about" className="hover:underline">About</a>
        <a href="#download" className="hover:underline">Get the App</a>
        <a href="#feedback" className="hover:underline">Feedback</a>
      </nav>

      <div className="h-16" />

      {/* 🫧 Background blob */}
      <div className="absolute top-[-100px] -left-20 w-[500px] h-[500px] bg-[#F3F0FF] rounded-full blur-[100px] opacity-60 z-0" />

      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center animate-fade-in">
        {/* 🔍 Transparency Banner */}
        <div className="w-full bg-[#F3F0FF] text-sm text-[#4B3F72] px-4 py-3 rounded-md mb-6 border border-[#E0D7F2] flex items-start gap-2 text-left shadow-sm">
          <span className="text-base">ℹ️</span>
          <span>
            Kritiks are currently based on the artwork type you select — image analysis is coming soon.{' '}
            <Link href="#feedback" className="underline font-semibold ml-1">
              Help us improve
            </Link>
          </span>
        </div>

        {/* 🔥 Hero Section */}
        <motion.div
          whileTap={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image
            src="/logo.png"
            alt="kritik.ai logo"
            width={120}
            height={120}
            className="mx-auto mb-6 cursor-pointer"
          />
        </motion.div>
        <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-[#a18cd1] via-[#fbc2eb] to-[#4B3F72] bg-clip-text text-transparent leading-tight tracking-tight">
          Refine. Rethink. Rise.
        </h1>
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          kritik.ai helps artists grow through fast, thoughtful critiques. Upload your work,
          choose a type, and receive personalized feedback — all in seconds.
        </p>
        <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mb-6">
          Powered by AI. Getting smarter with every critique.
        </span>

        <hr className="w-32 border-t-2 border-[#E0D7F2] my-12" />

        {/* 🖼️ What is kritik.ai */}
        <motion.section
          className="text-left w-full"
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-3">🖼️ What is kritik.ai?</h2>
          <p className="text-gray-700 mb-6">
            <strong>kritik.ai</strong> (pronounced “<em>critic eye</em>”) is an AI-powered companion for emerging artists.
            Today, it analyzes your <strong>artwork type</strong> and <strong>caption</strong> to generate thoughtful critiques.
            In the future, it will be able to <strong>analyze the image itself</strong>, offering even deeper insights. We’re actively
            training the AI to improve with every submission.
          </p>

          <h2 className="text-2xl font-bold mb-3">💜 Why we built it</h2>
          <p className="text-gray-700 mb-6">
            Most artists crave feedback — but hate feeling judged. We created <strong>kritik.ai</strong> to offer <strong>non-biased,
            non-judgmental critiques</strong> in a safe, supportive space. It’s designed for <strong>emerging artists</strong>
            (and soon, designers too) who want to <strong>grow with confidence</strong>. No likes. No comments. Just growth.
          </p>

          <h2 className="text-2xl font-bold mb-3">🧩 How it works</h2>
          <p className="text-gray-700 mb-6">
            Here’s the basic flow of using kritik.ai:
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 text-center animate-fade-in-slow">
            <div className="flex flex-col items-center">
              <span className="text-4xl">🖼️</span>
              <p className="mt-2 text-sm font-medium">Upload Artwork</p>
            </div>
            <span className="text-xl md:text-3xl">➜</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl">📝</span>
              <p className="mt-2 text-sm font-medium">Caption & Type</p>
            </div>
            <span className="text-xl md:text-3xl">➜</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl">⚙️</span>
              <p className="mt-2 text-sm font-medium">AI Analyzes</p>
            </div>
            <span className="text-xl md:text-3xl">➜</span>
            <div className="flex flex-col items-center">
              <span className="text-4xl">🪞</span>
              <p className="mt-2 text-sm font-medium">Critique Delivered</p>
            </div>
          </div>
        </motion.section>

        {/* 🚀 Where to Get the App */}
        <motion.section
          className="text-left w-full mt-20"
          id="download"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-3">🚀 Get the App</h2>
          <p className="text-gray-700 mb-4">
            kritik.ai will be available soon on both iOS and Android. We’ll update this section with links to download the app once it’s live.
          </p>
          <div className="flex gap-4 mt-4">
            <Image src="/ios-badge.svg" alt="iOS" width={140} height={45} />
            
          </div>
        </motion.section>

        {/* 📣 Feedback Section */}
        <motion.section
          className="text-left w-full mt-20"
          id="feedback"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-3">📣 Share Your Feedback</h2>
          <p className="text-gray-700 mb-4">
            We’re still training the AI and improving the experience. Your thoughts matter.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe11ZYHzIgzejS3Qwc4oUWgGjJvn3ZdeYsRCoea3IhujaOn2Q/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 bg-[#4B3F72] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#3d3460] transition-all duration-200 block w-fit"
          >
            📝 Give Feedback
          </a>
        </motion.section>

        {/* 📬 Footer */}
        <footer className="text-center text-sm text-[#777] mt-20 pt-10 border-t border-gray-200 w-full pb-10">
          Built with 💜 by artists, for artists.
        </footer>
      </div>
    </main>
  );
}
