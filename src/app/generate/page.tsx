"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import randomColor from "randomcolor";

const GeneratePage = () => {
  const navigate = useRouter();

  useEffect(() => {
    const randomColors = randomColor({
      hue: "random",
      luminosity: "random",
      count: 5,
    });

    const routeParam = randomColors.map((color) => color.slice(1)).join("-");

    const timer = setTimeout(() => {
      navigate.replace(`/colors/${routeParam}`);
    }, 3000);

    // Clean up the timer on unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen bg-white w-screen flex justify-center items-center">
      <div className="border-gray-300 h-14 w-14 animate-spin rounded-full border-2 border-t-black" />
    </div>
  );
};

export default GeneratePage;
