import HeroButton from "./HeroButton";
import heroImage from "@public/heroImage.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-between items-center h-screen w-full">
      <div className="w-[50%] max-md:w-full flex flex-col gap-8 ">
        <h1 className="text-7xl max-md:text-6xl font-bold cursor-default">
          Welcome to{" "}
          <div className="orange_gradient font-inter flex py-4 -my-4 ">
            <p className="hover:translate-y-2 td">F</p>
            <p className="hover:translate-y-2 td">i</p>
            <p className="hover:translate-y-2 td">x</p>
            <p className="hover:translate-y-2 td">S</p>
            <p className="hover:translate-y-2 td">a</p>
            <p className="hover:translate-y-2 td">v</p>
            <p className="hover:translate-y-2 td">v</p>
            <p className="hover:translate-y-2 td">y</p>
          </div>
        </h1>
        <p className="font-satoshi text-xl text-slate-600">
          A place for all your home maintenance needs.
        </p>
        <div className="flex justify-start items-start max-lg:flex-col gap-4 max-md:items-center">
          <HeroButton
            action={"Get a Fixer"}
            borderColor={"border-primary-orange"}
            color={"text-primary-orange"}
            bgColor={"hover:bg-primary-orange"}
          />
          <HeroButton
            action={"Become a Fixer"}
            borderColor={"border-primary-blue"}
            color={"text-primary-blue"}
            bgColor={"hover:bg-primary-blue"}
          />
        </div>
      </div>
      <div className="w-[40%] max-md:hidden">
        <Image
          src={heroImage} // Ensure this is a valid image path or URL
          alt="Description of the hero image" // Add a meaningful alt text
          layout="responsive" // Or "fixed", "intrinsic" depending on your needs
          width={500} // Replace with your desired width
          height={300} // Replace with your desired height
        />
      </div>
    </section>
  );
};

export default Hero;
