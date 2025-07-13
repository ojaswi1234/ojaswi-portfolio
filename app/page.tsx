"use client";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SkillSection } from "@/components/skillSection";
import { ProjectSection } from "@/components/projectSection";
import { ContactSection } from "@/components/contactus";

export default function Home() {
  const photo1Ref = useRef<HTMLImageElement>(null);
  const photo2Ref = useRef<HTMLImageElement>(null);
  const greetingRef = useRef<HTMLHeadingElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null); // New ref for text container
  const aboutRef = useRef<HTMLParagraphElement>(null);
  const circleRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, SplitText);

    // Batch image morphing animations in a timeline
    const tl = gsap.timeline();
    tl.fromTo(
      photo1Ref.current,
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 1.2, duration: 2, ease: "power2.inOut", delay: 1 }
    ).fromTo(
      photo2Ref.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: "power2.inOut" },
      "<" // start at same time as previous
    );

    // Text animations
    const name = SplitText.create(textContainerRef.current, { type: "words, chars" });
    gsap.from(name.chars, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "steps(5)",
      stagger: 0.07,
      delay: 1,
      onComplete: () => {
        name.revert();
      },
    });
    gsap.fromTo(aboutRef.current, { opacity: 0 }, { opacity: 1, delay: 1.5 });

    // SVG morph
    gsap.to(circleRef.current, {
      duration: 2,
      morphSVG: "#square",
      ease: "power2.inOut",
    });
  }, []);

  return (
    <main className="w-screen h-screen flex p-5 justify-center items-center animated-gradient">
      <div className="w-full h-full rounded-lg md:rounded-xl bg-white shadow-2xl dark:bg-zinc-900 opacity-100 dark:opacity-0 transition-opacity duration-200 overflow-y-auto scrollHidden">
        <NavBar />
        <div className="w-full lg:h-[100vh] flex flex-col gap-24 md:gap-44 sm:justify-evenly items-center sm:px-10 py-5 lg:flex-row-reverse lg:gap-0 mt-28 md:mt-52 lg:mt-0">
          <aside className="w-full md:w-1/3 h-1/2 lg:h-full flex justify-center items-center relative lg:mb-24">
            <svg
              className="size-52 lg:size-96"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
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
              className="shadow-2xl shadow-black dark:shadow-white size-52 sm:size-44 md:size-64 lg:size-96 rounded-full absolute will-change-transform"
              loading="eager"
            />
            <Image
              src="/contributor.png"
              alt="Alternate profile photo"
              width={200}
              height={200}
              ref={photo2Ref}
              className="shadow-2xl shadow-black dark:shadow-white size-52 sm:size-44 md:size-64 lg:size-96 rounded-full absolute will-change-transform"
              loading="lazy"
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
            />
          </aside>
          <aside className="w-full h-full flex flex-col justify-center sm:w-1/2 sm:h-full lg:mb-24" id="greeting">
            <h1
            
              className="text-xl md:text-3xl lg:text-[52px] font-bold text-center text-gray-800 dark:text-gray-200 mt-10 lg:mt-0 md:text-start"
              ref={greetingRef}
            >
              <div ref={textContainerRef}>
                Hey there, This is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-tl from-cyan-500 via-lime-500 to-yellow-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-tl dark:from-red-500 dark:via-yellow-500 dark:to-red-500">
                  Ojaswi !
                </span>
              </div>
            </h1>
            <br />
            <p
              className="font-normal text-center lg:text-left text-xs md:text-xl lg:text-lg text-gray-600 dark:text-gray-400 px-10 md:px-1 lg:p-0"
              ref={aboutRef}
            >
              I am a Full Stack Developer with a passion for building{" "}
              <span className="text-transparent bg-gradient-to-br from-blue-400 to-green-400 bg-clip-text">
                web applications
              </span>
              ,{" "}
              <span className="text-transparent bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text">
                native applications
              </span>
              . I love to create beautiful and functional user interfaces.
            </p>
            <br/>
            <a href="/resume.pdf" download="" className="w-fit p-3  lg:flex-none  rounded-lg bg-gradient-to-r from-cyan-500 to-lime-500 dark:from-red-500 dark:to-yellow-500 text-white dark:text-black font-semibold mt-5 flex place-self-center lg:place-self-start glow  cursor-pointer">My Resume <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-6 ml-2 fill-white dark:fill-black animate-bounce"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg></a>
          </aside>
            
        </div>
        <div className="w-full h-fit bg-zinc-100 dark:bg-zinc-800 p-10 ">
          <h1 className="text-center text-3xl font-sans font-semibold">My Github Stats  & Contribution</h1>
          <img
            src="https://github-readme-stats.vercel.app/api?username=Ojaswi1234&show_icons=true&theme=gruvbox&hide_border=true&count_private=true"
            alt="Ojaswi's GitHub Stats"
            width={500}
            height={200}
            className="mx-auto my-5 border border-2 border-transparent rounded-xl "
          />
        

        </div>
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  );
}