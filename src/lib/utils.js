import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// "cn" for "class name"
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};