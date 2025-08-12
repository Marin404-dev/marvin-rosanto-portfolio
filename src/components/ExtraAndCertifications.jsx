import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import smart_city_img_1 from '../assets/baguio-smart-city-1.jpg';
import tcs_1_img from '../assets/TCS-1.jpg';
import tcs_2_img from '../assets/TCS-2.png';

const DEFAULT_ITEMS = [
  { id: 1, image: smart_city_img_1 },
  { id: 2, image: tcs_1_img },
  { id: 3, image: tcs_2_img },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * (carouselItems.length - 1),
        right: 0,
      },
    };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${round
        ? "rounded-full border border-white"
        : "rounded-[24px] border border-[#222] dark:border-[#fff] bg-[#f8f8f8] dark:bg-[#111] dark:text-[#fff]"
        }`}
      style={{
        width: "100%",
        maxWidth: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          height: round ? itemWidth : "400px",
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });

          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex items-center justify-center bg-[#222] overflow-hidden ${round ? "rounded-full" : "rounded-[12px] dark:bg-[#fff]"
                }`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY: rotateY,
              }}
              transition={effectiveTransition}
            >
              <img
                src={item.image}
                alt={`carousel-item-${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dots */}
      <div
        className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
          }`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150
                ${currentIndex % items.length === index
                  ? round
                    ? "bg-white dark:bg-white"
                    : "bg-[#333333] dark:bg-white"
                  : round
                    ? "bg-[#555] dark:bg-[#888]"
                    : "bg-[rgba(51,51,51,0.4)] dark:bg-[rgba(255,255,255,0.2)]"
                }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExtraAndCertifications() {
  const [activeTab, setActiveTab] = useState("competitions");
  const [carouselWidth, setCarouselWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setCarouselWidth(320);
      } else if (width < 768) {
        setCarouselWidth(600);
      } else {
        setCarouselWidth(800);
      }
    };

    handleResize(); // initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-transparent text-gray-900 dark:text-white px-4 py-16">
      <h2 className="text-4xl font-bold mb-2 text-center">Competitions and Certifications</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
        Here are some of the certifications and events I've participated in.
      </p>

      {/* Button Tabs */}
      <div className="flex p-2 gap-8 border border-black dark:border-white rounded-xl overflow-hidden mb-12">
        <button
          onClick={() => setActiveTab("competitions")}
          className={`flex flex-col items-center justify-center px-6 py-4 w-40 transition-colors duration-200 ${activeTab === "competitions"
            ? "bg-white text-black font-bold border border-white dark:bg-white-900 dark:text-black dark:border-gray-900 rounded-xl"
            : "text-black bg-gray-200 dark:text-white dark:bg-black"
            }`}
        >
          <div className="w-6 h-6 bg-gray-400 dark:bg-gray-600 rounded-sm mb-1"></div>
          Competitions
        </button>
        <button
          onClick={() => setActiveTab("certifications")}
          className={`flex flex-col items-center justify-center px-6 py-4 w-40 transition-colors duration-200 ${activeTab === "certifications"
            ? "bg-white text-black font-bold border border-white dark:bg-white-900 dark:text-black dark:border-gray-900 rounded-xl"
            : "text-black bg-gray-200 dark:text-white dark:bg-black"
            }`}
        >
          <div className="w-6 h-6 bg-gray-400 dark:bg-gray-600 rounded-sm mb-1"></div>
          Certifications
        </button>
      </div>

      {/* Carousel Section */}
      {activeTab === "competitions" && (
        <section className="extra-curricular w-full flex justify-center mt-8">
          <Carousel
            baseWidth={carouselWidth}
            autoplay
            loop
            pauseOnHover
            items={DEFAULT_ITEMS}
          />
        </section>
      )}

      {activeTab === "certifications" && (
        <section className="certifications w-full flex justify-center">
          <div className="max-w-5xl w-full mx-auto">
            <div className="grid grid-cols-3 gap-4 mt-8">

              <div className="border p-4 rounded-lg shadow-md">
                <img src={tcs_1_img} alt="cert-1-img" className="mb-6" />
                <h3 className="text-lg font-semibold mb-2">Digital Skills: User Experience</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Accenture</p>
              </div>

              <div className="border p-4 rounded-lg shadow-md">

                <img src={tcs_1_img} alt="cert-1-img" className="mb-6" />
                <h3 className="text-lg font-semibold mb-2">Graphic Design Essentials</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Canva</p>
              </div>

              <div className="border p-4 rounded-lg shadow-md">
                <img src={tcs_1_img} alt="cert-1-img" className="mb-6" />
                <h3 className="text-lg font-semibold mb-2">Postman API Fundamentals Student Expert</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Postman</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
