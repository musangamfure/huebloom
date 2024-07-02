"use client";

import Palette from "@/components/palette";
import React, { useState } from "react";

const DynamicPage = ({ params }: { params: { slug: string } }) => {
  const generatedColors = params.slug;
  const colors: undefined | string[] | any =
    generatedColors && generatedColors.split("-");

  const [colorPalettes, setColorPalettes] = useState(colors);

  return (
    <div className="">
      <div className="flex lg:flex-row flex-col  w-full h-screen ">
        {colorPalettes.map((color: string, index: number) => (
          <Palette
            key={color}
            color={color}
            colorIndex={index}
            colors={colors}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicPage;
