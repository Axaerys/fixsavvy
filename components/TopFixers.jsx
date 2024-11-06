import FixerCard from "./FixerCard";

const TopFixers = () => {
  return (
    <section className="py-16 min-h-screen " id="TopFixers">
      <h1 className=" text-3xl font-inter font-bold mb-12 black_gradient">
        Top Fixers:
      </h1>
      <div className="flex-between !items-center h-full max-md:flex-col">
        <FixerCard borderColor="border-yellow-500 " />
        <FixerCard borderColor="border-gray-400" />
        <FixerCard borderColor="border-yellow-800" />
      </div>
    </section>
  );
};

export default TopFixers;
