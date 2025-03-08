"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AppleIcon from "@components/AppleIcon.jsx";
import GooglePlayIcon from "@components/GooglePlayIcon.jsx";

const HeroButton = ({
  action,
  borderColor,
  color,
  bgColor,
  logoIcon,
  iconColor,
}) => {
  const [scale, setScale] = useState("scale-0"); // Start at scale-0
  const [iconNumber, setIconNumber] = useState(false);
  const [iconColor2, setIconColor2] = useState(iconColor);

  useEffect(() => {
    setIconNumber(logoIcon !== 0);
  }, [logoIcon]); // Runs only when logoIcon changes

  console.log(iconColor);

  // const handleScroll = () => {
  //   const buttonPosition = document
  //     .getElementById("hero-button")
  //     .getBoundingClientRect();
  //   // if (
  //   //   buttonPosition.top >= 0 &&
  //   //   buttonPosition.bottom <= window.innerHeight
  //   // ) {
  //   //   setScale("scale-100"); // Scale to full size if in view
  //   // } else {
  //   //   setScale("scale-0"); // Scale down if out of view
  //   // }
  // };

  // useEffect(() => {
  //   // Initial visibility check and scale up after a short delay
  //   handleScroll();
  //   const timeout = setTimeout(() => setScale("scale-100"), 0);

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup on unmount
  //   return () => {
  //     clearTimeout(timeout);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section
      id="hero-button"
      className={`group border-2 ${borderColor} rounded-lg px-4 py-2 w-48 flex-center gap-2 td  hover:scale-95 bg-white ${color} ${bgColor} hover:text-white cursor-pointer`}
      onMouseEnter={() => setIconColor2("white")}
      onMouseLeave={() => setIconColor2(iconColor)}
    >
      <div className="h-8 w-8">
        {iconNumber ? (
          <GooglePlayIcon
            color={iconColor2}
            className="group-hover:fill-white"
          />
        ) : (
          <AppleIcon color={iconColor2} className="group-hover:fill-white" />
        )}
      </div>
      <div>
        <div className="font-satoshi text-xs text-left">Get it on</div>
        <div className="font-satoshi text-xl text-center -mt-1">{action}</div>
      </div>
    </section>
  );
};

export default HeroButton;
