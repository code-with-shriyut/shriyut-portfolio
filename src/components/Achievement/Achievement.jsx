import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import AchievementCard from "./AchievementCard";
import achievements from "./AchievementData";

import trophy from "../../assets/kawaii/achievement/trophy.png";
import thought from "../../assets/kawaii/achievement/thought.png";
import sparkle from "../../assets/kawaii/achievement/sparkle.png";

import girl from "../../assets/kawaii/achievement/girl.png";
import cat from "../../assets/kawaii/achievement/cat.png";
import yellowPart from "../../assets/kawaii/achievement/yellowpart.png";

function Achievement() {

  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 2;

  const totalPages = Math.ceil(achievements.length / cardsPerPage);

  const nextSlide = () => {

    if(currentPage < totalPages - 1){

        setCurrentPage(prev => prev + 1);

    }

  };
  const prevSlide = () => {

    if(currentPage > 0){

        setCurrentPage(prev => prev - 1);

    }

  };
  const visibleCards = achievements.slice(

    currentPage * cardsPerPage,

    currentPage * cardsPerPage + cardsPerPage

  );

  return (

<section

id="achievements"

className="
relative

overflow-hidden

bg-[#8F6CFF]

min-h-screen

pt-20
pb-28
"

>

{/* ================= GRID ================= */}

<div

className="
absolute
inset-0

opacity-10

bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

bg-[size:60px_60px]
"

/>



{/* ================= TROPHY ================= */}

<motion.img

src={trophy}

animate={{
y:[0,-10,0],
rotate:[-5,5,-5]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
absolute

left-50

top-12

w-60

z-20
"

/>



{/* ================= THOUGHT ================= */}

<motion.img

src={thought}

animate={{
rotate:[-3,3,-3]
}}

transition={{
duration:5,
repeat:Infinity
}}

className="
absolute

right-25

top-12

w-85

z-20
"

/>


{/* ================= HEADING ================= */}

<div

className="
relative

z-20

text-center
"

>

<div

className="
inline-block

bg-black

text-[#FFE600]

px-8

py-2

rounded-full

font-black

tracking-wider

mb-5
"

>

🏆 ACHIEVEMENT BOARD

</div>



<h1

className="
text-7xl

font-black

text-white

drop-shadow-[7px_7px_0_black]
"

>

ACHIEVEMENTS

</h1>



<p

className="
mt-4

text-xl

font-bold

text-white
"

>

Small Wins Today • Big Dreams Tomorrow 🚀

</p>



{/* Ribbon */}

<div

className="
mt-10

inline-flex

items-center
"

>

<div

className="
bg-[#FFE600]

border-[4px]

border-black

shadow-[7px_7px_0_black]

rounded-xl

px-12

py-4

font-black

text-2xl
"

>

Milestones that made me, me! 🌟

</div>

</div>

</div>
{/* ================= CAROUSEL ================= */}

<div
  className="
  relative

  max-w-[1400px]

  mx-auto

  mt-20

  z-20
  "
>

  {/* LEFT BUTTON */}

  <button
    onClick={prevSlide}
    disabled={currentPage===0}
    className="
    absolute

    left-2

    top-1/2

    -translate-y-1/2

    z-30

    w-16
    h-16

    rounded-full

    bg-[#FFE600]

    border-[4px]
    border-black

    shadow-[6px_6px_0_black]

    flex
    items-center
    justify-center

    hover:scale-110

    transition

    disabled:opacity-40
    "
  >
    <ChevronLeft size={34} />
  </button>



  {/* RIGHT BUTTON */}

  <button
    onClick={nextSlide}
    disabled={currentPage===totalPages-1}
    className="
    absolute

    right-2

    top-1/2

    -translate-y-1/2

    z-30

    w-16
    h-16

    rounded-full

    bg-[#FFE600]

    border-[4px]
    border-black

    shadow-[6px_6px_0_black]

    flex
    items-center
    justify-center

    hover:scale-110

    transition

    disabled:opacity-40
    "
  >
    <ChevronRight size={34} />
  </button>



  {/* CARDS WINDOW */}

  <div
  className="
  overflow-hidden

  px-28
  "
  >

  <AnimatePresence mode="wait">

  <motion.div

  key={currentPage}

  initial={{
  opacity:0,
  x:120
  }}

  animate={{
  opacity:1,
  x:0
  }}

  exit={{
  opacity:0,
  x:-120
  }}

  transition={{
  duration:0.45
  }}

  className="
  flex

  justify-center

  gap-10
  "

  >

  {

  visibleCards.map((item)=>(

  <AchievementCard

  key={item.id}

  {...item}

  />

  ))

  }

  </motion.div>

  </AnimatePresence>

  </div>

</div>



{/* ================= DOTS ================= */}

<div
  className="
  flex

  justify-center

  gap-4

  mt-10

  relative

  z-20
  "
>

  {Array.from({
  length:totalPages
  }).map((_, index) => (

    <button
      key={index}
      onClick={() => setCurrentPage(index)}
      className={`
      w-4
      h-4

      rounded-full

      transition-all

      duration-300

      ${
        currentPage===index
          ? "bg-[#FFE600] scale-125"
          : "bg-white"
      }
      `}
    />

  ))}

</div>

{/* ================= BOTTOM SPACER ================= */}

<div

className="
h-15
"

/>

{/* ================= BOTTOM ILLUSTRATION ================= */}

<div
className="
absolute

bottom-0
left-0

w-full

pointer-events-none

z-40
"
>

    {/* Yellow torn paper */}

    <img
        src={yellowPart}
        alt=""
        className="
        absolute

        bottom-0
        left-0

        w-full
        "
    />



    {/* Girl */}

    <motion.img

        src={girl}

        alt=""

        animate={{
            y:[0,-8,0]
        }}

        transition={{
            duration:3,
            repeat:Infinity,
            ease:"easeInOut"
        }}

        className="
        absolute

        bottom-0

        left-6

        w-80

        z-20
        "
    />



    {/* Cat */}

    <motion.img

        src={cat}

        alt=""

        animate={{
            y:[0,-8,0]
        }}

        transition={{
            duration:3,
            repeat:Infinity,
            ease:"easeInOut",
            delay:1
        }}

        className="
        absolute

        bottom-0

        right-6

        w-75

        z-20
        "
    />

</div>


</section>

  );

}

export default Achievement;