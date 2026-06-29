import { motion } from "framer-motion";

function AchievementCard({
  id,
  icon,
  color,
  title,
  subtitle,
  description,
  tag,
}) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        rotate: -2,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
      }}
      className="
      relative

      w-[370px]
      h-[510px]

      flex-shrink-0
      "
    >

      {/* Tape */}

      <div
        className={`
        absolute

        top-3
        left-

        w-35
        h-10

        rounded-sm

        border-[3px]
        border-black

        shadow-[2px_2px_0_black]

        z-20

        ${
          id % 2 === 0
            ? "bg-[#7BD7FF] rotate-[-18deg]"
            : "bg-[#FF76C5] rotate-[-18deg]"
        }
        `}
      />



      {/* Main Card */}

      <div
        className={`
        ${color}

        w-full
        h-full

        rounded-[34px]

        border-[5px]
        border-black

        shadow-[12px_12px_0_black]

        px-8
        pt-10
        pb-8

        relative

        overflow-hidden
        `}
      >

        {/* Floating Icon */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
          mx-auto

          w-28
          h-28

          rounded-full

          bg-white

          border-[5px]
          border-black

          shadow-[5px_5px_0_black]

          flex
          justify-center
          items-center

          mb-8
          "
        >

          <img
            src={icon}
            alt={title}
            className="
            w-50
            h-50

            object-contain
            "
          />

        </motion.div>



        {/* Title */}

        <h2
          className="
          text-center

          text-3xl

          font-black

          leading-tight
          "
        >
          {title}
        </h2>



        {/* Subtitle */}

        <p
          className="
          text-center

          mt-2

          text-lg

          font-bold

          text-[#4B2C91]
          "
        >
          {subtitle}
        </p>



        {/* Divider */}

        <div
          className="
          my-6

          border-t-[4px]

          border-dashed

          border-black
          "
        />



        {/* Description */}

        <p
          className="
          text-center

          leading-7

          font-semibold

          text-[15px]
          "
        >
          {description}
        </p>



        {/* Bottom Tag */}

        <div
          className="
          absolute

          left-6
          right-6

          bottom-6
          "
        >

          <div
            className="
            bg-white

            border-[4px]
            border-black

            rounded-xl

            py-3

            text-center

            font-black

            text-sm

            shadow-[4px_4px_0_black]
            "
          >
            {tag}
          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default AchievementCard;
