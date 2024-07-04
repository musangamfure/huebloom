"use client";

import Palette from "@/components/palette";
import React, { useState } from "react";
import { Reorder } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

const DynamicPage = ({ params }: { params: { slug: string } }) => {
  const generatedColors = params.slug;
  const colors: undefined | string[] | any =
    generatedColors && generatedColors.split("-");

  const [colorPalettes, setColorPalettes] = useState(colors);
  const [lockedHexes, setLockedHexes] = useState<string[]>([]);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const dynamicAxis = isDesktop ? "x" : "y";

  return (
    <div className="">
      <Reorder.Group
        values={colorPalettes}
        onReorder={setColorPalettes}
        axis={dynamicAxis}
        className="flex lg:flex-row flex-col  w-full h-screen "
      >
        {colorPalettes.map((color: string, index: number) => (
          <Palette
            key={color}
            color={color}
            colorIndex={index}
            colors={colors}
            lockedHexes={lockedHexes}
            setLockedHexes={setLockedHexes}
          />
        ))}
      </Reorder.Group>
    </div>
  );
};

export default DynamicPage;
