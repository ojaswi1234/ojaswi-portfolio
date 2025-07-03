import React from 'react'
import NavButton from './ui/navbutton'
import Card from './ui/card'




export const SkillSection = () => {
  
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-10 p-5 ">
      
      <div className="w-full flex flex-col justify-center items-center ">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-black dark:text-gray-100 mb-5">
        Skills  & Technologies
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-300 mb-10 text-center px-5">
          Here are some of the skills and technologies I have worked with.
        </p>
        <nav className="w-[83vw] h-12  lg:w-[65vw] lg:h-14 flex flex-row  flex-nowrap justify-evenly justify-items-center items-center border-2 rounded-full py-5 px-2 lg:py-8 ">
          <NavButton name="Lang/Libs"/>
          <NavButton name="Frameworks"/>
          <NavButton name="DataBase"/>
          <NavButton name="App Dev"/>
          <NavButton name="DevOps Tools"/>
        </nav>

        <div className="w-[90vw] h-fit flex justify-center items-center  mt-8 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-10">
          <div id="langlibs" className="w-full h-fit grid place-self-center grid-cols-1 lg:grid-cols-4 lg:col-span-1 justify-items-center justify-center gap-5 items-center ">
            <Card name="HTML" src="/skills/HTML5.png" st="" />
            <Card name="CSS" src="/skills/CSS3.png" st=""/>
            <Card name="Tailwind CSS" src="/skills/tailwind.png" st=""/>

            <Card name="JavaScript" src="/skills/JavaScript.png" st=""/>

            <Card name="TypeScript" src="/skills/Java.png" st="" />
            <Card name="React" src="/skills/react.png" st=""/>

          </div>
          <div id="frameworks" className="w-full h-fit grid place-self-center grid-cols-1 lg:grid-cols-4 lg:col-span-1 justify-items-center justify-center gap-5 items-center hidden">
          
          </div>
          <div id="database" className="w-full h-fit grid place-self-center grid-cols-1 lg:grid-cols-4 lg:col-span-1 justify-items-center justify-center gap-5 items-center hidden">
          
          
          </div>
          <div id="appdev" className="w-full h-fit grid place-self-center grid-cols-1 lg:grid-cols-4 lg:col-span-1 justify-items-center justify-center gap-5 items-center hidden">
         
          </div>
          <div id="devops" className="w-full h-fit grid place-self-center grid-cols-1 lg:grid-cols-4 lg:col-span-1 justify-items-center justify-center gap-5 items-center hidden">
         
          </div>
        </div>
       
      </div>
    </div>
  )
}