"use client";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SkillSection } from "@/components/skillSection";


export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, SplitText);

    // Image morphing effect: Cross-fade and scale between two images
    gsap.fromTo(
      "#myphoto",
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 1.2, duration: 2, ease: "power2.inOut", delay: 1 }
    );
    gsap.fromTo(
      "#myphoto2",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: "power2.inOut", delay: 1 }
    );

    // Text animations (unchanged)
    const name = SplitText.create("#greeting", { type: "words, chars" });
    gsap.from(name.chars, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "steps(5)",
      stagger: 0.05,
      delay: 1,
      onComplete: () => {
        name.revert();
      },
    });
    gsap.fromTo("#about", { opacity: 0 }, { opacity: 1, delay: 1.5 });

    // Optional: Keep MorphSVGPlugin for SVG animations if needed
    gsap.to("#circle", {
      duration: 2,
      morphSVG: "#square",
      ease: "power2.inOut",
    });
  }, []);

  return (
    <main className="w-screen h-screen flex p-5 justify-center items-center animated-gradient">
      <div className="w-full h-full rounded-xl bg-white shadow-2xl dark:bg-accent overflow-y-auto scrollHidden">
        <NavBar />
        <div className=" w-full  flex flex-col gap-24 md:gap-44 sm:justify-evenly items-center sm:px-10 py-5 lg:flex-row-reverse lg:gap-0 mt-28 md:mt-52 lg:mt-44 lg:pb-64">
          <aside className="w-full sm:w-1/3 h-full flex justify-center items-center relative">
            {/* SVG for MorphSVGPlugin (optional, kept for consistency) */}
            <svg
              className="absolute size-52  lg:size-96"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path
                id="circle"
                d="M50 10 A40 40 0 1 1 49.999 10"
                fill="none"
                stroke="transparent"
                strokeWidth="2"
              />
              
            </svg>
            {/* First Image */}
            <Image
              src="/1718216875541.jpg"
              alt="Profile photo of Ojaswi"
              width={200}
              height={200}
              id="myphoto"
              className="shadow-2xl shadow-black dark:shadow-white size-52 sm:size-44 md:size-64 lg:size-96 rounded-full absolute"
            />
            {/* Second Image for morphing effect */}
            <Image
              src="/contributor.png" // Replace with your second image path
              alt="Alternate profile photo"
              width={200}
              height={200}
              id="myphoto2"
              className="shadow-2xl shadow-black dark:shadow-white size-52 sm:size-44 md:size-64 lg:size-96 rounded-full absolute"
            />
          </aside>
          <aside className="w-full h-1/2 sm:w-1/2 sm:h-full ">
            <h1
              className="text-xl md:text-3xl  lg:text-[52px] font-bold text-center text-gray-800 dark:text-gray-200 mt-10  lg:mt-0 z-50 md:text-start"
              id="greeting"
            >
              Hey there, This is <span className="text-blue-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-tl dark:from-red-500 dark:via-yellow-500 dark:to-yellow-500"> Ojaswi</span>
              <span className="text-blue-500  dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-red-500 dark:via-yellow-500 dark:to-yellow-500">!</span>
            </h1>
            <br />
            <p
              className="font-normal text-center  lg:text-left text-xs md:text-xl  lg:text-lg text-gray-600 dark:text-gray-400 px-10 md:px-1 lg:p-0"
              id="about"
            >
              I am a Full Stack Developer with a passion for building <span className="text-transparent bg-gradient-to-br from-blue-400 to-green-400 bg-clip-text">web applications</span>,<span className="text-transparent bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text">native applications</span>.
              I love to create beautiful and functional user interfaces.
            </p>
          </aside>
        </div>
        <SkillSection />

      </div>
    </main>
  );
}