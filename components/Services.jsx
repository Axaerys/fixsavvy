"use client";
import { motion } from "framer-motion";
import { zoomIn, textVariant, staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";

const Services = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-16 min-h-screen flex-center flex-col"
      id="Services"
    >
      <motion.h1 variants={textVariant(0.1)} className="flex-start w-full">
        <TypingText
          title="| Services"
          textStyles="text-3xl font-inter font-bold mb-12 black_gradient flex-start w-full"
        />
      </motion.h1>

      <div className="flex-between max-md:flex-col">
        <motion.div
          variants={zoomIn(0.3, 1)}
          className="min-h-[30rem] w-[45%] max-md:w-full "
        >
          <div className="max-md:mb-8 rounded-3xl border-2 border-orange-100 shadow-lg px-10 py-8 hover:scale-105 td">
            <h1 className="text-primary-orange text-2xl font-semibold mb-4 font-inter">
              For Our Clients
            </h1>
            <ul className="text-lg font-satoshi list-disc text-slate-600 marker:text-primary-blue ">
              <li className="mb-5 ml-8">
                A sentence or two will be going to go somewhere here
              </li>
              <li className="mb-5 ml-8">
                A sentence or two will be going to go somewhere here
              </li>
              <li className="mb-5 ml-8">
                A sentence or two will be going to go somewhere here
              </li>
              <li className="mb-5 ml-8">
                A sentence or two will be going to go somewhere here
              </li>
              <li className="mb-5 ml-8">
                A sentence or two will be going to go somewhere here
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="min-h-[30rem] w-[45%] max-md:w-full "
        >
          <div className="max-md:mb-8 rounded-3xl border-2 border-blue-100 shadow-lg px-10 py-8 hover:scale-105 td">
            <h1 className="text-primary-blue text-2xl font-semibold mb-4 font-inter">
              For Our Fixers
            </h1>
            <ul className="text-lg font-satoshi list-disc text-slate-600 marker:text-primary-orange">
              <li className="mb-5 ml-8">
                A sentence or two will be going to go somewhere here
              </li>
              <li className="mb-5 ml-8">
                A sentence or two will be going to go somewhere here
              </li>
              <li className="mb-5 ml-8">
                A sentence or two will be going to go somewhere here
              </li>
              <li className="mb-5 ml-8">
                A sentence or two will be going to go somewhere here
              </li>
              <li className="mb-5 ml-8">
                A sentence or two will be going to go somewhere here
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
