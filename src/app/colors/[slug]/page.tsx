"use client";
import React, { KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import Palette from "@/components/palette";
import { Reorder, animate } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ViewDialog } from "@/components/quick-view-dialog";
import { SaveDialog } from "@/components/save-dialog";
import { Button } from "@/components/ui/button";
import randomColor from "randomcolor";
import { useRouter } from "next/navigation";
import { ExportDialog } from "@/components/export-dialog";
import { usePDF } from "react-to-pdf";
import SavedPalettes from "@/components/saved-palettes";
import { MenuIcon } from "lucide-react";

const DynamicPage = ({ params }: { params: { slug: string } }) => {
  const generatedColors = params.slug;
  const colors: undefined | string[] | any =
    generatedColors && generatedColors.split("-");

  const [colorPalettes, setColorPalettes] = useState(colors);
  const [lockedHexes, setLockedHexes] = useState<string[]>([]);
  const [showSavedPalettes, setShowSavedPalettes] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const dynamicAxis = isDesktop ? "x" : "y";

  const navigate = useRouter();

  const handleGenerateNewPalette = (
    e: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>,
    eventType: string
  ) => {
    if (
      eventType === "keydown" &&
      (e as KeyboardEvent<HTMLDivElement>).key !== " " &&
      (e as KeyboardEvent<HTMLDivElement>).key !== "Spacebar"
    ) {
      return;
    }

    // Generate five different colors
    const randomColors = Array.from({ length: 5 }, () =>
      randomColor({
        hue: "random",
        luminosity: "random",
      })
    );

    const allColors = [...lockedHexes, ...randomColors].slice(0, 5);

    const routeParam = allColors
      .map((color) => color.replace("#", ""))
      .join("-");
    if (eventType === "keydown" || eventType === "click") {
      navigate.replace(`/colors/${routeParam}`);
    }
  };

  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "palette.pdf",
    page: { orientation: "landscape", format: "a5" },
  });

  useEffect(() => {
    animate(".menuicon", {
      rotate: showSavedPalettes ? 90 : 0,
    });
  }, [showSavedPalettes]);

  return (
    <div
      className=""
      tabIndex={0}
      onKeyDown={(e) => handleGenerateNewPalette(e, "keydown")}
    >
      <div className="flex lg:absolute top-[4.1rem] z-50 bg-white justify-between items-center w-full p-2 border-b-2">
        <p className="opacity-[0.5] hidden lg:block">
          Press the space bar to generate a new color palette.
        </p>

        <Button
          onClick={(e) => handleGenerateNewPalette(e, "click")}
          className="lg:hidden block"
        >
          Generate
        </Button>

        <div className="flex items-center">
          <ViewDialog colors={colorPalettes} />
          <SaveDialog colors={colorPalettes} />
          <ExportDialog targetRef={targetRef} handleExportPdf={toPDF} />
          <Button className="border-none" variant="outline">
            <MenuIcon
              className="menuicon"
              onClick={() => setShowSavedPalettes(!showSavedPalettes)}
            />
          </Button>
        </div>
      </div>

      <Reorder.Group
        values={colorPalettes}
        ref={targetRef}
        onReorder={setColorPalettes}
        axis={dynamicAxis}
        className="flex lg:flex-row flex-col w-full h-screen"
      >
        {colorPalettes.map((color: string, index: number) => (
          <Palette
            key={color}
            color={color}
            colorIndex={index}
            colors={colorPalettes}
            lockedHexes={lockedHexes}
            setLockedHexes={setLockedHexes}
          />
        ))}
        {showSavedPalettes && (
          <SavedPalettes setShowSavedPalettes={setShowSavedPalettes} />
        )}
      </Reorder.Group>
    </div>
  );
};

export default DynamicPage;
