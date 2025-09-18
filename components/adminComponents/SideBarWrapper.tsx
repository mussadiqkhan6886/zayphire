'use client';

import { usePathname } from "next/navigation"
import SideBar from "./SideBar";

export const SideBarWrapper = () => {
    const pathname = usePathname()

    if(pathname === "/admin/login") return null

    return <SideBar />
}