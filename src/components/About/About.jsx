import MyAvatar from "../../assets/kawaii/My_Avatar.png";
import KawaiiDecoration from "../Decorations/KawaiiDecoration";
import ProfileImage from "../../assets/images/Itz_ME.jpeg";
import { TypeAnimation } from "react-type-animation";
function About() {
  return (
    <section
      id="about"
      className="
      scroll-mt-24
      section-panel
      min-h-screen
      bg-[#FFE600]
      relative
      overflow-hidden
      flex
      items-center
      "
    >
      <div

      className="
      absolute
      inset-0

      opacity-10

      bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

      bg-[size:60px_60px]
      "

      />
      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        py-20
        w-full
        grid
        md:grid-cols-2
        gap-16
        items-center
        "
      >
        {/* LEFT */}

        <div className="flex justify-center">

          <KawaiiDecoration
            src={MyAvatar}
            alt="My Avatar"
            className="
            absolute
            top-[650px]
            right-[-5px]
            w-40
            rotate-[0deg]
            z-20
            "
          />

          <div
            className="
            brutal-card
            bg-white
            p-4
            rotate-[-3deg]
            w-[360px]
            "
          >
            <div
              className="
              h-[260px]
              overflow-hidden
              rounded-lg
              "
            >
              <img
                src={ProfileImage}
                alt="Shriyut Janardan"
                className="
                w-full
                h-full
                object-cover
                "
              />
            </div>

            <p className="mt-3 font-bold">
              Shriyut ★
            </p>
          </div>

        </div>

        {/* RIGHT */}

        <div>

          <div
            className="
            brutal-pill
            inline-block
            bg-black
            text-yellow-300
            px-5
            py-2
            rounded-full
            text-base
            font-extrabold
            tracking-wide
            mb-5
            "
          >
            ABOUT ME
        </div>

          <TypeAnimation
            sequence={[
                "I build things with data✨",
                1000,

                "I explore Machine Learning🤖",
                1000,

                "I love solving real-world problems🚀",
                1000,

                "Future FinTech Data Scientist📈",
                1000,
            ]}
            wrapper="h1"
            speed={30}
            repeat={Infinity}
            className="
                section-title
                text-[20px]
                md:text-[32px]
                mb-2
                min-h-[80px]
            "
          
            />

          <p className="leading-9 mb-8 text-lg font-semibold">
            I'm a Computer Science Engineering student
            passionate about Machine Learning, Data Analytics,
            FinTech and AI.

            I enjoy transforming raw data into useful
            insights and building practical systems that
            solve real-world business and financial problems.

            Currently, I'm exploring predictive analytics, fraud detection, 
            and financial data systems while strengthening my skills in Python, SQL, and Machine Learning.

            My goal is to become a FinTech Data Scientist, 
            building data-driven solutions for smarter financial decisions and risk assessment.

            When I'm not building with data, you'll usually find me exploring new ML ideas, working on side projects, 
            or enjoying a cup of chai while planning the next one.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <span
                className="
                brutal-pill
                bg-pink-400
                px-5
                py-3
                rounded-full
                font-bold
                "
            >
                ☕ Chai & Code
            </span>

            <span
                className="
                brutal-pill
                bg-blue-500
                text-white
                px-5
                py-3
                rounded-full
                font-bold
                "
            >
                🤖 ML Explorer
            </span>

            <span
                className="
                brutal-pill
                bg-white
                px-5
                py-3
                rounded-full
                font-bold
                "
            >
                🌙 Night Owl
            </span>

            <span
                className="
                brutal-pill
                bg-purple-400
                px-5
                py-3
                rounded-full
                font-bold
                "
            >
                📊 Data Driven Builder
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;