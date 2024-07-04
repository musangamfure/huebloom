import React, { useState } from "react";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import { handleColorTextClass } from "@/lib/utils";
import Options from "./options";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";
import { columVariant, columnChildVariant } from "@/variant";
import { Reorder } from "framer-motion";
import ReactGPicker from "react-gcolor-picker";
import { useRouter } from "next/navigation";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import { useClickOutside } from "@/hooks/use-click-outside";
import { on } from "events";

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
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [draggable, setDraggable] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [newColorPalette, setNewColorPalette] = useState<string[]>([]);

  const handleHexToggle = (hex: string) => {
    if (lockedHexes.includes(hex)) {
      setLockedHexes(lockedHexes.filter((h) => h !== hex));
    } else {
      setLockedHexes([...lockedHexes, hex]);
    }
  };

  const handleSetColor = (color: string, index: number) => {
    const newColor = color.replace(/^#/, "");

    if (newColor) {
      const newColors = [...colors];
      newColors[index] = newColor;
      setNewColorPalette(newColors);
    }
    setColorInstance(color);
  };

  const router = useRouter();

  const onClickOutside = () => {
    if (newColorPalette.length) {
      const newRoute = newColorPalette.join("-");
      router.replace(`/colors/${newRoute}`);
    }

    setShowColorPicker(false);
  };

  const ref = useClickOutside(onClickOutside);

  return (
    <Reorder.Item
      dragListener={draggable}
      value={color}
      key={color}
      onDragEnd={() => setDraggable(false)}
      variants={columVariant}
      initial={"start"}
      whileHover={"show"}
      style={{ backgroundColor: colorInstance }}
      className="w-full lg:h-screen h-full flex flex-row-reverse justify-center items-center px-[5px] relative"
    >
      {isDesktop ? (
        <motion.div variants={columnChildVariant}>
          <Options
            color={colorInstance}
            setDraggable={setDraggable}
            toogleHex={handleHexToggle}
            lockedHexes={lockedHexes}
          />
        </motion.div>
      ) : (
        <Options
          color={colorInstance}
          setDraggable={setDraggable}
          toogleHex={handleHexToggle}
          lockedHexes={lockedHexes}
        />
      )}

      {showColorPicker ? (
        <div className="absolute p-2 z-50" ref={ref}>
          {" "}
          <ReactGPicker
            onChange={(value) => handleSetColor(value, colorIndex)}
            value={colorInstance}
            format="hex"
          />
        </div>
      ) : (
        ""
      )}

      <div
        className={`${
          colorTextLuminance === "white" ? "text-white" : "text-black"
        } lg:absolute bottom-14 w-full mb-1 flex flex-col lg:items-center left-0`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <h3
                className={` text-xl  lg:text-[30px] uppercase font-semibold cursor-pointer text-left
`}
                onClick={() => setShowColorPicker(true)}
              >
                {colorInstance.replace(/^#/, "")}

                <br />
              </h3>
            </TooltipTrigger>

            <TooltipContent>Select color</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <p className={`text-[11px] opacity-[0.5] capitalize inset-0 mt-[9px]`}>
          ~{colorName}
        </p>
      </div>
    </Reorder.Item>
  );
};

export default Palette;
