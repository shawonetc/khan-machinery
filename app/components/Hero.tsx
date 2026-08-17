"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image: "https://www.classicmachinerybd.com/wp-content/uploads/elementor/thumbs/Home-Page-Image-risu9s989kfg2pe2s56zkpo1giqzdovsf8nd7umemg.png",
    title: "KHAN MACHINERY BANGLADESH",
    subtitle: "Your Industrial Solutions Partner",
    description: "Quality machinery, reliable performance, and long-term support across industries.",
    buttonText: "Explore Our Products",
    buttonLink: "/shop",
  },
  {
    image: "https://www.classicmachinerybd.com/wp-content/uploads/elementor/thumbs/electrical-electronics-risu9qdjvwcvfhgt34dqfq549r08yaobqzce9ap6yw.png",
    title: "ELECTRICAL & ELECTRONICS",
    subtitle: "Advanced Industrial Automation",
    description: "High precision control panels, components, and machinery for modern factories.",
    buttonText: "View Categories",
    buttonLink: "/categories",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 w-full select-none">
      <div className="relative w-full h-[180px] xs:h-[220px] sm:h-[400px] md:h-[500px] lg:h-[580px] bg-white rounded-2xl overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center w-full h-full bg-white"
                unoptimized
              />
              {/* Overlay Gradient for Readability */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"></div> */}
            </div>

            {/* Text Content Overlay */}
            {/* <div className="absolute inset-0 flex items-center">
              <div className="w-full px-6 sm:px-12 lg:px-16">
                <div className="max-w-xl md:max-w-2xl text-left text-white animate-fade-in-up">
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                    <span className="text-green-500">KHAN MACHINERY</span>{" "}
                    <span className="text-yellow-400">BANGLADESH</span>
                  </h1>

                  <h2 className="mt-2 text-lg sm:text-2xl md:text-3xl font-semibold text-gray-100">
                    {slide.subtitle}
                  </h2>

                  <p className="mt-3 text-xs sm:text-base text-gray-300 font-light leading-relaxed max-w-lg">
                    {slide.description}
                  </p>

                  <div className="mt-6 sm:mt-8">
                    <a
                      href={slide.buttonLink}
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-150"
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white hover:text-[#FF6B00] p-2.5 rounded-full transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white hover:text-[#FF6B00] p-2.5 rounded-full transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? "bg-[#FF6B00] scale-125 shadow-sm"
                  : "bg-white/50 hover:bg-white/80"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
