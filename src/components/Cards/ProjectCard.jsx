import { motion } from "framer-motion";

function ProjectCard({
  title,
  desc,
  tags,
  featured,
  delay,
  github,
  demo,
  upcoming,
}) {
  return (
    <motion.div

        initial={{
            opacity: 0,
            y: 60,
            scale: 0.9,
        }}

        whileInView={{
            opacity: 1,
            y: [0, -8, 0],
            scale: 1,
        }}

        viewport={{
            once: true,
            amount: 0.3,
        }}

        transition={{
            opacity: {
            duration: 0.5,
            delay,
            },

            scale: {
            duration: 0.5,
            delay,
            },

            y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
            },
        }}


        whileHover={{
            scale: 1.04,
            rotate: featured ? -2 : 2,
        }}


        className={`
            brutal-card
            relative
            bg-white
            rounded-3xl
            border-[4px]
            border-black
            shadow-[8px_8px_0px_black]

            ${featured
            ? "p-10 md:col-span-2 bg-[#FFE600]"
            : "p-8"}
        `}
   >

      {featured && (
        <div
          className="
          absolute
          -top-5
          left-8
          bg-black
          text-yellow-300
          px-6
          py-2
          rounded-full
          font-black
          "
        >
          ⭐ FEATURED
        </div>
      )}


      <h3
        className="
        text-3xl
        font-black
        mb-5
        "
      >
        {title}
      </h3>


      <p
        className="
        font-semibold
        leading-8
        mb-6
        "
      >
        {desc}
      </p>


      <div className="flex flex-wrap gap-3">

        {tags.map((tag,index)=>(
          <span
            key={index}
            className="
            bg-white
            border-[3px]
            border-black
            rounded-full
            px-5
            py-2
            font-bold
            text-sm
            "
          >
            {tag}
          </span>
        ))}

      </div>


      <div
  className="
  flex
  gap-4
  mt-8
  "
>

{github && (

<a
href={github}
target="_blank"
className="
brutal-pill
bg-black
text-white
px-5
py-2
rounded-full
font-bold
"
>
View_Code →
</a>

)}


{ demo && (

<a
href={demo}
target="_blank"
className="
brutal-pill
bg-pink-500
text-white
px-5
py-2
rounded-full
font-bold
"
>
Demo ↗
</a>

)}

{upcoming && (

<span
className="
brutal-pill
bg-purple-400
px-5
py-2
rounded-full
font-bold
"
>
Cooking ☕
</span>

)}

</div>

    </motion.div>
  );
}


export default ProjectCard;