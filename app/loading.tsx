import React from 'react'

export default function Loading() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white text-black dark:bg-black dark:text-white">
      {/* Spinner */}
      <div className="relative mb-4">
        <div className="size-16 rounded-full bg-gradient-to-tr from-cyan-500 via-lime-500 to-yellow-500 dark:from-red-500 dark:via-yellow-500 dark:to-red-500 animate-spin p-[3px]">
          <div className="size-full rounded-full bg-white dark:bg-black" />
        </div>
      </div>
      <p className="text-sm opacity-80" aria-live="polite" aria-busy="true">
        Loading…
      </p>
    </div>
  )
}
