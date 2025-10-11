import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-transparent text-gray-900 dark:text-white px-4 py-20" id='contact'>
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h1 className="font-bold text-4xl sm:text-5xl mb-4">Let's Connect</h1>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6" />
          <p className="max-w-2xl mx-auto">
            Have a project in mind? Let's bring your ideas to life together
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          <motion.div
            className="border-2 border-border p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="leading-relaxed mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-foreground text-background dark:bg-white dark:text-black bg-black text-white">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <span className="text-sm">marvrosanto@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-foreground text-background dark:bg-white dark:text-black bg-black text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm">Baguio City, Philippines</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Marin404-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group p-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group p-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:marvrosanto@gmail.com"
                aria-label="Email"
                className="group p-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="border-2 border-border p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              action="mailto:marvrosanto@gmail.com"
              method="POST"
              encType="text/plain"
              className="flex flex-col gap-5"
            >
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full p-3 border-2 border-border bg-background focus:outline-none focus:border-secondary transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full p-3 border-2 border-border bg-background focus:outline-none focus:border-secondary transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full p-3 border-2 border-border bg-background focus:outline-none focus:border-secondary resize-none transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 border-2 border-black dark:border-white bg-transparent text-black dark:text-white px-6 py-3 font-semibold rounded-md transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
