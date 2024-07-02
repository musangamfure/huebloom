"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import randomColor from "randomcolor";

const GeneratePage = () => {
  const randomColorx = randomColor({
    hue: "random",
    luminosity: "random",
    count: 5,
  });

  const routeParam = randomColorx
    ?.map((color: string) => color.slice(1))
    .join("-");

  const navigate = useRouter();

  useEffect(() => {
    setTimeout(() => {
      navigate.replace(`/colors/${routeParam}`);
    }, 3000);
  }, [navigate]);

  return (
    <div className="h-screen bg-white w-screen flex justify-center items-center">
      <div className="border-gray-300 h-14 w-14 animate-spin rounded-full border-2 border-t-black" />
    </div>
  );
};

export default GeneratePage;
