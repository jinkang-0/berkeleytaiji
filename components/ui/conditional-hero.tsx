"use client";

import { usePathname } from "next/navigation";
import Hero from "./hero";

export default function ConditionalHero() {
  const pathname = usePathname();
  return pathname === "/" ? <Hero /> : <div style={{ marginTop: "32px" }} />;
}
