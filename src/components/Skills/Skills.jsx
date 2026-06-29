import SQLSnippet from "../../assets/snippets/SQL.png";
import PandasSnippet from "../../assets/snippets/Pandas.png";
import MLSnippet from "../../assets/snippets/ML.png";
import AnalyticsSnippet from "../../assets/snippets/Analytics.png";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const skills = [
  {
    text: "Python",
    category: "data",
    color: "bg-pink-300",
  },
  {
    text: "SQL",
    category: "data",
    color: "bg-yellow-300",
  },
  {
    text: "Pandas",
    category: "data",
    color: "bg-white",
  },
  {
    text: "Data Analysis",
    category: "data",
    color: "bg-blue-300",
  },

  {
    text: "Scikit-Learn",
    category: "ml",
    color: "bg-purple-300",
  },
  {
    text: "Predictive Modeling",
    category: "ml",
    color: "bg-pink-300",
  },
  {
    text: "Feature Engineering",
    category: "ml",
    color: "bg-yellow-300",
  },
  {
    text: "Statistics",
    category: "ml",
    color: "bg-white",
  },

  {
    text: "Fraud Detection",
    category: "fintech",
    color: "bg-blue-300",
  },
  {
    text: "Risk Analytics",
    category: "fintech",
    color: "bg-purple-300",
  },
  {
    text: "Financial Analytics",
    category: "fintech",
    color: "bg-pink-300",
  },
  {
    text: "Decision Intelligence",
    category: "fintech",
    color: "bg-yellow-300",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="
      scroll-mt-24
      min-h-screen
      bg-[#6CA8FF]
      py-20
      relative
      overflow-hidden
      "
    >
      <motion.img
        src={SQLSnippet}
        alt="SQL"
        className="
        absolute
        top-24
        right-8
        w-40
        opacity-70
        z-0
        rotate-6
        "
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div

      className="
      absolute
      inset-0

      opacity-10

      bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

      bg-[size:60px_60px]
      "

      />
      <motion.img
        src={MLSnippet}
        alt="ML"
        className="
        absolute
        top-[30%]
        left-4
        w-50
        opacity-75
        z-0
        -rotate-5
        "
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={PandasSnippet}
        alt="Pandas"
        className="
        absolute
        bottom-24
        right-4
        w-50
        opacity-75
        z-0
        rotate-3
        "
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={AnalyticsSnippet}
        alt="Analytics"
        className="
        absolute
        bottom-10
        right-220
        w-50
        opacity-75
        z-0
        rotate-3
        "
        animate={{
          y: [0, -14, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
          brutal-pill
          inline-block
          bg-black
          text-yellow-300
          px-4
          py-2
          rounded-full
          font-bold
          mb-4
          "
        >
          SKILLS
        </div>

        <TypeAnimation
          sequence={[
            "Things I Build With . . . .",
            2000,

          ]}
          wrapper="h2"
          speed={50}
          repeat={0}
          cursor={true}
          className="
            section-title
            text-4xl
            md:text-5xl
            text-white
            mb-16
            min-h-[80px]
          "
        />
        <div className="grid md:grid-cols-3 gap-10">

          {/* DATA */}
          <div>
            <h3 className="font-bold text-2xl mb-6">
              📊 Data Analytics
            </h3>

            <div className="flex flex-wrap gap-4">
              {skills
                .filter((s) => s.category === "data")
                .map((skill, index) => (
                  <motion.div
                    key={skill.text}
                    initial={{
                      opacity: 0,
                      x: Math.random() * 300 - 150,
                      y: Math.random() * 300 - 150,
                      scale: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.8,

                      y: {
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      },
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    className={`
                      ${skill.color}
                      px-5
                      py-3
                      rounded-full
                      border-[3px]
                      border-black
                      font-bold
                      shadow-[4px_4px_0px_#000]
                    `}
                  >
                    {skill.text}
                  </motion.div>
                ))}
            </div>
          </div>

          {/* ML */}
          <div>
            <h3 className="font-bold text-2xl mb-6">
              🤖 Machine Learning
            </h3>

            <div className="flex flex-wrap gap-4">
              {skills
                .filter((s) => s.category === "ml")
                .map((skill, index) => (
                  <motion.div
                      key={skill.text}
                      initial={{
                        opacity: 0,
                        x: Math.random() * 300 - 150,
                        y: Math.random() * 300 - 150,
                        scale: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                      }}
                      animate={{
                        y: [0, -8, 0],
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2,
                        duration: 0.8,

                        y: {
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        },
                      }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    className={`
                      ${skill.color}
                      px-5
                      py-3
                      rounded-full
                      border-[3px]
                      border-black
                      font-bold
                      shadow-[4px_4px_0px_#000]
                    `}
                  >
                    {skill.text}
                  </motion.div>
                ))}
            </div>
          </div>

          {/* FINTECH */}
          <div>
            <h3 className="font-bold text-2xl mb-6">
              💳 FinTech & Risk
            </h3>

            <div className="flex flex-wrap gap-4">
              {skills
                .filter((s) => s.category === "fintech")
                .map((skill, index) => (
                  <motion.div
                      key={skill.text}
                      initial={{
                        opacity: 0,
                        x: Math.random() * 300 - 150,
                        y: Math.random() * 300 - 150,
                        scale: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                      }}
                      animate={{
                        y: [0, -8, 0],
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2,
                        duration: 0.8,

                        y: {
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        },
                      }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    className={`
                      ${skill.color}
                      px-5
                      py-3
                      rounded-full
                      border-[3px]
                      border-black
                      font-bold
                      shadow-[4px_4px_0px_#000]
                    `}
                  >
                    {skill.text}
                  </motion.div>
                ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;