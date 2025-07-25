"use client";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SkillSection } from "@/components/skillSection";
import { ProjectSection } from "@/components/projectSection";
import { ContactSection } from "@/components/contactus";
import { TerminalSection } from "@/components/terminalSection";

export default function Home() {
  const photo1Ref = useRef<HTMLImageElement>(null);
  const photo2Ref = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLParagraphElement>(null);
  const circleRef = useRef<SVGPathElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const termDivRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(isVisible);

  // Sync ref with latest state
  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, SplitText);

    const tl = gsap.timeline();
    tl.fromTo(
      photo1Ref.current,
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 1.2, duration: 2, ease: "power2.inOut", delay: 1 }
    ).fromTo(
      photo2Ref.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: "power2.inOut" },
      "<"
    );

    const split = SplitText.create(textContainerRef.current, { type: "words, chars" });
    gsap.from(split.chars, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "steps(6)",
      stagger: 0.07,
      delay: 1,
      onComplete: () => split.revert(),
    });

    gsap.fromTo(aboutRef.current, { opacity: 0 }, { opacity: 1, delay: 1.5 });
    gsap.to(circleRef.current, { duration: 2, morphSVG: "#square", ease: "power2.inOut" });
    gsap.fromTo(toggleRef.current, {opacity: 0, x: 200}, {opacity: 1,x: 0, duration:2,  delay: 2, ease: "bounce.out"});

    const handleClick = () => {
      setIsVisible(prev => {
        const next = !prev;
        isVisibleRef.current = next;
        return next;
      });
      
    };

    const btn = toggleRef.current;
    if (btn) btn.addEventListener("click", handleClick);
    return () => {
      if (btn) btn.removeEventListener("click", handleClick);
      
    };
  
  }, []);

  const close = () => {
    setIsVisible(false);
  };

  return (
    <main className="w-screen h-screen flex p-5 justify-center items-center animated-gradient overflow-hidden ">
      <div className="w-full h-full rounded-lg bg-white dark:bg-zinc-900 shadow-2xl overflow-y-auto scrollHidden transition-opacity">
        <NavBar />
        <div className="w-full lg:h-[100vh] flex flex-col gap-24 md:gap-44 sm:justify-evenly items-center sm:px-10 py-5 lg:flex-row-reverse lg:gap-0 mt-28 md:mt-52 lg:mt-0">
          {/* Profile & animation aside */}
          <aside className="w-full md:w-1/3 h-1/2 lg:h-full flex justify-center items-center relative lg:mb-24">
            <svg className="size-52 lg:size-96" viewBox="0 0 100 100" aria-hidden="true">
              <path
                ref={circleRef}
                id="circle"
                d="M50 10 A40 40 0 1 1 49.999 10"
                fill="none"
                stroke="transparent"
                strokeWidth="2"
              />
            </svg>
            <Image
              src="/1718216875541.jpg"
              alt="Profile photo of Ojaswi"
              width={200}
              height={200}
              ref={photo1Ref}
              className="rounded-full shadow-2xl shadow-black dark:shadow-white size-52 sm:size-44 md:size-64 lg:size-96 absolute will-change-transform will-change-opacity"
              loading="eager"
            />
            <Image
              src="/contributor.png"
              alt="Alternate profile photo"
              width={200}
              height={200}
              ref={photo2Ref}
              className="rounded-full shadow-2xl shadow-black dark:shadow-white size-52 sm:size-44 md:size-64 lg:size-96 absolute will-change-transform will-change-opacity"
              loading="lazy"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
            />
          </aside>

          {/* Greeting & toggle */}
          <aside className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start">
            <h1 ref={textContainerRef} className="text-xl md:text-3xl lg:text-[52px] font-bold text-center lg:text-start text-gray-800 dark:text-gray-200 mt-10 mb-3 lg:-mt-14">
              Hey there, This is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tl from-cyan-500 via-lime-500 to-yellow-500 dark:from-red-500 dark:via-yellow-500 dark:to-red-500">
                Ojaswi !
              </span>
            </h1>
            <p
  ref={aboutRef}
  className="font-normal text-center lg:text-left text-xs md:text-xl lg:text-lg mt-3 text-gray-600 dark:text-gray-400 px-10 md:px-1 lg:p-0"
>
  I'm a Full Stack Developer crafting{" "}
  <span className="text-transparent bg-gradient-to-br from-blue-400 to-green-400 bg-clip-text">
    web
  </span>{" "}
  &{" "}
  <span className="text-transparent bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text">
    mobile
  </span>{" "}
  apps with intuitive UI.<br/>Explore my{" "}
  <span className="text-transparent bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text">
    portfolio
  </span>{" "}
  or try the{" "}
  <span className="text-transparent bg-gradient-to-br from-teal-400 to-blue-400 bg-clip-text">
    shell
  </span>
  !
</p>
            <button
              ref={toggleRef}
              className="w-fit p-2 lg:p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-lime-500 dark:from-red-500 dark:to-yellow-500 text-white dark:text-black mt-5 glow cursor-pointer flex justify-center items-center"
            >
              Open Shell
              <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-2 size-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 8H14V6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H16V14H17.5C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5V16H10V17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14H8V10H6.5C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5V8ZM8 8V6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8H8ZM8 16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19C7.32843 19 8 18.3284 8 17.5V16ZM16 8H17.5C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5V8ZM16 16V17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16H16ZM10 10V14H14V10H10Z" />
              </svg>
            </button>
          </aside>
        </div>

        {/* Terminal Section */}
        
        <div
          ref={termDivRef}
          className={`w-full h-fit bg-transparent p-10 overflow-hidden flex flex-col justify-center items-center terminal-div transition-all duration-500 fixed z-50  top-24   ${
            isVisible ? "block" : "hidden"
          }`}
        >

          <div  className="bg-zinc-950 lg:w-4/5 overflow-hidden p-2 rounded-t-2xl"> 
            <button onClick={close} className="close-btn w-3 h-3 cursor-pointer flex justify-self-start overflow-hidden bg-red-500 rounded-full flex justify-center items-center text-xs  text-transparent hover:text-gray-700"><span className="flex justify-self-center place-self-center mb-1">x</span></button>
          </div>
        
          <TerminalSection />
        </div>

        {/* Other Sections */}
        <div className="w-full h-fit bg-zinc-100 dark:bg-zinc-800 p-10">
          <h1 className="text-center text-3xl font-semibold">My Github Stats & Contribution</h1>
          <img
            src="https://github-readme-stats.vercel.app/api?username=Ojaswi1234&show_icons=true&theme=gruvbox&hide_border=true&count_private=true"
            alt="GitHub Stats"
            width={500}
            height={200}
            className="mx-auto my-5 rounded-xl border border-transparent"
          />
        </div>

        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
);
}
