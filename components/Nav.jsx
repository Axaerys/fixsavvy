"use client";
import { useState, useRef, useEffect } from "react";
import NavButton from "./NavButton";
import Image from "next/image";
import logoImage from "@public/logo.png";

const Nav = () => {
  // const [scrolled, setScrolled] = useState(false);

  // const handleScroll = () => {
  //   if (window.scrollY > 90) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   // Clean up the event listener on unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const [visible, setVisible] = useState("hidden");

  // const navToggle = () => {
  //   setVisible("!flex");
  // };

  const [visible, setVisible] = useState("hidden");
  const [isChecked, setIsChecked] = useState(false); // State to manage checkbox
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const navToggle = () => {
    setVisible((prev) => (prev === "hidden" ? "!flex" : "hidden"));
    setIsChecked((prev) => !prev); // Toggle checked state
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setVisible("hidden");
      setIsChecked(false); // Reset the checkbox to uncheck it
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      className={
        `absolute top-0 w-full flex-center bg-white z-20 h-16 font-satoshi py-12 `
        // ${scrolled ? "shadow-md" : "shadow-none"} move this above to work
      }
    >
      {/* laptop view */}
      <div className="flex-between w-[80rem] px-16 max-w-7xl visible max-lg:hidden ">
        <a
          href="/"
          className="text-primary-orange flex flex-center gap-2 font-bold font-satoshi text-lg  td hover:scale-95"
        >
          <div className="h-16 w-16">
            <Image
              src={logoImage}
              alt="FixSavvy Logo"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          FixSavvy
        </a>
        <div className="flex-center gap-16">
          <a href="#Services" className="underline-animation text-primary-blue">
            Our Services
          </a>
          <a href="#Packages" className="underline-animation text-primary-blue">
            Packages
          </a>
          <a
            href="#TopFixers"
            className="underline-animation text-primary-blue"
          >
            Top Fixers
          </a>
          {/* <a
            href="/#ContactUs"
            className="underline-animation text-primary-blue"
          >
            Contact Us
          </a> */}
          <a href="./Login">
            <NavButton
              action={"Log In / Sign Up"}
              borderColor={"border-primary-blue"}
              color={"text-primary-blue"}
            />
          </a>
        </div>
      </div>
      {/* mobile/tablet view */}
      <div className="flex-between w-screen mt-4 px-6 sm:px-16  visible lg:hidden">
        <a
          href="/"
          className="text-primary-orange flex flex-center gap-2 font-bold font-satoshi text-lg  td hover:scale-95"
        >
          <div className="h-16 w-16">
            <Image
              src={logoImage}
              alt="FixSavvy Logo"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          FixSavvy
        </a>
        {/* hamburger menu start */}
        <div>
          <label className="hamburger" ref={buttonRef} onClick={navToggle}>
            <input
              type="checkbox"
              checked={isChecked} // Bind checkbox to state
              onChange={navToggle} // Handle state change on click
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
          <div
            ref={dropdownRef}
            className={`${
              visible === "!flex"
                ? "dropdown-enter dropdown-enter-active"
                : "dropdown-exit dropdown-exit-active"
            } px-8 py-4 rounded-xl flex items-start justify-center flex-col gap-8 border-2 border-orange-100 shadow-lg bg-white w-56 absolute right-6 top-20 overflow-hidden`}
          >
            <a href="/#Services">Our Services</a>
            <a href="/#Packages">Packages</a>
            <a href="/#TopFixers">Top Fixers</a>
            {/* <a href="/#">Contact Us</a> */}
            <a href="/Login">
              <NavButton
                action={"Log In / Sign Up"}
                borderColor={"border-primary-blue"}
                color={"text-primary-blue"}
              />
            </a>
          </div>
        </div>
        {/* hamburger menu end */}
      </div>
    </section>
  );
};

export default Nav;
