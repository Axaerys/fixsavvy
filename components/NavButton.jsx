"use client";
import React, { useEffect, useState } from "react";

const HeroButton = ({ action, borderColor, color }) => {
  return (
    <section
      id="hero-button"
      className={`border-2 ${borderColor} min-w-max rounded-full px-2 py-1 w-24  td  hover:scale-95 cursor-pointer`}
    >
      <div className={`font-satoshi  text-center ${color}`}>{action}</div>
    </section>
  );
};

export default HeroButton;
