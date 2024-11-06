import Image from "next/image";
import sampleImage from "@public/sampleImage.jpg";
import StarIcon from "@public/StarIcon";

const FixerCard = ({ borderColor }) => {
  return (
    <section
      className={`min-h-[22rem] w-[32%] max-md:w-full max-md:mb-8 flex-center flex-col rounded-3xl border-[1px] ${borderColor}  shadow-lg px-6 py-6 hover:scale-105 td`}
    >
      <div className="w-36 h-36 overflow-hidden object-cover ">
        <Image
          src={sampleImage} // Ensure this is a valid image path or URL
          alt="A sample Image goes here" // Add a meaningful alt text
          layout="fixed" // Or "fixed", "intrinsic" depending on your needs
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <h1
        className={`text-slate-600 text-2xl font-semibold my-4 text-center font-inter`}
      >
        Fixer Name Here
      </h1>

      <div
        className={`text-center text-3xl font-bold text-primary-blue p-0 m-0`}
      >
        <div className="flex-center flex-row">
          <StarIcon /> &nbsp; 4.7 / 5
        </div>
        <p className="text-sm font-normal text-gray-400 ">66 votes</p>
      </div>
    </section>
  );
};

export default FixerCard;
