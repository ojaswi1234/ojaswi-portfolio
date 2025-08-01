"use client"
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './darkButton'
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

export const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <div className="w-full h-full flex justify-around  md:justify-between items-center sm:px-10  z-50 sm:rounded-t-xl">
            <span className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white title ">Ojaswi Bhardwaj</span>
            <nav className="space-x-10 hidden md:flex ">
            <a href="#greeting"    id="navbar1" className="px-3 py-2 text-gray-600 dark:text-white hover:bg-indigo-500 hover:text-white rounded-xl dark:hover:bg-white dark:hover:text-black">About</a>
            <a href="#projects" id="navbar2" className="px-3 py-2 text-gray-600 dark:text-white hover:bg-indigo-500 hover:text-white rounded-xl dark:hover:bg-white dark:hover:text-black">Projects</a>
            <a href="#contact"  id="navbar3" className="px-3 py-2 text-gray-600 dark:text-white hover:bg-indigo-500 hover:text-white rounded-xl dark:hover:bg-white dark:hover:text-black">Contact</a>
            < ModeToggle/>

            </nav>
            <div className=" md:hidden lg:hidden flex place-self-center justify-self-end ">
              <button
                title="Menu"
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() => setDropdownOpen((open) => !open)}
                aria-expanded={dropdownOpen}
                aria-label="Toggle navigation menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-menu-button" viewBox="0 0 16 16">
                  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
                  <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50">
                  <li>
                    <a
                      className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-indigo-500 hover:text-white rounded-md"
                      href="#greeting"
                      onClick={() => setDropdownOpen(false)}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-indigo-500 hover:text-white rounded-md"
                      href="#projects"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-indigo-500 hover:text-white rounded-md"
                      href="#contact"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-indigo-500 hover:text-white rounded-md"
                      href="#projects"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <ModeToggle />
                    </a>
                  </li>
                </ul>
              )}
            </div>
            
        </div>
    </div>
  )
}
