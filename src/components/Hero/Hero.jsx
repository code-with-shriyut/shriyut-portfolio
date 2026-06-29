import { useRef, useState } from "react";
import BrutalButton from "../Buttons/BrutalButton";
import { TypeAnimation } from "react-type-animation";
import Mascot from "../../assets/kawaii/Mascot.png";
import Star from "../../assets/kawaii/Star.png";
import AvatarVideo from "../../assets/videos/avatarIntroFixed.mp4";
import KawaiiDecoration from "../Decorations/KawaiiDecoration";

function Hero() {
  const videoRef = useRef(null);

const [isIntroPlaying, setIsIntroPlaying] = useState(false);

const playIntro = () => {
  const video = videoRef.current;

  if (!video) return;

  setIsIntroPlaying(true);

  video.currentTime = 0;
  video.muted = false;
  video.volume = 1;

  video.play();
};


const handleVideoEnd = () => {
  const video = videoRef.current;

  if (!video) return;

  video.muted = true;
  setIsIntroPlaying(false);

  video.play();
};
return ( <section
   id="home"
   className="
   scroll-mt-24
   section-panel
   min-h-screen
   bg-white
   relative
   overflow-hidden
   flex
   items-center
   "
 >
{/* Halftone Background */}
<div
className="absolute inset-0 opacity-10"
style={{
backgroundImage:
"radial-gradient(circle, black 1px, transparent 1px)",
backgroundSize: "14px 14px",
}}
/>

```
  {/* Main Content */}
  <div
    className="
    relative
    z-10
    max-w-6xl
    mx-auto
    px-6
    py-20
    w-full
    "
  >
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div>

        {/* Intro Tag */}
        <div
          className="
          brutal-pill
          inline-block
          bg-[#FF2D78]
          text-white
          px-4
          py-2
          rounded-full
          font-bold
          text-sm
          mb-5
          "
        >
          ✦ Hi, I'm
        </div>

        {/* Name */}
        <h1
          className="
          section-title
          text-[52px]
          md:text-[72px]
          leading-none
          mb-4
          "
        >
          Shriyut Janardan
        </h1>

        {/* Role Tag */}
        <div
          className="
          brutal-pill
          inline-block
          bg-[#0057FF]
          text-[#FFE600]
          px-4
          py-2
          rounded-xl
          font-bold
          text-sm
          mb-6
          "
        >
          Machine Learning · Risk Analytics · Fraud Detection
        </div>

        {/* Description */}
        <TypeAnimation
            sequence={[
                "Building machine learning solutions for real-world problems.",
                2000,

                "Transforming raw data into actionable business insights.",
                2000,

                "Exploring fraud detection, risk analytics and FinTech systems.",
                2000,

                "Passionate about Data Science, AI and predictive analytics.",
                2000,
            ]}
            wrapper="p"
            speed={60}
            repeat={Infinity}
            className="
                text-lg
                font-semibold
                leading-8
                max-w-lg
                mb-8
              "
        />
        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <BrutalButton
            href="#projects"
            bgColor="#FFE600"
          >
            See My Work
          </BrutalButton>

          <BrutalButton
            href="#contact"
            bgColor="#FFFFFF"
          >
            Contact Me ♡
          </BrutalButton>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="flex justify-center">

        <div
          className="
          brutal-card
          w-full
          max-w-md
          h-[260px]
          border-dashed
          border-[#FF2D78]
          bg-[#FFF1F7]
          rounded-2xl
          flex
          items-center
          justify-center
          "
        >
          <div
            className="
            brutal-card
            relative
            w-full
            max-w-md
            h-[300px]
            overflow-hidden
            rounded-2xl
            bg-[#FFF1F7]
            "
          >

            <video
              ref={videoRef}
              src={AvatarVideo}
              autoPlay
              muted={!isIntroPlaying}
              loop={!isIntroPlaying}
              playsInline
              onEnded={handleVideoEnd}
              className="
                w-full
                h-full
                object-cover
                rounded-xl
              "
            />
            {!isIntroPlaying && (
              <button
                onClick={playIntro}
                className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                bg-[#FFE600]
                border-[3px]
                border-black
                px-5
                py-2
                rounded-full
                font-bold
                shadow-[4px_4px_0px_#000]
                "
              >
                ▶ Meet Shriyut
              </button>
            )}

          </div>
        </div>

      </div>

    </div>
  </div>

  {/* Decorations */}

  <KawaiiDecoration
    src={Mascot}
    alt="Mascot"
    className="
    top-105
    right-10
    w-50
    float
    "
  />

  <KawaiiDecoration
    src={Star}
    alt="Star"
    className="
    top-5
    -left-5
    w-30
    float
    z-0
    "
  />

  <KawaiiDecoration
  src={Star}
  alt="star"
  className="
    bottom-32
    left-15
    w-15
    rotate-12
    float
  "
/>


<KawaiiDecoration
  src={Star}
  alt="star"
  className="
    top-40
    left-100
    w-20
    -rotate-5
    float
  "
/>

</section>

);
}

export default Hero;











