import { TypeAnimation } from "react-type-animation";
import ProjectCard from "../Cards/ProjectCard";


function Projects() {


const projects = [
  {
    title: "💳 Loan Risk Analyzer",
    featured: true,

    desc:
        "An AI-powered FinTech system that analyzes borrower profiles and predicts loan default risk using Machine Learning. It combines predictive modeling with explainable AI techniques to provide transparent credit risk insights for smarter lending decisions.",

    tags: [
      "Python",
      "XGBoost",
      "SHAP",
      "FastAPI",
      "SQL",
    ],

    github:
      "https://github.com/code-with-shriyut/credit-risk-analyzer.git",

    demo: "",
  },


  {
    title: "🩺 InsureAI",

    desc:
      "Machine Learning based health insurance premium prediction system with data analysis, model training and interactive prediction dashboard.",

    tags: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "Streamlit",
    ],

    github:
      "https://github.com/code-with-shriyut/health-insurance-prediction.git",

    demo: "",
  },


  {
    title: "🚀 UPI Fraud Detection",

    desc:
      "Building an intelligent FinTech fraud detection system to identify suspicious UPI transactions using Machine Learning techniques.",

    tags: [
      "Python",
      "Machine Learning",
      "Fraud Detection",
      "FinTech",
    ],

    github: "",

    upcoming: true,
  },
];



return(

<section
id="projects"

className="
section-panel
min-h-screen
bg-[#FF2D78]
relative
overflow-hidden
py-24
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
max-w-7xl
mx-auto
px-10
"
>


<div
className="
brutal-pill
inline-block
bg-yellow-300
px-6
py-2
rounded-full
font-black
mb-8
"
>
PROJECTS
</div>


<TypeAnimation

sequence={[
"Things I've Built 🚀",
2000,
"Data Experiments 🧪",
2000,
]}

wrapper="h2"

speed={50}

repeat={Infinity}

className="
section-title
text-white
text-5xl
mb-16
"
/>


<div
className="
grid
md:grid-cols-2
gap-8
"
>


{projects.map((project,index)=>(

<ProjectCard

key={index}

{...project}

delay={index*0.2}

/>

))}


</div>


</div>


</section>

);

}


export default Projects;