import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export const ProjectSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-zinc-900" id="projects">
      <div className="w-full max-w-7xl flex flex-col items-center gap-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          My Projects
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-300 text-center max-w-2xl">
          Explore some of the projects I&apos;ve worked on, showcasing my skills in building innovative and user-focused solutions.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Project Card 1: SleepSense */}
          <div className="w-full bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
            <div className="flex flex-col md:flex-row">
              <aside className="w-full md:w-1/2 flex justify-center items-center p-4">
                <div className="relative w-full aspect-square max-w-xs overflow-hidden rounded-lg">
                  <Image
                    src="/projects/sleepsense.png"
                    alt="SleepSense project preview"
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </aside>
              <aside className="w-full md:w-1/2 flex flex-col justify-center gap-3 p-6">
                <h2 className="text-xl md:text-3xl   bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 bg-clip-text dark:bg-gradient-to-bl dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-transparent dark:text-transparent font-bold">SleepSense</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Objective: Help users track sleep patterns to improve rest quality.
                </p>
                <p className="text-xs md:text-sm text-gray-500">Stack: PHP,MySQL,  JavaScript, Chart.js, Tailwind</p>
                <p className="text-xs md:text-sm text-gray-500">Role: Full‑stack design & development</p>
                <p className="text-xs md:text-sm text-gray-500">Outcome: Interactive insights and daily/weekly trends.</p>
                <div className="flex gap-3 pt-2">
                  <Link className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500" href="#" target="_blank" rel="noreferrer">Live Demo</Link>
                  <Link className="px-3 py-2 rounded-md border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30" href="https://github.com/ojaswi1234/PHP_PROJECT.git" target="_blank" rel="noreferrer noopener">GitHub</Link>
                </div>
              </aside>
            </div>
          </div>
           <div className="w-full bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
            <div className="flex flex-col md:flex-row">
              <aside className="w-full md:w-1/2 flex justify-center items-center p-4">
                <div className="relative w-full aspect-square max-w-xs overflow-hidden rounded-lg">
                  <Image
                    src="/projects/notes.png"
                    alt="Just Notes web Extension project preview"
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </aside>
              <aside className="w-full md:w-1/2 flex flex-col justify-center gap-3 p-6">
                <h2 className="text-xl md:text-3xl   bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 bg-clip-text dark:bg-gradient-to-bl dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-transparent dark:text-transparent font-bold">Just Notes</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Objective: Capture quick notes from anywhere in the browser.
                </p>
                <p className="text-xs md:text-sm text-gray-500">Stack: MS Edge Extension, JavaScript, manifest.json </p>
                <p className="text-xs md:text-sm text-gray-500">Role: Extension architecture & UX</p>
                <p className="text-xs md:text-sm text-gray-500">Outcome: Lightweight, offline‑ready note taking.</p>
                <div className="flex gap-3 pt-2">
                  <Link className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500" href="https://microsoftedge.microsoft.com/addons/detail/just-notes/mddmihmmmhkmllhcdjhlfhnpgjngdild?hl=en-US" target="_blank" rel="noreferrer">Live Demo</Link>
                  <Link className="px-3 py-2 rounded-md border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30" href="https://github.com/ojaswi1234/notes_maker_ext.git" target="_blank" rel="noreferrer noopener">GitHub</Link>
                </div>
              </aside>
            </div>
          </div>
           <div className="w-full bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
            <div className="flex flex-col md:flex-row">
              <aside className="w-full md:w-1/2 flex justify-center items-center p-4">
                <div className="relative w-full aspect-square max-w-xs overflow-hidden rounded-lg">
                  <Image
                    src="/projects/chess.png"
                    alt="chess preview"
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </aside>
              <aside className="w-full md:w-1/2 flex flex-col justify-center gap-3 p-6">
                <h2 className="text-xl md:text-3xl   bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 bg-clip-text dark:bg-gradient-to-bl dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-transparent dark:text-transparent font-bold"> 2 Player Chess Game</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Objective: Real‑time multiplayer gameplay in the browser.
                </p>
                <p className="text-xs md:text-sm text-gray-500">Stack: React, Node.js, Socket.IO</p>
                <p className="text-xs md:text-sm text-gray-500">Role: Realtime comms & game state</p>
                <p className="text-xs md:text-sm text-gray-500">Outcome: Smooth turns and presence indicators.</p>
                <div className="flex gap-3 pt-2">
                  <Link className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500" href="#" target="_blank" rel="noreferrer">[Status: Updating]</Link>
                  <Link className="px-3 py-2 rounded-md border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30" href="https://github.com/ojaswi1234/chess-game-with-chatting.git" target="_blank" rel="noreferrer noopener">GitHub</Link>
                </div>
              </aside>
            </div>
          </div>
           <div className="w-full bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
            <div className="flex flex-col md:flex-row">
              <aside className="w-full md:w-1/2 flex justify-center items-center p-4">
                <div className="relative w-full aspect-square max-w-xs overflow-hidden rounded-lg">
                  <Image
                    src="/projects/moviespot.png"
                    alt="Movie Spot project preview"
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </aside>
              <aside className="w-full md:w-1/2 flex flex-col justify-center gap-3 p-6">
                <h2 className="text-xl md:text-3xl   bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 bg-clip-text dark:bg-gradient-to-bl dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-transparent dark:text-transparent font-bold">Movie Spot</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Objective: Discover films and get AI‑powered suggestions.
                </p>
                <p className="text-xs md:text-sm text-gray-500">Stack: Django, TMDB API, Edge functions, AI Recommendation</p>
                <p className="text-xs md:text-sm text-gray-500">Role: Integration & UX</p>
                <p className="text-xs md:text-sm text-gray-500">Outcome: Faster discovery and better picks.</p>
                <div className="flex gap-3 pt-2">
                  <Link className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500" href="#" target="_blank" rel="noreferrer">[Status: Updating]</Link>
                  <Link className="px-3 py-2 rounded-md border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30" href="https://github.com/ojaswi1234/MovieSpot" target="_blank" rel="noreferrer noopener">GitHub</Link>
                </div>
              </aside>
            </div>
          </div>

            <div className="w-full bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
            <div className="flex flex-col md:flex-row">
              <aside className="w-full md:w-1/2 flex justify-center items-center p-4">
                <div className="relative w-full aspect-square max-w-xs overflow-hidden rounded-lg">
                  <Image
                    src="/projects/todo.png"
                    alt="TODO Flutter app preview"
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </aside>
              <aside className="w-full md:w-1/2 flex flex-col justify-center gap-3 p-6">
                <h2 className="text-xl md:text-3xl   bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 bg-clip-text dark:bg-gradient-to-bl dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-transparent dark:text-transparent font-bold">To/Do</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Objective: Simple, delightful task management on mobile.
                </p>
                <p className="text-xs md:text-sm text-gray-500">Stack: Flutter, Dart</p>
                <p className="text-xs md:text-sm text-gray-500">Role: UI/UX & local storage</p>
                <p className="text-xs md:text-sm text-gray-500">Outcome: Fast offline experience with reminders.</p>
                <div className="flex gap-3 pt-2">
                
                  <Link className="px-3 py-2 rounded-md border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30" href="https://github.com/ojaswi1234/TO-DO-app-flutter-.git" target="_blank" rel="noreferrer">GitHub</Link>
                </div>
              </aside>
            </div>
          </div>
          {/* Placeholder for additional project cards */}
      
        </div>
      </div>
    </section>
  );
};