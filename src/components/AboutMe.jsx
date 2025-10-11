import { motion } from 'framer-motion';
import { Download, Mail, GraduationCap } from 'lucide-react';
import marvinImg from '../assets/marvin.jpg';

export default function AboutMe() {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 py-16 sm:py-20"
      id="about"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 sm:mb-20 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-16 sm:w-20 h-1 mx-auto md:mx-0 bg-foreground dark:bg-white bg-black" />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Image Section */}
          <motion.div
            className="flex justify-center md:justify-end order-1 md:order-2 overflow-visible"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-[3/4] overflow-visible">
              <div className="relative w-full h-full overflow-visible">
                <img
                  src={marvinImg}
                  alt="Marvin Rosanto"
                  className="w-full h-full object-cover border-2 border-foreground rounded-md"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 sm:-bottom-7 sm:-right-6 w-20 sm:w-24 h-20 sm:h-24 border-2 border-secondary pointer-events-none" />
            </div>
          </motion.div>


          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 md:order-1 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Hello, I'm Marvin Rosanto</h3>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-4">
                I'm a fresh IT graduate from Saint Louis University passionate about web and full-stack development.
                I've built projects using HTML, CSS, JavaScript, PHP, and MySQL, and I'm currently learning React and Tailwind to enhance my frontend skills.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                I also have hands-on experience in test automation using tools like Selenium, Postman, and Cypress.
                To grow beyond the classroom, I've earned certifications and joined tech-related extracurriculars that sharpened my practical skills.
              </p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Saint Louis University</span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="#"
                download
                className="group flex items-center gap-2 bg-foreground text-background px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] rounded-md"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2 border-2 border-foreground px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-foreground hover:text-background hover:scale-[1.02] active:scale-[0.98] rounded-md"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}