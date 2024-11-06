import React from "react";
import PackageCard from "./PackageCard";
const Services = () => {
  return (
    <section className="py-16 min-h-screen" id="Packages">
      <h1 className=" text-3xl font-inter font-bold mb-12 black_gradient">
        Our Packages:
      </h1>
      <div className="flex-between flex-wrap max-md:flex-col">
        <PackageCard
          color={"text-primary-orange"}
          altColor={"text-primary-blue"}
          title={"Free"}
          li1={"A sentence or two will be going to go somewhere here"}
          li2={"A sentence or two will be going to go somewhere here"}
          li3={"A sentence or two will be going to go somewhere here"}
          price={"0.0"}
        />
        <PackageCard
          color={"text-primary-blue"}
          altColor={"text-primary-orange"}
          title={"Basic"}
          li1={"A sentence or two will be going to go somewhere here"}
          li2={"A sentence or two will be going to go somewhere here"}
          li3={"A sentence or two will be going to go somewhere here"}
          price={"20.0"}
        />
        <PackageCard
          color={"text-primary-blue"}
          altColor={"text-primary-orange"}
          title={"Pro"}
          li1={"A sentence or two will be going to go somewhere here"}
          li2={"A sentence or two will be going to go somewhere here"}
          li3={"A sentence or two will be going to go somewhere here"}
          price={"50.0"}
        />
        <PackageCard
          color={"text-primary-blue"}
          altColor={"text-primary-orange"}
          title={"Ultra"}
          li1={"A sentence or two will be going to go somewhere here"}
          li2={"A sentence or two will be going to go somewhere here"}
          li3={"A sentence or two will be going to go somewhere here"}
          price={"100.0"}
        />
      </div>
    </section>
  );
};

export default Services;
