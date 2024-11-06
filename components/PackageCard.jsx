const PackageCard = ({ color, altColor, title, li1, li2, li3, price }) => {
  return (
    <section className="min-h-[30rem] w-[23%] max-lg:w-[48%] max-lg:my-[2%] max-md:w-full max-md:mb-8 rounded-3xl border-2 border-slate-100 shadow-lg px-6 py-6 hover:scale-105 td">
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
        {price} Dhs <br />
        <p className="text-sm font-normal text-gray-400 ">Per Month</p>
      </h1>
    </section>
  );
};

export default PackageCard;
