import { AiOutlineConsoleSql } from "react-icons/ai";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiGithub,
  SiDotnet,
  SiCsharp,
  SiNextdotjs,
  SiAngularjs,
  SiVuedotjs,
  SiAmazonaws,
  SiAzuredevops,
} from "react-icons/si";
import { motion } from "framer-motion";

const TechStack = () => {
  const techItems = [
    { icon: <SiCsharp className="icon" size={36} />, name: "C#" },
    { icon: <SiDotnet className="icon" size={36} />, name: ".NET" },
    { icon: <SiJavascript className="icon" size={36} />, name: "JavaScript" },
    { icon: <SiTypescript className="icon" size={36} />, name: "TypeScript" },
    { icon: <SiReact className="icon" size={36} />, name: "React" },
    { icon: <SiNextdotjs className="icon" size={36} />, name: "Next.js" },
    { icon: <AiOutlineConsoleSql className="icon" size={36} />, name: "SQL" },
    { icon: <SiGithub className="icon" size={36} />, name: "GitHub" },
    { icon: <SiAngularjs className="icon" size={36} />, name: "Angular" },
    { icon: <SiVuedotjs className="icon" size={36} />, name: "Vue.js" },
    { icon: <SiAmazonaws className="icon" size={36} />, name: "AWS" },
    { icon: <SiAzuredevops className="icon" size={36} />, name: "Azure" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="techstack" className="mt-16">
      <div className="text-center mb-12">
        <motion.h3
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h3>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My technical expertise spans multiple programming languages,
          frameworks, and cloud platforms that I leverage to architect and
          implement scalable, maintainable solutions. I specialize in full-stack
          development with an emphasis on building secure, performant
          applications for enterprise clients across financial technology and
          digital assets sectors.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {techItems.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center p-6 bg-white dark:bg-dark-card rounded-xl shadow-md border border-gray-200 dark:border-dark-border transition-all duration-300 hover:shadow-xl"
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              borderColor: "var(--primary)",
            }}
          >
            <div className="mb-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300">
              {tech.icon}
            </div>
            <span className="text-sm font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
