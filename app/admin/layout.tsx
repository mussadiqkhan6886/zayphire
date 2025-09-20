import HomeButton from "@/components/adminComponents/HomeButton";
import { Metadata } from "next";
import Link from "next/link";
import { FaList, FaPlus, FaShoppingBag } from "react-icons/fa";

export const metadata : Metadata = {
    title: "Admin panel zayphire",
    description: "Admin panel of zayphire protected data",
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
                <div className="flex items-center justify-between w-full py-3 max-h-[60px] md:px-12 px-2 border-b border-black ">
                    <h1 className="font-bold text-1xl md:text-3xl ">Admin Panel</h1>
                    <div className="flex md:gap-10 gap-4">
                        <Link aria-label="add new product" href={"/admin/addProduct"}><FaPlus /></Link>
                        <Link aria-label="show product list" href={"/admin/productList"}><FaList /></Link>
                        <Link aria-label="show all orders   " href={"/admin/orders"}><FaShoppingBag /></Link>
                    </div>
                    <HomeButton />
                </div>
            {children}
            </div>
        </>
    )
}