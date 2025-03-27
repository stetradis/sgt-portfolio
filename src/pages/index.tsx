import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";

import SocialLink from "@/components/SocialLink";
import PortfolioCard from "@/components/PortfolioCard";
import { classNames } from "@/utils/classNames";
import Navigation from "@/components/Navigation";
import TechStack from "@/components/TechStack";
import CurrentProject from "@/components/CurrentProject";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Get from localStorage or use false (light mode) as default
    const storedDarkMode = localStorage.getItem("dark")
      ? JSON.parse(localStorage.getItem("dark") || "false")
      : false;

    setDarkMode(storedDarkMode);

    // Apply dark mode class to html and body elements
    if (storedDarkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, []);

  // Update document and body classes when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Stella Tetradis | Software Engineer</title>
        <meta
          name="description"
          content="Stella Tetradis - Software Engineer with expertise in full-stack development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/st-logo.png" />
      </Head>
      <Navigation mode={darkMode} setMode={setDarkMode} />
      <main className="dark:text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <section id="about" className="pt-16 md:pt-24">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="text-center md:text-left md:w-1/2"
              variants={item}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-primary to-primary-dark pb-3"
                variants={item}
              >
                Stella Tetradis
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100"
                variants={item}
              >
                Software Engineer
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
                variants={item}
              >
                As a Full Stack Engineer with 7+ years of experience, I
                architect and develop robust software solutions with a focus on
                performance optimization. My expertise spans front-end and
                back-end technologies, including React, Next.js, TypeScript, and
                Node.js. I excel at translating business requirements into
                technical specifications, implementing best practices, and
                mentoring team members to drive project success.
              </motion.p>
              <motion.div
                variants={item}
                className="flex justify-center md:justify-start gap-4"
              >
                <a href="#portfolio" className="btn">
                  View My Work
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 border border-gray-300 dark:border-dark-border px-5 py-2.5 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:border-primary dark:hover:border-primary transition-all duration-300"
                >
                  <BsDownload /> Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2 flex justify-center"
              variants={item}
            >
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-card shadow-xl animate-float"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Image
                  src="/aistella.jpg"
                  alt="Stella"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <SocialLink />
          <TechStack />
        </section>

        <CurrentProject />
        <PortfolioCard />
      </main>
    </div>
  );
}
