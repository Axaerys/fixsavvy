import HeroButton from "./HeroButton";
import heroImage from "@public/heroImage.png";
import Image from "next/image";
import AppleIcon from "@components/AppleIcon.jsx";

const Hero = () => {
  return (
    <section className="flex justify-between items-center h-screen w-full">
      <div className="w-[50%] max-md:w-full flex flex-col gap-8 ">
        <h1 className="text-7xl max-md:text-6xl font-bold cursor-default">
          Welcome to{" "}
          <div className="orange_gradient font-inter flex py-4 -my-4 ">
            <p className="lg:hover:translate-y-2 td">F</p>
            <p className="lg:hover:translate-y-2 td">i</p>
            <p className="lg:hover:translate-y-2 td">x</p>
            <p className="lg:hover:translate-y-2 td">S</p>
            <p className="lg:hover:translate-y-2 td">a</p>
            <p className="lg:hover:translate-y-2 td">v</p>
            <p className="lg:hover:translate-y-2 td">v</p>
            <p className="lg:hover:translate-y-2 td">y</p>
          </div>
        </h1>
        <p className="font-satoshi text-xl text-slate-600">
          A subtext will be going to go somewhere here.
        </p>
        <div className="flex justify-start items-start max-lg:flex-col gap-4 max-md:items-center">
          <a href="https://www.apple.com/app-store" target="_blank">
            <HeroButton
              action={"App Store"}
              borderColor={"border-primary-orange"}
              color={"text-primary-orange"}
              bgColor={"hover:bg-primary-orange"}
              // logoIcon={<AppleIcon color="#ff0000" />}
              logoIcon={0}
              iconColor={"#F57C00"}
            />
          </a>
          <a href="https://play.google.com" target="_blank">
            <HeroButton
              action={"Google Play"}
              borderColor={"border-primary-blue"}
              color={"text-primary-blue"}
              bgColor={"hover:bg-primary-blue"}
              // logoIcon={<AppleIcon color="#ff0000"/>}
              logoIcon={1}
              iconColor={"#1E3A5F"}
            />
          </a>
        </div>
      </div>
      <div className="w-[40%] max-md:hidden">
        <Image
          src={heroImage}
          alt="Description of the hero image"
          layout="responsive"
          width={500}
          height={300}
        />
      </div>
    </section>
  );
};

export default Hero;
