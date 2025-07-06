import React, { useState } from 'react'
import NavButton from './ui/navbutton'
import Card from './ui/card'

export const SkillSection = () => {
  const [activeSection, setActiveSection] = useState('langlibs');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };
  
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-10 p-5 ">
      
      <div className="w-full flex flex-col justify-center items-center ">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-black dark:text-gray-100 mb-5">
        Skills  & Technologies
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-300 mb-10 text-center px-5">
          Here are some of the skills and technologies I have worked with.
        </p>
         <nav className="w-fit max-w-[90vw] min-w-[300px] h-fit  flex flex-row flex-wrap justify-center items-center justify-self-center place-self-center  gap-2 border-2 rounded-full py-3 px-4 mx-auto">
            <NavButton name="Lang/Libs" onClick={() => handleSectionChange('langlibs')} />
            <NavButton name="Frameworks" onClick={() => handleSectionChange('frameworks')} />
            <NavButton name="DataBase" onClick={() => handleSectionChange('database')} />
            <NavButton name="App Dev" onClick={() => handleSectionChange('appdev')} />
            <NavButton name="DevOps Tools" onClick={() => handleSectionChange('devops')} />
        </nav>

        <div className="w-[90vw] h-fit flex justify-center items-center mt-8 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-10 transition-all duration-300 ease-in-out">
          <div id="langlibs" className={`w-full h-fit grid place-self-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:col-span-1 justify-items-center justify-center gap-5 items-center transition-opacity duration-200 ${activeSection === 'langlibs' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <Card name="HTML" src="/skills/HTML5.png" st="sepia-100 saturate-250 dark:invert-0 dark:sepia-0 dark:saturate-0" />
            <Card name="CSS" src="/skills/CSS3.png" st=""/>
            <Card name="GSAP" src="/skills/gsap.png" st="invert dark:invert-0"/>

            <Card name="JavaScript" src="/skills/JavaScript.png" st="invert sepia-75 saturate-150 dark:invert-0 dark:sepia-0 dark:saturate-0"/>

            <Card name="TypeScript" src="/skills/Java.png" st="" />
            <Card name="React" src="/skills/react.png" st=""/>
            <Card name="SocketIO" src="/skills/Socket.io.png" st=""/>

          </div>
          <div id="frameworks" className={`w-full h-fit grid place-self-center grid-cols-1 lg:grid-cols-4 lg:col-span-10 justify-items-center justify-center gap-8 items-center transition-opacity duration-200 ${activeSection === 'frameworks' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <Card name="Next.js" src="/skills/Next.js.png" st="invert dark:invert-0"></Card>
            <Card name="Node.js" src="/skills/Node.js.png" st=""></Card>
            <Card name="Express.js" src="/skills/Express.png" st=""></Card>
            <Card name="Django" src="/skills/Django.png" st="invert dark:invert-0"></Card>
            <Card name="Tailwind CSS" src="/skills/tailwind.png" st=""></Card>

          </div>
          <div id="database" className={`w-full h-fit grid place-self-center grid-cols-1 lg:grid-cols-4 lg:col-span-1 justify-items-center justify-center gap-5 items-center transition-opacity duration-200 ${activeSection === 'database' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <Card name="MongoDB" src="/skills/mongodb.png" st=""></Card>
            
            <Card name="MySQL" src="/skills/mysql.png" st=""></Card>
           
          </div>
          <div id="appdev" className={`w-full h-fit grid place-self-center grid-cols-1 lg:grid-cols-4 lg:col-span-1 justify-items-center justify-center gap-5 items-center transition-opacity duration-200 ${activeSection === 'appdev' ? 'opacity-100' : 'opacity-0 hidden'}`}>
           <Card name="Flutter" src="/skills/flutter.png" st=""></Card>
          </div>
          <div id="devops" className={`w-full h-fit grid place-self-center grid-cols-1 lg:grid-cols-4 lg:col-span-1 justify-items-center justify-center gap-5 items-center transition-opacity duration-200 ${activeSection === 'devops' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <Card name="VS Code" src="/skills/vs.png" st=""></Card>
            <Card name="Android Studio" src="/skills/android.png" st=""></Card>
            <Card name="Git" src="/skills/git.png" st=""></Card>
            <Card name="GitHub" src="/skills/github.png" st=""></Card>
           
          </div>
        </div>
       
      </div>
    </div>
  )
}