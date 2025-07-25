import React from 'react';
import img from '../assets/marvin.jpg';

export default function AboutMe() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-transparent text-gray-900 dark:text-white px-4 py-16" id='about'>
      <div>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl mb-8 text-center">About Me</h1>
      </div>

      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 h-[600px]">
        {/* Left content */}
        <div className="flex-1 md:basis-[60%] bg-gray-600/60 text-white p-8 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold mb-4 text-black dark:text-white">Hello, I'm Marvin Rosanto</h1>
            <p className="text-base leading-relaxed mb-6 mt-8 text-black dark:text-white">
              I'm a fresh IT graduate from Saint Louis University passionate about web and full stack development.
              I've built projects using HTML, CSS, JavaScript, PHP, and MySQL, and I'm currently learning React
              and Tailwind to enhance my frontend skills. I also have hands-on experience in test automation using
              tools like Selenium, Postman, and Cypress. To grow beyond the classroom, I’ve earned certifications and
              actively joined tech-related extracurriculars that sharpened my practical skills.
            </p>
          </div>
          <div className="mt-auto flex gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition font-semibold">
              Resume
            </button>
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition font-semibold">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 md:basis-[40%] flex items-center justify-center">
          <div className="w-full h-full">
            <img
              src={img}
              alt="Marvin Rosanto"
              className="w-full h-full object-cover rounded-xl shadow-md border-4 border-white dark:border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}