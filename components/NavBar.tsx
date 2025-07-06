"use client"
import React, { useEffect } from 'react'
import { ModeToggle } from './darkButton'
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

export const NavBar = () => {
  useEffect(() => {
    gsap.fromTo(".w-full", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo("#navbar1", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5});
    gsap.fromTo("#navbar2", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.6});
    gsap.fromTo("#navbar3", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.7});

    gsap.registerPlugin(SplitText);

    const name = SplitText.create(".title", {type: "words, chars"});

    gsap.from(name.chars, {
      duration: 0.5,
      opacity: 0,
      y: 50,
      ease: "back.out(1.7)",
      stagger: 0.05,
      delay: 1,
      onComplete: () => {
        name.revert();
      }
    });
    
  }, []);
  return (
    <div className="w-full h-16 px-0.5 sticky top-0 z-50 bg-transparent backdrop-blur-xl flex justify-between items-center sm:px-10 sm:rounded-t-xl">
        <div className="w-full h-full flex justify-center md:justify-between items-center sm:px-10  z-50 sm:rounded-t-xl">
            <span className=" text-lg md:text-2xl font-bold text-gray-800 dark:text-white title ">Ojaswi Bhardwaj</span>
            <nav className="space-x-10 hidden md:flex">
            <a href="#about"    id="navbar1" className="px-3 py-2 text-gray-600 dark:text-white hover:bg-indigo-500 hover:text-white rounded-xl dark:hover:bg-white dark:hover:text-black">About</a>
            <a href="#projects" id="navbar2" className="px-3 py-2 text-gray-600 dark:text-white hover:bg-indigo-500 hover:text-white rounded-xl dark:hover:bg-white dark:hover:text-black">Projects</a>
            <a href="#contact"  id="navbar3" className="px-3 py-2 text-gray-600 dark:text-white hover:bg-indigo-500 hover:text-white rounded-xl dark:hover:bg-white dark:hover:text-black">Contact</a>
            < ModeToggle/>
            </nav>
        </div>
    </div>
  )
}
