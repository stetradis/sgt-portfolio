import Image from "next/image";
import Tag from "./Tag";
import { motion } from "framer-motion";

const PortfolioCard = () => {
  const projects = [
    {
      title: "Blockworks",
      description:
        "Designed and developed multiple features according to business requirements.",
      image: "/bweditorial.png",
      tags: [
        "javascript",
        "nodejs",
        "php",
        "heroku",
        "wordpress",
        "css",
        "mysql",
        "seo",
      ],
      url: "https://blockworks.co/",
    },
    {
      title: "Blockworks Research",
      description:
        "Full stack development on creating the research platform from a figma design.",
      image: "/bwresearch.png",
      tags: [
        "javascript",
        "typescript",
        "php",
        "mysql",
        "nextjs",
        "react",
        "tailwind",
        "aws",
        "docker",
        "vercel",
        "graphql",
        "mixpanel",
      ],
      url: "https://app.blockworksresearch.com/",
    },
    {
      title: "San Antonio Speak Up",
      description:
        "Lead engineer on the city of San Antonio's engagement portal and representative backend system.",
      image: "/saspeakup.png",
      tags: [
        "javascript",
        "jquery",
        "ajax",
        "c#",
        ".net",
        "mvc",
        "azure",
        "sqlserver",
        "css",
        "bootstrap",
      ],
      url: "https://www.saspeakup.com/",
    },
    {
      title: "Ninety One",
      description:
        "Developed the end user website as well as rewriting the investment management backend system.",
      image: "/ninetyone.png",
      tags: [
        "javascript",
        "typescript",
        "angular",
        "c#",
        ".net",
        "azure",
        "sqlserver",
        "cosmosdb",
        "aws",
        "docker",
      ],
      url: "https://ninetyone.com/en/south-africa",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="mt-24 mb-20">
      <div className="text-center mb-12">
        <motion.h3
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Past Projects
        </motion.h3>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Being a software engineer in financial technology often means that the
          projects I&apos;ve worked on cannot be shared publicly due to NDAs and
          access requirements. Here you can find a handful of publicly available
          projects that I have developed.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-dark-border transition-all duration-300 card-hover h-full flex flex-col"
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                priority={index < 2}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="font-bold text-xl mb-3 text-gray-800 dark:text-white">
                {project.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="mb-6">
                <Tag tagNames={project.tags} />
              </div>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-block text-center w-full mt-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Website
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioCard;
