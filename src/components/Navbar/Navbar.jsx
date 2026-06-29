import logo from "../../assets/branding/logo.png";
import useActiveSection from "../../hooks/useActiveSection";
function Navbar() {
  const activeSection = useActiveSection();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFE600] border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

  <div
    className="
    w-12
    h-12

    rounded-full

    bg-white

    border-[3px]
    border-black

    shadow-[3px_3px_0_black]

    flex
    items-center
    justify-center

    overflow-hidden

    hover:scale-110
    hover:rotate-3

    transition-all
    duration-300
    "
  >

    <img
      src={logo}
      alt="Shriyut Logo"
      className="w-30 h-30 object-contain"
    />

  </div>

  <h1
    className="
    text-2xl

    font-black

    tracking-wide

    leading-none
    "
  >
    SHRIYUT
    <span className="text-[#8B5CF6]">.DEV</span>
  </h1>

</div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-4 font-medium">

          {[
            "home",
            "about",
            "journey",
            "skills",
            "projects",
            "achievements",
            "contact",
          ].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`
                  px-4
                  py-2
                  rounded-full
                  transition-all
                  duration-300
                  font-bold

                  ${
                    activeSection === section
                      ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                      : "hover:bg-black hover:text-white"
                  }
                `}
              >
                {section.charAt(0).toUpperCase() +
                  section.slice(1)}
              </a>
            </li>
          ))}

        </ul>

        {/* Resume Button */}
        <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
        bg-pink-500
        text-white
        px-6
        py-3
        rounded-xl
        border-[3px]
        border-black
        shadow-[5px_5px_0_black]
        font-bold
        hover:translate-y-[-2px]
        transition
        "
      >
        Resume ↓
      </a>

      </div>
    </nav>
  );
}

export default Navbar;