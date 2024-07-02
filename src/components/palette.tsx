import React, { useState } from "react";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import { handleColorTextClass } from "@/lib/utils";

extend([namesPlugin]);

const Palette = ({
  color,
  colors,
  lockedHexes,
  colorIndex,
  setLockedHexes,
}: {
  color: string;
  colors: string[];
  lockedHexes: string[];
  colorIndex: number;
  setLockedHexes: (value: string[]) => void;
}) => {
  const [colorInstance, setColorInstance] = useState(`#${color}`);
  const handleColorName = (hex: string) => {
    return colord(hex).toName({ closest: true });
  };

  const colorName = handleColorName(colorInstance);

  const colorTextLuminance = handleColorTextClass(colorInstance);

  return (
    <div
      style={{ backgroundColor: colorInstance }}
      className="w-full lg:h-screen h-full flex flex-row-reverse justify-center items-center px-[5px] relative"
    >
      <div
        className={`${
          colorTextLuminance === "white" ? "text-white" : "text-black"
        } lg:absolute w-full mb-1 flex flex-col lg:items-center left-0`}
      >
        <h3
          className={`text-xl lg:text-[]30px uppercase font-semibold cursor-pointer text-left`}
        >
          {" "}
          {colorInstance.replace(/^#/, "")}
        </h3>
        <p className={`text-[11px] opacity-[0.5] capitalize inset-0 mt-[9px]`}>
          ~{colorName}
        </p>
      </div>
    </div>
  );
};

export default Palette;
