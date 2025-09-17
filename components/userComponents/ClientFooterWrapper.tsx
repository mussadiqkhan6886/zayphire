"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/userComponents/Footer";

export default function ClientFooterWrapper() {
  const pathname = usePathname();

  // Show footer only on non-home pages
  if (pathname === "/" || pathname === "/admin") return null;

  return <Footer />;
}
