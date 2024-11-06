"use client";

import { useState, useEffect } from "react";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 0); // Show if scrolled away from the top
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <section
      onClick={scrollToTop}
      className={`fixed bottom-6 right-8 max-md:bottom-4 max-md:right-4 z-30 cursor-pointer flex-center transition-opacity hover:scale-95 td ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-12 h-12 border-4 border-primary-blue bg-white rounded-full flex-center">
        <div className="arrow" />
      </div>
    </section>
  );
};

export default GoTop;
