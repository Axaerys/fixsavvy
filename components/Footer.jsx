"use client";
import InstaIcon from "@public/InstaIcon";
import LinkedInIcon from "@public/LinkedInIcon";
import TwitterIcon from "@public/TwitterIcon";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  return (
    <motion.section
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-gray-900 relative bottom-0 w-screen"
      id="Footer"
    >
      <div className="sm:px-16 px-6 w-screen max-w-7xl mx-auto py-12 flex-between !items-start max-md:flex-col">
        <div className="md:w-[32%] max-md:mb-6">
          <h1 className="  font-inter font-bold  text-slate-300">
            About Us
            <p className="text-xs font-satoshi mt-2 font-normal text-slate-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, ipsam? Deserunt magni, in obcaecati iusto sunt modi
              laborum alias maiores assumenda doloremque quibusdam sapiente.
              Dignissimos voluptatem deserunt quod qui facere? Dignissimos
              voluptatem deserunt quod qui facere? Dignissimos voluptatem
              deserunt quod qui facere? deserunt quod qui facere? deserunt quod
              qui facere? deserunt quod qui facere?
            </p>
          </h1>
        </div>
        <div className="md:w-[32%] max-md:mb-6">
          <h1 className="  font-inter font-bold  text-slate-300">Navigate</h1>
          <div className="flex justify-between  items-center w-full max-md:w-screen max-md:-mx-6 max-md:px-6 mt-2 text-xs font-satoshi font-normal text-slate-400">
            <div className="flex flex-col gap-2">
              <a href="#Services" className="hover:text-slate-200 td ">
                Our Services
              </a>
              <a href="#Packages" className="hover:text-slate-200 td">
                Packages
              </a>
              <a href="#TopFixers" className="hover:text-slate-200 td">
                Top Fixers
              </a>
              <a href="#ContactUs" className="hover:text-slate-200 td">
                Contact Us
              </a>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <a href="./Login" className="hover:text-slate-200 td">
                Sign Up
              </a>
              <a href="./Login" className="hover:text-slate-200 td">
                Log In
              </a>
              <a
                href="https://www.apple.com/app-store"
                target="_blank"
                className="hover:text-slate-200 td"
              >
                Get it on IOS
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                className="hover:text-slate-200 td"
              >
                Get it on Android
              </a>
            </div>
            <div className="flex flex-col gap-2 text-end">
              <a href="./" className="hover:text-slate-200 td">
                Home
              </a>
              <a
                href="#PageNotAvailableYet"
                className="hover:text-slate-200 td"
              >
                Another Link
              </a>
              <a
                href="#PageNotAvailableYet"
                className="hover:text-slate-200 td"
              >
                Another Link
              </a>
              <a href="./" className="hover:text-slate-200 td">
                Back to Top
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-[32%] max-md:mb-6">
          <h1 className="  font-inter font-bold mb-12 text-slate-300">
            Reach Us
            <div className="text-xs font-satoshi mt-2 font-normal text-slate-400 flex-between w-full max-lg:flex-col">
              <div>
                <p className="mb-2">
                  Email: <span>inquiry@fixsavvy.com</span>
                </p>
                <p className="mb-2">
                  Phone: <span>+971 4 123 4567</span>
                </p>
                <p className="mb-2">
                  Location: <span>43rd, Privet Rd, Chicago</span>
                </p>
              </div>
              <div className="flex-between gap-8 max-md:mt-3">
                <a href="https://instagram.com" target="_blank">
                  <InstaIcon />
                </a>
                <a href="https://x.com" target="_blank">
                  <TwitterIcon />
                </a>
                <a href="https://linkedin.com" target="_blank">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </h1>
        </div>
      </div>
      <div className="bg-gray-950 text-slate-500 text-xs py-4 flex-center flex-wrap">
        <div className="sm:px-16 px-6 w-screen max-w-7xl mx-auto flex-between !items-start max-md:flex-col">
          <h1>Copyright, All RIghts Reserved.</h1>
          <div className="flex-between max-md:w-full md:gap-8 max-lg:mt-2">
            <a
              href="#PopUpNotImplementedYet"
              className="td hover:text-slate-400"
            >
              Terms and Conditions
            </a>
            <a
              href="#PopUpNotImplementedYet"
              className="td hover:text-slate-400"
            >
              Privacy and Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
