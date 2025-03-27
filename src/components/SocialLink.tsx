import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";

const SocialLink = () => {
  const socialItems = [
    {
      icon: <AiFillMail />,
      href: "mailto:stella.tetradis@gmail.com",
      label: "Email",
    },
    {
      icon: <AiFillLinkedin />,
      href: "https://www.linkedin.com/in/stellatetradis/",
      label: "LinkedIn",
    },
    {
      icon: <AiFillGithub />,
      href: "https://github.com/stetradis",
      label: "GitHub",
    },
  ];

  return (
    <motion.div
      className="flex justify-center gap-6 py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      {socialItems.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("mailto") ? undefined : "_blank"}
          rel={
            item.href.startsWith("mailto") ? undefined : "noopener noreferrer"
          }
          className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
        >
          <div className="text-3xl bg-gray-100 dark:bg-dark-card p-3 rounded-full shadow-md">
            {item.icon}
          </div>
          <span className="text-sm font-medium">{item.label}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLink;
