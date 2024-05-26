import Image from "next/image";
import Head from "next/head";

import SocialLink from "@/components/SocialLink";
import PortfolioCard from "@/components/PortfolioCard";
import { useState, useEffect } from "react";
import { classNames } from "@/utils/classNames";
import Navigation from "@/components/Navigation";
import TechStack from "@/components/TechStack";
import CurrentProject from "@/components/CurrentProject";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem("dark") || "true");
    setDarkMode(storedDarkMode);
  }, []);

  return (
    <div
      className={classNames(
        darkMode ? "dark" : "",
        "bg-zinc-100 px-10 pb-10 md:px-20 lg:px-40"
      )}
    >
      <Head>
        <title>Stella Tetradis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/st-logo.png" />
      </Head>
      <Navigation mode={darkMode} setMode={setDarkMode} />
      <main className="dark:text-white dark:bg-zinc-900">
        <section id="about">
          <div className="p-8 text-center">
            <h2 className="text-4xl font-semibold py-4 text-purple-700 font-md">
              Stella Tetradis
            </h2>
            <h3 className="text-2xl py-2">Software Engineer</h3>
            <p className="text-md py-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              As a Full Stack Software Engineer with 6+ years of experience, I
              have a proven track record of developing innovative software
              solutions in the financial technology and digital asset space. My
              experience includes designing, developing, and maintaining complex
              software applications that meet the needs of clients and
              businesses.
            </p>
            <Image
              src="/aistella.jpg"
              alt="Stella"
              width={210}
              height={0}
              className="my-4 mx-auto rounded-full overflow-hidden"
              priority
            />
          </div>
          <SocialLink />
          <TechStack />
        </section>

        <CurrentProject />
        <PortfolioCard />
      </main>
    </div>
  );
}
