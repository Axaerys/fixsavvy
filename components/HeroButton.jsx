"use client";
import React, { useEffect, useState } from "react";

const HeroButton = ({ action, borderColor, color, bgColor }) => {
  const [scale, setScale] = useState("scale-0"); // Start at scale-0

  const handleScroll = () => {
    const buttonPosition = document
      .getElementById("hero-button")
      .getBoundingClientRect();
    // if (
    //   buttonPosition.top >= 0 &&
    //   buttonPosition.bottom <= window.innerHeight
    // ) {
    //   setScale("scale-100"); // Scale to full size if in view
    // } else {
    //   setScale("scale-0"); // Scale down if out of view
    // }
  };

  useEffect(() => {
    // Initial visibility check and scale up after a short delay
    handleScroll();
    const timeout = setTimeout(() => setScale("scale-100"), 0);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero-button"
      className={`border-2 ${borderColor} rounded-lg px-4 py-2 w-48  td ${scale} hover:scale-95  bg-white ${color} ${bgColor} hover:text-white cursor-pointer`}
    >
      <div className={`font-satoshi text-xl text-center `}>{action}</div>
    </section>
  );
};

export default HeroButton;
