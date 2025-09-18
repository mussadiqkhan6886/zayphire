import HomeButton from "@/components/adminComponents/HomeButton";
import { SideBarWrapper } from "@/components/adminComponents/SideBarWrapper";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className="flex ">
                <SideBarWrapper />
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black ">
                    <h1 className="font-bold text-3xl ">Admin Panel</h1>
                    <HomeButton />
                </div>
            {children}
            </div>
            </div>
        </>
    )
}