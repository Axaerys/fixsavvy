"use client";

import PackageCard from "./PackageCard";
import { motion } from "framer-motion";
import {
  zoomIn,
  textVariant,
  staggerContainer,
  planetVariants,
} from "../utils/motion";
import { TypingText } from "./CustomTexts";

const Services = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-16 min-h-screen flex-center flex-col"
      id="Packages"
    >
      <motion.h1 variants={textVariant(0.1)} className="flex-start w-full">
        <TypingText
          title="| Packages"
          textStyles="text-3xl font-inter font-bold mb-12 black_gradient flex-start w-full"
        />
      </motion.h1>
      <div className="flex-between flex-wrap max-md:flex-col">
        <motion.div
          variants={planetVariants("left", 0.3)}
          className="w-[23%] max-lg:w-[48%] max-md:w-full"
        >
          <PackageCard
            color={"text-primary-orange"}
            altColor={"text-primary-blue"}
            title={"Free"}
            li1={"A sentence or two will be going to go somewhere here"}
            li2={"A sentence or two will be going to go somewhere here"}
            li3={"A sentence or two will be going to go somewhere here"}
            price={"0.0"}
          />
        </motion.div>
        <motion.div
          variants={planetVariants("left", 0.5)}
          className="w-[23%] max-lg:w-[48%] max-md:w-full"
        >
          <PackageCard
            color={"text-primary-blue"}
            altColor={"text-primary-orange"}
            title={"Basic"}
            li1={"A sentence or two will be going to go somewhere here"}
            li2={"A sentence or two will be going to go somewhere here"}
            li3={"A sentence or two will be going to go somewhere here"}
            price={"20.0"}
          />
        </motion.div>
        <motion.div
          variants={planetVariants("left", 0.7)}
          className="w-[23%] max-lg:w-[48%] max-md:w-full"
        >
          <PackageCard
            color={"text-primary-blue"}
            altColor={"text-primary-orange"}
            title={"Pro"}
            li1={"A sentence or two will be going to go somewhere here"}
            li2={"A sentence or two will be going to go somewhere here"}
            li3={"A sentence or two will be going to go somewhere here"}
            price={"50.0"}
          />
        </motion.div>
        <motion.div
          variants={planetVariants("left", 0.9)}
          className="w-[23%] max-lg:w-[48%] max-md:w-full"
        >
          <PackageCard
            color={"text-primary-blue"}
            altColor={"text-primary-orange"}
            title={"Ultra"}
            li1={"A sentence or two will be going to go somewhere here"}
            li2={"A sentence or two will be going to go somewhere here"}
            li3={"A sentence or two will be going to go somewhere here"}
            price={"100.0"}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
