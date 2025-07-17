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
              <aside className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-6">
                <h2 className="text-xl md:text-3xl   bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 bg-clip-text dark:bg-gradient-to-bl dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-transparent dark:text-transparent font-bold">SleepSense</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  A sleep tracking app that helps users monitor their sleep patterns and improve their sleep quality.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link
                    href="https://github.com/ojaswi1234/PHP_PROJECT.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-white dark:text-black font-medium transition-colors duration-200 px-4 py-2 rounded-lg text-center"
                  >
                    GitHub
                  </Link>
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
              <aside className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-6">
                <h2 className="text-xl md:text-3xl   bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 bg-clip-text dark:bg-gradient-to-bl dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-transparent dark:text-transparent font-bold">Just Notes</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  A web extension that allows users to take quick notes and save them for later reference, enhancing productivity and organization.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link
                    href="https://github.com/ojaswi1234/notes_maker_ext.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-white dark:text-black font-medium transition-colors duration-200 px-4 py-2 rounded-lg text-center "
                  >
                    GitHub
                  </Link>
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
              <aside className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-6">
                <h2 className="text-xl md:text-3xl   bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 bg-clip-text dark:bg-gradient-to-bl dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-transparent dark:text-transparent font-bold"> 2 Player Chess Game</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  A real-time multiplayer chess game that allows two players to compete against each other, featuring a user-friendly interface and smooth gameplay.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link
                    href="https://github.com/ojaswi1234/Sheryians_backend_course/tree/main/D10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-white dark:text-black font-medium transition-colors duration-200 px-4 py-2 rounded-lg text-center"
                  >
                    GitHub
                  </Link>
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
              <aside className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-6">
                <h2 className="text-xl md:text-3xl   bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 bg-clip-text dark:bg-gradient-to-bl dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-transparent dark:text-transparent font-bold">Movie Spot</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  A movie discovery platform that allows users to search for movies, view details, and get recommendations based on their preferences. (Integrating AI for personalized recommendations)
                </p>
                <div className="flex gap-4 mt-4">
                  <Link
                    href="https://github.com/ojaswi1234/MOVIE_SPOT.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-white dark:text-black font-medium transition-colors duration-200 px-4 py-2 rounded-lg text-center"
                  >
                    GitHub
                  </Link>
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
              <aside className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-6">
                <h2 className="text-xl md:text-3xl   bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 bg-clip-text dark:bg-gradient-to-bl dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-transparent dark:text-transparent font-bold">To/Do</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  A simple and intuitive to-do list flutter application that helps users manage their tasks efficiently, with features like task categorization and reminders.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link
                    href="https://github.com/ojaswi1234/TO-DO-app-flutter-.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-bl from-cyan-500 via-lime-500 to-yellow-500 dark:from-red-500 dark:via-yellow-500 dark:to-red-500 text-white dark:text-black font-medium transition-colors duration-200 px-4 py-2 rounded-lg text-center"
                  >
                    GitHub
                  </Link>
                </div>
              </aside>
            </div>
          </div>
          {/* Placeholder for additional project cards */}
          {/* Add more project cards here with similar structure */}
        </div>
      </div>
    </section>
  );
};