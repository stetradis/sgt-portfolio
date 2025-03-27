import Image from "next/image";
import Tag from "./Tag";
import { motion } from "framer-motion";

const CurrentProject = () => {
  return (
    <section id="portfolio" className="mt-24">
      <div className="text-center mb-12">
        <motion.h3
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Current Project and Work
        </motion.h3>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I am currently a Software Engineer at Legends, specializing in
          creating confidence-building tools for children.
        </motion.p>
      </div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-dark-border transition-all duration-300 card-hover"
          whileHover={{ scale: 1.02 }}
        >
          <div className="md:flex">
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <Image
                className="w-full h-full object-cover"
                src="/legends.png"
                alt="Legends"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="p-8 md:w-3/5">
              <motion.div
                className="flex flex-col h-full justify-between"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div>
                  <h4 className="font-bold text-2xl mb-4 text-gray-800 dark:text-white">
                    Legends
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Full Stack Software Engineer, working on implementing new
                    features and significantly enhancing the product. Currently
                    engaged in developing value-add features, defining product
                    specifications, designating tickets, code review and
                    implementing and maintaining best practices.
                  </p>
                  <div className="mb-6">
                    <Tag
                      tagNames={[
                        "react",
                        "javascript",
                        "nextjs",
                        "nodejs",
                        "typescript",
                        "tailwind",
                        "firebase",
                        "figma",
                        "vercel",
                      ]}
                    />
                  </div>
                </div>

                <motion.a
                  href="https://confidence.buildlegends.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-block w-auto text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Website
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CurrentProject;
