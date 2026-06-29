import { motion } from "framer-motion";

function SkillBubble({
  text,
  color,
  delay,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        delay,
        duration: 0.6,
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.1,
        y: -5,
      }}
      className={`
        px-5
        py-3
        rounded-full
        border-[3px]
        border-black
        font-bold
        shadow-[4px_4px_0px_#000]
        cursor-default
        ${color}
      `}
    >
      {text}
    </motion.div>
  );
}

export default SkillBubble;