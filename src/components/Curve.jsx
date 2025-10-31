import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

const Curve = ({ isActive }) => {
  const pathRef = useRef(null);
  const timeline = useRef(null);
  const intialPath = `M100 0 L100 ${window.innerHeight} Q0 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  useGSAP(() => {
    gsap.set(pathRef.current, { attr: { d: targetPath } });
    timeline.current=gsap.timeline({paused:true})
    timeline.current.to(pathRef.current,{
        duration:0.8,
        morphSVG:{
            shape:intialPath,
            type:"rotational"
        },
           ease: "power2.out",
           
           


    })
  },[]);
  useEffect(() => {
    if (!timeline.current) return;
    if (isActive) {
      timeline.current.play();
    } else {
      timeline.current.reverse();
    }
  }, [isActive]);

  return (
    <svg
      stroke="none"
      fill="#7bf1a8"
      className={`absolute top-0 right-[399px] w-[100px] h-full transition-all ease-[cubic-bezier(0.76,0,0.24,1)] duration-1000  ${isActive ? "translate-x-0 opacity-100" : "translate-x-[400px] opacity-100"}`}
    >
      <path ref={pathRef} />
    </svg>
  );
};

export default Curve;
