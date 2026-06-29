import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ByeAvatar from "../../assets/kawaii/ByeAvatar.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <section
      id="contact"
      className="
      relative
      min-h-screen
      bg-black
      flex
      items-center
      justify-center
      px-6
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

      <img
        src={ByeAvatar}
        alt="Bye Avatar"
        className="
          absolute
          bottom-6
          right-6
          w-44
          rotate-[-8deg]
          z-0
        "
      />

      <div
        className="
        max-w-4xl
        mx-auto
        text-center
        "
      >



        <TypeAnimation
          sequence={[
            "Let's Connect! ★",
            2000,
            "Let's Build Together 🚀",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="
          section-title
          text-[#FFE600]
          text-5xl
          mb-4
          "
        />


        <p
          className="
          text-white
          text-lg
          mb-10
          "
        >
          Open to new opportunities, collaborations & chai chats ♡
        </p>



        {/* MESSAGE */}

        <motion.div

          initial={{
            opacity:0,
            scale:0.8
          }}

          whileInView={{
            opacity:1,
            scale:1,
            y:[0,-8,0]
          }}

          transition={{
            y:{
              duration:3,
              repeat:Infinity,
              ease:"easeInOut"
            }
          }}


          className="
          bg-white
          border-[4px]
          border-black
          shadow-[8px_8px_0px_#FFE600]

          rounded-3xl

          px-10
          py-8

          mb-12
          "
        >

          <h3
            className="
            text-3xl
            font-black
            mb-5
            "
          >
            Hey there 👋
          </h3>


          <p
            className="
            font-semibold
            leading-8
            text-lg
            "
          >

            Thanks for stopping by my portfolio!

            <br />

            I enjoy creating data-driven solutions
            using Machine Learning, Analytics and AI.

            <br />

            Always excited to explore new ideas,
            opportunities and meaningful collaborations.

          </p>


        </motion.div>




        {/* LINKS */}


        <div
          className="
          flex
          justify-center
          flex-wrap
          gap-6
          relative
          z-50
          "
        >


          <a
            href="https://github.com/code-with-shriyut"
            target="_blank"
            rel="noopener noreferrer"
            className="
            w-48

            flex
            items-center
            justify-center
            gap-3

            bg-white

            border-[4px]
            border-black

            rounded-2xl

            px-6
            py-4

            shadow-[6px_6px_0_black]

            font-black

            hover:-translate-y-2
            hover:rotate-[-2deg]
            hover:scale-105

            transition-all
            duration-300
            "
          >

            <FaGithub size={24} />

            GitHub

          </a>



          <a
            href="https://www.linkedin.com/in/shriyut-janardan-84564a22a/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            w-48

            flex
            items-center
            justify-center
            gap-3

            bg-[#8B6CFF]

            text-white

            border-[4px]
            border-black

            rounded-2xl

            px-6
            py-4

            shadow-[6px_6px_0_black]

            font-black

            hover:-translate-y-2
            hover:rotate-[2deg]
            hover:scale-105

            transition-all
            duration-300
            "
          >

            <FaLinkedin size={24} />

            LinkedIn

          </a>




          <a
            href="mailto:shriyutjanardan@gmail.com"
            className="
            w-48

            flex
            items-center
            justify-center
            gap-3

            bg-[#FFE600]

            border-[4px]
            border-black

            rounded-2xl

            px-6
            py-4

            shadow-[6px_6px_0_black]

            font-black

            hover:-translate-y-2
            hover:rotate-[-2deg]
            hover:scale-105

            transition-all
            duration-300
            "
          >

            <FaEnvelope size={24} />

            Email

          </a>


        </div>
        <p
          className="
          text-gray-400
          font-bold
          mt-12
          "
        >

          💗Collecting experiences • Building impact • Levelling Up everyday⚡ 

          

        </p>


      </div>


    </section>
  );
}

export default Contact;