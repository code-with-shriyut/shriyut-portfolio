import { useRef, useState } from "react";
import avatarIntro from "../../assets/videos/avatarIntroFixed.mp4";

function Intro({ onFinish }) {

  const videoRef = useRef(null);

  const [started,setStarted] = useState(false);


  const startIntro = () => {

    setStarted(true);

    setTimeout(()=>{

      videoRef.current.play();

    },100);

  };


  return (

    <div
    className="
    fixed
    inset-0

    bg-black

    z-[9999]

    flex
    items-center
    justify-center
    "
    >


    {!started && (

      <button

      onClick={startIntro}

      className="
      bg-[#FFE600]

      px-10
      py-5

      rounded-full

      border-[4px]
      border-white

      text-black

      text-xl

      font-black

      shadow-[8px_8px_0px_white]
      "

      >

      ✨ Explore my portfolio →

      </button>

    )}



    {started && (

      <video

        ref={videoRef}

        src={avatarIntro}

        playsInline

        onEnded={onFinish}

        className="
        w-[90%]

        h-auto
        object-cover
        "

      />

    )}


    </div>

  );

}


export default Intro;








