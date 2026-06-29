import JourneyCard from "../Cards/JourneyCard";
import { motion } from "framer-motion";
import robot from "../../assets/journey/robot.png";
import analytics from "../../assets/journey/analytics.png";
import fintech from "../../assets/journey/fintech.png";
import rocket from "../../assets/journey/rocket.png";
import star from "../../assets/journey/star.png";
import chai from "../../assets/journey/chai.png";


function Journey(){


const data=[


{
icon: robot,
step:"01",
title:"THE SPARK",

desc:
"My curiosity for technology started early — fascinated by robots and how machines could think and solve problems.",

tag:"CURIOSITY • TECH",

color:"bg-[#FFE600]",

side:"left",

rotate:-3
},



{
icon:analytics,
step:"02",

title:"FINDING DATA",

desc:
"I realized data is becoming one of the world's most valuable assets — powering intelligent decisions.",

tag:"DATA SCIENCE • AI",

color:"bg-[#56DFFF]",

side:"right",

rotate:3
},



{
icon:fintech,
step:"03",

title:"ENTERING FINTECH",

desc:
"Finance systems, fraud detection and risk analytics showed me how data solves real problems.",

tag:"FINTECH • RISK",

color:"bg-[#FF4FA3]",

side:"left",

rotate:-2
},



{
icon:rocket,
step:"04",

title:"BUILDING SYSTEMS",

desc:
"Deep research pushed me from learning concepts to creating end-to-end solutions like Loan Risk Analyzer.",

tag:"ML SYSTEMS • BUILDER",

color:"bg-[#8AFF45]",

side:"right",

rotate:2
},



{
icon:star,

step:"05",

title:"THE VISION",

desc:
"Building intelligent systems that solve real problems and make technology useful for people.",

tag:"IMPACT • INNOVATION",

color:"bg-[#C084FC]",

side:"left",

rotate:-3
}

];



return(

<section

id="journey"

className="
relative

min-h-screen

overflow-hidden

bg-[#8B6CFF]

py-16

px-10
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


{/* floating star */}

<motion.div

animate={{
rotate:360
}}

transition={{
duration:8,
repeat:Infinity
}}

className="
absolute

right-32
top-28

text-5xl
"

>

⭐

</motion.div>




{/* HEADING */}

<div

className="
text-center

mb-14
"

>


<div

className="
inline-block

bg-black

text-yellow-300

px-7
py-2

rounded-full

font-black

mb-5
"

>

MY STORY

</div>



<h1

className="
text-5xl
md:text-6xl

font-black

text-white

leading-tight

drop-shadow-[7px_7px_0_black]
"

>

FROM CURIOSITY

<br />


<span

className="
text-[#FFE600]
"

>

TO CREATION

</span>


</h1>


</div>




{/* CONTENT */}

<div

className="
relative

max-w-5xl

mx-auto

space-y-16
"

>


{/* timeline */}

<div

className="
hidden
md:block

absolute

left-1/2

top-0

h-full

border-l-[5px]

border-dotted

border-black
"

/>



{data.map((item)=>(


<div

key={item.step}

className="
relative
"

>


<div

className="
hidden
md:block

absolute

left-1/2

top-1/2

-translate-x-1/2

w-8
h-8

rounded-full

bg-[#FFE600]

border-[4px]
border-black

z-10
"

/>


<JourneyCard {...item}/>


</div>


))}




{/* chai */}


{/* chai */}


<motion.div

animate={{
y:[0,-8,0]
}}

transition={{
duration:4,
repeat:Infinity,
ease:"easeInOut"
}}

className="
relative

ml-auto

w-[420px]

bg-[#FFE600]

border-[4px]
border-black

shadow-[10px_10px_0_black]

rounded-[28px]

p-7

overflow-visible
"

>


<h2

className="
text-3xl
font-black

mb-12
"

>

BEYOND CODE

</h2>



<p

className="
font-bold

text-sm

leading-7

pr-20
"

>

When I'm not building with data,
you'll find me exploring new tech,
brainstorming crazy ideas and planning
the next big thing with a cup of chai.

</p>



{/* floating chai sticker */}


<motion.img

src={chai}

animate={{
y:[0,-10,0],
rotate:[-3,3,-3]
}}

transition={{
duration:3.5,
repeat:Infinity,
ease:"easeInOut"
}}

className="
absolute

right-1
bottom-0
w-35

object-contain
"

/>


</motion.div>



</div>


</section>


)

}


export default Journey;