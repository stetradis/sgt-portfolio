import Image from "next/image";
import Tag from "./Tag";
import { motion } from "framer-motion";

const PortfolioCard = () => {
  const projects = [
    {
      title: "Blockworks",
      description:
        "Developed and implemented Node.js backend with RESTful APIs running on cron jobs to serve key metrics and price data/charts to the frontend. Enhanced SEO performance, resulting in high visibility and ranking on Google platforms.",
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
        "Developed and launched the research platform from Figma designs, leading backend development including APIs, database management, and analytics integration. Used TypeScript and Node.js to build a comprehensive platform that serves institutional clients.",
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
        "Tech lead for the city of San Antonio's engagement portal and representative backend system. Introduced methodologies and best practices that enhanced product definition and release processes, with a focus on WCAG compliance.",
      image: "/saspeakup.png",
      tags: [
        "c#",
        ".net",
        "mvc",
        "javascript",
        "jquery",
        "ajax",
        "t-sql",
        "azure",
        "css",
        "bootstrap",
        "git",
      ],
      url: "https://www.saspeakup.com/",
    },
    {
      title: "Ninety One",
      description:
        "Full stack development of wealth and asset management solutions. Developed the investment management backend. Responsible for all production deployments and off-site Disaster Recovery procedures.",
      image: "/ninetyone.png",
      tags: [
        "c#",
        ".net",
        "angular",
        "javascript",
        "typescript",
        "azure",
        "aws",
        "docker",
        "t-sql",
        "cosmosdb",
        "jenkins",
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
          As a software engineer in the financial technology sector, many of my
          enterprise projects are protected by confidentiality agreements. The
          following showcase represents a selection of public-facing work that
          demonstrates my technical capabilities and leadership in delivering
          complex, user-centered solutions across diverse technology stacks.
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
