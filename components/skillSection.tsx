import React from 'react'
import Card from './ui/card'


export const SkillSection = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-10 p-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200">
        Skills
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 content-center gap-5 justify-items-center lg:px-44">
        <Card name="HTML" />
        <Card name="CSS" />
        <Card name="JavaScript" />
        <Card name="React" />
        <Card name="Node.js" />
        <Card name="Express.js" />
        <Card name="MongoDB" />
        <Card name="Next.js" />
        <Card name="Tailwind CSS" />
        <Card name="Git" />
        <Card name="GitHub" />

       
      </div>
    </div>
  )
}

