import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import smart_city_img_1 from "../assets/baguio-smart-city-1.jpg";
import tcs_1_img from "../assets/TCS-1.jpg";
import tcs_2_img from "../assets/TCS-2.png";

import cert_1 from "../assets/cert-1.png";
import cert_2 from "../assets/cert-2.png";
import cert_3 from "../assets/cert-3.png";

const DEFAULT_ITEMS = [
  { id: 1, image: smart_city_img_1 },
  { id: 2, image: tcs_1_img },
  { id: 3, image: tcs_2_img },
];

const competitions = [
  {
    title: "Baguio Smart City Challenge",
    year: "2024",
    description:
      "Represented ParkInTell in the Baguio Smart City Challenge 2024, collaborating with three team members to present our capstone project.",
  },
  {
    title: "Tata Consultancy Services (TCS) Sustainathon Philippines 2023",
    year: "2024",
    description:
      `Represented Team Career Catalyst, a four-member group, and secured 3rd place out of 10 finalist teams at the TCS
       Sustainathon Finals 2023, held at the Marquis Events Place, Bonifacio Global City.`,
  },
];

const certifications = [
  {
    title: "Digital Skills: User Experience",
    issuer: "Accenture",
    description:
      "Comprehensive training in UX principles and user-centered design methodologies.",
  },
  {
    title: "Graphic Design Essentials",
    issuer: "Canva",
    description:
      "Mastered fundamental design principles and practical graphic design skills.",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    description:
      "Validated expertise in API testing, development, and documentation.",
  },
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
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState(null);

  const [activeTab, setActiveTab] = useState("competitions");
  const [carouselWidth, setCarouselWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setCarouselWidth(320);
      else if (width < 768) setCarouselWidth(600);
      else setCarouselWidth(800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-transparent text-gray-900 dark:text-white px-4 py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-2xl sm:text-4xl font-bold mb-2">Achievements & Learning</h2>
        <div className="w-20 h-1 mx-auto mb-6 bg-black dark:bg-white" />
        <p className="text-center max-w-2xl mx-auto">
          Certifications earned and competitions participated in to enhance my skills
        </p>
      </motion.div>


      {/* Tabs */}
      <div className="flex p-2 gap-8 border border-black dark:border-white rounded-xl overflow-hidden mb-6 mt-6">
        <button
          onClick={() => setActiveTab("competitions")}
          className={`px-6 py-3 w-40 font-semibold rounded-xl transition ${activeTab === "competitions"
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
        >
          Competitions
        </button>
        <button
          onClick={() => setActiveTab("certifications")}
          className={`px-6 py-3 w-40 font-semibold rounded-xl transition ${activeTab === "certifications"
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
        >
          Certifications
        </button>
      </div>

      {/* Competitions Tab */}
      {activeTab === "competitions" && (
        <motion.section
          className="w-full flex flex-col items-center gap-10 mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Carousel */}
          <Carousel
            baseWidth={carouselWidth}
            autoplay
            loop
            pauseOnHover
            items={DEFAULT_ITEMS}
          />

          {/* competition cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full mt-6">
            {competitions.map((comp, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-lg bg-white dark:bg-[#111] text-left"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{comp.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {comp.year}
                </p>
                <p className="text-gray-700 dark:text-gray-400">{comp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Certifications Tab */}
      {activeTab === "certifications" && (
        <motion.section
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="border p-4 rounded-lg shadow-md flex flex-col items-center text-center bg-white dark:bg-[#111]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <img
                  src={[cert_1, cert_2, cert_3][index]}
                  alt={cert.title}
                  className="mb-4 h-40 object-contain cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    setActiveCertIndex(index);
                    setModalOpen(true);
                  }}
                />

                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {modalOpen && activeCertIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-[#111] rounded-lg p-4 max-w-3xl max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 hover:text-red-500 text-2xl font-bold"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <img
              src={[cert_1, cert_2, cert_3][activeCertIndex]}
              alt={certifications[activeCertIndex].title}
              className="w-full h-auto object-contain"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">
              {certifications[activeCertIndex].title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-2">
              {certifications[activeCertIndex].issuer}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">
              {certifications[activeCertIndex].description}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
