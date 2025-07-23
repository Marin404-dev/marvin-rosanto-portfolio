import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

const TrueFocus = ({
  sentence = "Web Developer|Quality Assurance",
  manualMode = true,
  blurAmount = 2,
  borderColor = "white",
  glowColor = "rgba(255, 255, 255, 0.8)",
  animationDuration = 0.3,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split("|");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

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
      className="relative inline-block text-4xl"
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
        {/* Top-left corner */}
        <div
          className="absolute left-0 top-0 w-3 h-1.5 border-t-2 border-l-2"
          style={{
            borderColor,
            filter: `drop-shadow(0 0 2px ${glowColor})`,
            background: "transparent",
            zIndex: 2
          }}
        />

        {/* Top-right corner */}
        <div
          className="absolute right-0 top-0 w-3 h-1.5 border-t-2 border-r-2"
          style={{
            borderColor,
            filter: `drop-shadow(0 0 2px ${glowColor})`,
            background: "transparent",
            zIndex: 2
          }}
        />
        {/* Bottom-left corner */}
        <div
          className="absolute left-0 bottom-0 w-3 h-1.5 border-b-2 border-l-2"
          style={{
            borderColor,
            filter: `drop-shadow(0 0 2px ${glowColor})`,
            background: "transparent",
            zIndex: 2
          }}
        />
        {/* Bottom-right corner */}
        <div
          className="absolute right-0 bottom-0 w-3 h-1.5 border-b-2 border-r-2"
          style={{
            borderColor,
            filter: `drop-shadow(0 0 2px ${glowColor})`,
            background: "transparent",
            zIndex: 2
          }}
        />
      </motion.div>
      {/* Words */}
      {words.map((word, i) => (
        <span
          key={i}
          ref={el => (wordRefs.current[i] = el)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          className={`relative z-10 px-1 transition ${i === currentIndex ? "text-white-400 font-bold" : ""}`}
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
    <div className='text-white flex mx-auto my-4 justify-center items-center h-64 w-full'>
      <div className="flex flex-col items-center">
        <h1 className='font-bold text-8xl mb-4 pl'>Marvin Rosanto</h1>
        <TrueFocus sentence="Web Developer|Quality Assurance" />
      </div>
    </div>
  );
}