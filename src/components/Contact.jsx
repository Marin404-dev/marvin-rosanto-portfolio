import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-transparent text-gray-900 dark:text-white px-4 py-16" id='contact'>
      <div>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl mb-8 text-center">Contact Me</h1>
      </div>

      <div className='grid grid-cols-2 gap-6 bg-white/30 mx-auto max-w-5xl p-8 rounded-xl shadow-md backdrop-blur-sm'>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-base leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <p className="text-base leading-relaxed mb-6">
            Feel free to reach out via email or connect with me on social media.
          </p>

          {/* Social Media Buttons */}
          <div className="mt-10 mb-10 flex gap-4 justify-center">
            {/* GitHub */}
            <a
              href="https://github.com/Marin404-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="border border-gray-300 dark:border-white/30 rounded-[15px] p-3 hover:bg-black/10 dark:hover:bg-white/10 transition"
            >
              <FaGithub size={24} className="text-gray-800 dark:text-white" />
            </a>

            {/* LinkedIn */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="border border-gray-300 dark:border-white/30 rounded-[15px] p-3 hover:bg-black/10 dark:hover:bg-white/10 transition"
            >
              <FaLinkedin size={24} className="text-gray-800 dark:text-white" />
            </a>

            {/* Email */}
            <a
              href="mailto:marvrosanto@gmail.com"
              aria-label="Email"
              className="border border-gray-300 dark:border-white/30 rounded-[15px] p-3 hover:bg-black/10 dark:hover:bg-white/10 transition"
            >
              <FaEnvelope size={24} className="text-gray-800 dark:text-white" />
            </a>
          </div>
        </div>

        <div>
          <form
            action="mailto:marvrosanto@gmail.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

    </section>
  );
}
