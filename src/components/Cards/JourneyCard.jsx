import { motion } from "framer-motion";

function JourneyCard({
  icon,
  step,
  title,
  desc,
  tag,
  color,
  side,
  rotate,
}) {

  return (

    <motion.div

      initial={{
        opacity:0,
        x: side==="left" ? -100 : 100,
        scale:0.85
      }}

      whileInView={{
        opacity:1,
        x:0,
        scale:1
      }}

      viewport={{
        once:true,
        amount:0.3
      }}

      transition={{
        duration:0.6,
        type:"spring"
      }}

      className={`
      relative
      w-[360px]

      ${side==="left"
      ?"mr-auto"
      :"ml-auto"}
      `}
    >


    {/* floating wrapper */}

    <motion.div

      animate={{
        y:[0,-8,0],
        rotate:[rotate,0,rotate]
      }}

      transition={{
        duration:4,
        repeat:Infinity,
        ease:"easeInOut"
      }}

    >


      {/* ICON */}

      <div

      className={`
      absolute
      -top-9

      ${side==="left"
      ?"-left-8"
      :"-right-8"}

      w-20
      h-20

      rounded-full

      bg-white

      border-[4px]
      border-black

      shadow-[6px_6px_0_black]

      flex
      items-center
      justify-center

      text-4xl

      z-20
      `}
      >

      <img

      src={icon}

      alt={title}

      className="
      w-14
      h-14

      object-contain
      "

      />

      </div>




      {/* CARD */}

      <div

      className={`
      ${color}

      border-[4px]
      border-black

      rounded-[28px]

      shadow-[10px_10px_0_black]

      px-8
      py-7

      min-h-[230px]
      `}
      >


      <span
      className="
      bg-black
      text-white

      px-4
      py-1.5

      text-sm
      font-black

      inline-block

      rotate-[-3deg]

      mb-5
      "
      >

      STEP {step}

      </span>



      <h2
      className="
      text-2xl
      font-black
      mb-4
      "
      >

      {title}

      </h2>



      <p
      className="
      text-sm
      font-bold
      leading-6
      mb-5
      "
      >

      {desc}

      </p>



      <span
      className="
      border-[3px]
      border-black
      bg-white

      px-4
      py-1.5

      rounded-lg

      text-sm
      font-black
      "
      >

      {tag}

      </span>


      </div>


    </motion.div>


    </motion.div>

  );
}


export default JourneyCard;