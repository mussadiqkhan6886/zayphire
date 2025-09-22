import HeaderWrapper from "@/components/adminComponents/HeaderWrapper";
import { Metadata } from "next";

import { Toaster } from "react-hot-toast"

export const metadata : Metadata = {
    title: "Admin panel zayphire",
    description: "Admin panel of zayphire protected data where admin can change data and update it ",
    robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },

}

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className="flex flex-col w-full">
            <HeaderWrapper />
            {children}
            <Toaster position="top-right" reverseOrder={false} />
            </div>
        </>
    )
}