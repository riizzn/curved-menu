import { useState } from "react";
import Nav from "./Nav";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const lineClasses =
    "block h-px w-[40%] bg-white mx-auto relative transition-transform duration-300 origin-center";

  return (
    <header>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="fixed right-0 m-5 z-10 w-20 h-20 rounded-full bg-[#455CE9] cursor-pointer flex items-center justify-center"
      >
        <div className="w-full">
          <div
            className={`${lineClasses} ${
              isActive ? "rotate-45 top-0" : "top-[-5px]"
            }`}
          ></div>
          <div
            className={`${lineClasses} ${
              isActive ? "-rotate-45 top-0" : "top-[5px]"
            }`}
          ></div>
        </div>
      </div>
     <Nav isActive={isActive}/>
    </header>
  );
}

// transition-transform: This tells the browser, "Only animate the transform property." The transform property includes things like rotate (rotating), scale (resizing), and translate (moving).
