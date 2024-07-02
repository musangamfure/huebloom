import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";

extend([a11yPlugin]);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleColorTextClass = (color: string) => {
  const luminance = colord(color).luminance();

  return luminance < 0.3 ? "white" : "black";
};
