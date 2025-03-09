const PackageCard = ({ color, altColor, title, li1, li2, li3, price }) => {
  return (
    <section className="min-h-[20rem] h-full w-[100%] max-lg:my-[2%]  max-md:mb-8 rounded-3xl border-[2px] border-gray-200 shadow-lg px-6 py-6 hover:scale-105 td">
      <h1 className={`${color} text-2xl font-semibold mb-4 font-inter`}>
        {title} Plan
      </h1>
      <ul
        className={`text-lg font-satoshi text-slate-600 list-disc marker:${altColor}`}
      >
        <li className="mb-5 ml-8">{li1}</li>
        <li className="mb-5 ml-8">{li2}</li>
        <li className="mb-5 ml-8">{li3}</li>
      </ul>
      <h1 className={`text-center text-3xl font-bold ${color}`}>
        {price} USD <br />
        <p className="text-sm font-normal text-gray-400 ">Per Month</p>
      </h1>
    </section>
  );
};

export default PackageCard;
