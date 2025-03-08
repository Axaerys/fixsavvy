import FixerCard from "./FixerCard";
// import image1 from "@public/fixers/Bing.png";
// import image2 from "@public/fixers/Bob.png";
// import image3 from "@public/fixers/Daei.png";
import tempImage from "@public/fixers/sampleImage.jpg";

const TopFixers = () => {
  return (
    <section
      className="py-16 min-h-screen flex justify-center flex-col"
      id="TopFixers"
    >
      <h1 className=" text-3xl font-inter font-bold mb-12 black_gradient justify-start w-full">
        Top Fixers:
      </h1>
      <div className="flex-between !items-center h-full max-md:flex-col">
        <FixerCard
          borderColor="border-yellow-500 "
          name={"John Doe"}
          rating={"4.9 / 5"}
          votes={75}
          image={tempImage}
          // image={image1}
        />
        <FixerCard
          borderColor="border-gray-400"
          name={"Jack Doe"}
          rating={"4.8 / 5"}
          votes={68}
          image={tempImage}
          // image={image2}
        />
        <FixerCard
          borderColor="border-yellow-800"
          name={"Joe Doe"}
          rating={"4.1 / 5"}
          votes={34}
          image={tempImage}
          // image={image3}
        />
      </div>
    </section>
  );
};

export default TopFixers;
