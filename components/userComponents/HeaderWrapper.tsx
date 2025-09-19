"use client";

import { usePathname } from "next/navigation";
import Header from "./HeaderMain";

export default function HeaderWrapper() {
  const pathname = usePathname();

  if (pathname === "/" || pathname.startsWith("/admin") || pathname === "/checkout" ) return null;

  return <Header />;
}
