import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Nav = ({ isActive }) => {
  useGSAP(() => {
    {
      isActive && gsap.to();
    }
  });

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div
      className={`fixed right-0 bg-green-300 h-full w-[400px] mx-auto transition-all ease-[cubic-bezier(0.76,0,0.24,1)] duration-600   ${
        isActive ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }  `}
    >
      <div className="  h-full flex flex-col items-center justify-center p-20 uppercase font-bold text-5xl tracking-tighter gap-3">
        {navItems.map((item, i) => (
          <a key={i} href={item.href}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
