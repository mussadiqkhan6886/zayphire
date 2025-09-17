"use client";

import { usePathname } from "next/navigation";
import Header from "./HeaderMain";

export default function HeaderWrapper() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/admin") return null;

  return <Header />;
}
