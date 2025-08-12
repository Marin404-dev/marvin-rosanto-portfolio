import React from 'react'

export default function Footer() {
  return (
    <div className='backdrop-blur-[4px] w-full h-5 p-5 flex justify-center items-center text-gray-900 dark:text-white text-sm'>
      <p className='text-center'>
        &copy; {new Date().getFullYear()} Marvin Rosanto. All rights reserved </p>
    </div>
  )
}
