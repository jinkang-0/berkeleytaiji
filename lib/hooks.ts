"use client";

import { useEffect, useState } from "react";
import BREAKPOINTS from "./breakpoints";
import { remToPx } from "./utils-client";
import { Breakpoint } from "./types";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};

const determineBreakpoint = (width: number): Breakpoint => {
  if (width < remToPx(parseFloat(BREAKPOINTS.sm))) return "sm";
  if (width < remToPx(parseFloat(BREAKPOINTS.md))) return "md";
  if (width < remToPx(parseFloat(BREAKPOINTS.lg))) return "lg";
  return "xl";
};

export const useCurrentBreakpoint = () => {
  const { width } = useWindowDimensions();
  const [breakpoint, setBreakpoint] = useState(determineBreakpoint(width));

  useEffect(() => {
    setBreakpoint(determineBreakpoint(width));
  }, [width]);

  return breakpoint;
};
