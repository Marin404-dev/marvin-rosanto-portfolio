import React from 'react'
import img from '../assets/marvin.jpg'
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section className='w-full min-h-screen flex flex-col justify-center items-center bg-transparent text-gray-900 dark:text-white px-4 py-16' id='work'>
      <div>
        <h2 className="text-4xl font-bold mb-2 text-center">Projects / Work I have done</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
          Here are some of the projects I've worked on, showcasing my skills in web development and full stack technologies.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-5xl w-full'>
        <div className='rounded-xl border bg-card text-card-foreground shadow flex flex-col'>
          <div className='flex flex-col space-y-1.5 p-6'>
            <a href="/">
              <img src={img} alt="" class="h-100 w-full object-cover object-top rounded-md" /></a>
          </div>
          <div className='p-6 pt-0 flex flex-col gap-2'>
            <h3>Test </h3>
            <div className='prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert'>
              <p className='text-sm text-muted-foreground'>
                A project showcasing my skills in web development, focusing on responsive design and user experience.
              </p>
            </div>
          </div>
          <div className='p-6 pt-0 flex h-full flex-col items-start justify-between gap-4'>
            <div className='mt-2 flex flex-wrap gap-1'>
              <div className='inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white hover:bg-black/80 
                            dark:bg-white dark:text-black dark:hover:bg-white/80 px-1 py-0 text-[10px]'>
                Test
              </div>
              <div className='inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white hover:bg-black/80 
                            dark:bg-white dark:text-black dark:hover:bg-white/80 px-1 py-0 text-[10px]'>
                Test
              </div>
            </div>

            <div className='flex flex-row flex-wrap items-start gap-1'>
              <a href="." className="inline-flex items-center gap-2 rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 px-2 py-1 text-[10px]">
                <FaGithub className="w-5 h-5" />
                <p>Test</p>
              </a>
              <a href="." className="inline-flex items-center gap-2 rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 px-2 py-1 text-[10px]">
                <FaGithub className="w-5 h-5" />
                <p>Test</p>
              </a>
            </div>
          </div>
        </div>

        <div className='rounded-xl border bg-card text-card-foreground shadow flex flex-col'>
          <div className='flex flex-col space-y-1.5 p-6'>
            <a href="/">
              <img src={img} alt="" class="h-100 w-full object-cover object-top rounded-md" /></a>
          </div>
          <div className='p-6 pt-0 flex flex-col gap-2'>
            <h3>Test  s</h3>
            <div className='prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert'>
              <p className='text-sm text-muted-foreground'>
                A project showcasing my skills in web development, focusing on responsive design and user experience.
              </p>
            </div>
          </div>
          <div className='p-6 pt-0 flex h-full flex-col items-start justify-between gap-4'>
            <div className='mt-2 flex flex-wrap gap-1'>
              <div className='inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white hover:bg-black/80 
                            dark:bg-white dark:text-black dark:hover:bg-white/80 px-1 py-0 text-[10px]'>
                Test
              </div>
              <div className='inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white hover:bg-black/80 
                            dark:bg-white dark:text-black dark:hover:bg-white/80 px-1 py-0 text-[10px]'>
                Test
              </div>
            </div>

            <div className='flex flex-row flex-wrap items-start gap-1'>
              <a href="." className="inline-flex items-center gap-2 rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 px-2 py-1 text-[10px]">
                <FaGithub className="w-5 h-5" />
                <p>Test</p>
              </a>
              <a href="." className="inline-flex items-center gap-2 rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 px-2 py-1 text-[10px]">
                <FaGithub className="w-5 h-5" />
                <p>Test</p>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section >
  )
}
