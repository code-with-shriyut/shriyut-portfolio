import { useState } from "react";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Journey from "./components/Journey/Journey";
import Achievement from "./components/Achievement/Achievement";

function App(){

const [showIntro,setShowIntro] = useState(true);


return(

<>


{
showIntro &&

<Intro

onFinish={()=>setShowIntro(false)}

/>

}



{
!showIntro &&

<>

<Navbar />

<Hero />

<About />

<Journey />

<Skills />

<Projects />

<Achievement/>

<Contact />

</>

}


</>

)

}


export default App;