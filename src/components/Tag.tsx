import { motion } from "framer-motion";

type CardTag = {
  tagNames: string[];
};

const Tag = (props: CardTag) => {
  const tags = props.tagNames;
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag, index) => {
        return (
          <motion.span
            key={`tag-${tag}`}
            className="tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "var(--primary-light)",
              color: "white",
              borderColor: "var(--primary)",
            }}
          >
            {tag}
          </motion.span>
        );
      })}
    </div>
  );
};

export default Tag;
