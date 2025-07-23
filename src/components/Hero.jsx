import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const TrueFocus = ({
  sentence = "Web Developer|Quality Assurance|Full-Stack Developer",
  className = "",
  manualMode = true,
  blurAmount = 2,
  animationDuration = 0.3,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split("|");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () =>
      document.documentElement.classList.contains("dark");
    setIsDark(checkTheme());

    const observer = new MutationObserver(() => setIsDark(checkTheme()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const borderColor = isDark ? "white" : "black";
  const glowColor = isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.5)";

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-block text-base sm:text-lg md:text-xl lg:text-2xl ${className}`}
      style={{ padding: "0.5rem 1rem" }}
    >
      {/* Focus rectangle */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: focusRect.x,
          top: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          zIndex: 1,
        }}
        animate={{
          left: focusRect.x,
          top: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
        }}
        transition={{ duration: animationDuration }}
      >
        {/* Corners */}
        {["t-l", "t-r", "b-l", "b-r"].map((corner) => {
          const positionClasses = {
            "t-l": "left-0 top-0 border-t-2 border-l-2",
            "t-r": "right-0 top-0 border-t-2 border-r-2",
            "b-l": "left-0 bottom-0 border-b-2 border-l-2",
            "b-r": "right-0 bottom-0 border-b-2 border-r-2",
          };

          return (
            <div
              key={corner}
              className={`absolute w-3 h-1.5 ${positionClasses[corner]}`}
              style={{
                borderColor,
                filter: `drop-shadow(0 0 2px ${glowColor})`,
                background: "transparent",
                zIndex: 2,
              }}
            />
          );
        })}
      </motion.div>

      {/* Words */}
      {words.map((word, i) => (
        <span
          key={i}
          ref={(el) => (wordRefs.current[i] = el)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          className={`relative z-10 px-1 mx-1 sm:mx-2 md:mx-3 transition ${
            i === currentIndex ? "text-white-400 font-bold" : ""
          }`}
          style={i !== currentIndex ? { filter: `blur(${blurAmount}px)` } : {}}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-transparent text-gray-900 dark:text-white">
      <div className="flex flex-col items-center">
        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 text-center'>
          Marvin Rosanto
        </h1>
        <TrueFocus
          className="flex flex-col items-center px-4 text-center max-w-full"
          sentence="Web Developer|Quality Assurance|Full-Stack Developer"
        />
      </div>

      <div className="mt-32 flex gap-4">
        {/* GitHub */}
        <a
          href=""
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
    </section>

  );
}