"use client";

import FixerCard from "./FixerCard";
// import image1 from "@public/fixers/Bing.png";
// import image2 from "@public/fixers/Bob.png";
// import image3 from "@public/fixers/Daei.png";
import tempImage from "@public/sampleImage.jpg";
import { motion } from "framer-motion";
import { zoomIn, textVariant, staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";

const TopFixers = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-16 min-h-screen flex justify-center flex-col"
      id="TopFixers"
    >
      <motion.h1 variants={textVariant(0.1)} className="flex-start w-full">
        <TypingText
          title="| Top Fixers"
          textStyles="text-3xl font-inter font-bold mb-12 black_gradient flex-start w-full"
        />
      </motion.h1>

      <div className="flex-between !items-center h-full max-md:flex-col">
        <motion.div
          variants={zoomIn(0.35, 0.75)}
          className="min-h-[22rem] w-[32%] max-md:w-full"
        >
          <FixerCard
            borderColor="border-yellow-500 "
            name={"John Doe"}
            rating={"4.9 / 5"}
            votes={75}
            image={tempImage}
            // image={image1}
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.5, 0.75)}
          className="min-h-[22rem] w-[32%] max-md:w-full"
        >
          <FixerCard
            borderColor="border-gray-400"
            name={"Jack Doe"}
            rating={"4.8 / 5"}
            votes={68}
            image={tempImage}
            // image={image2}
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.65, 0.75)}
          className="min-h-[22rem] w-[32%] max-md:w-full"
        >
          <FixerCard
            borderColor="border-yellow-800"
            name={"Joe Doe"}
            rating={"4.1 / 5"}
            votes={34}
            image={tempImage}
            // image={image3}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TopFixers;
