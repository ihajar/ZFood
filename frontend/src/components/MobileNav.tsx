import { CookingPot, House, LogIn, Pizza, Settings, UserRound, UsersRound } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <Sheet >
        <SheetTrigger>
            <CookingPot className="w-8 h-8 text-white z-100 "/>
        </SheetTrigger>
        <SheetContent className="bg-[#122D1D] text-[#F8F6F2] space-y-10 ">
            <SheetTitle className="">
                <span className="font-title text-4xl font-extrabold text-[#F8F6F2] ">ZFood.</span>
            </SheetTitle>
            {/* <Separator /> */}
            <SheetDescription className="flex flex-col gap-10 items-center">
                <Link to="/"><House className="w-6 h-6 text-[#F8F6F2]"/></Link>
                <Link to="/"><Pizza className="w-6 h-6 text-[#F8F6F2]"/></Link>
                <Link to="/"><UsersRound className="w-6 h-6 text-[#F8F6F2]"/></Link>
                <Link to="/"><Settings className="w-6 h-6 text-[#F8F6F2]"/></Link>
                <Link to="/"><LogIn className="w-6 h-6 text-[#F8F6F2]"/></Link>

            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}
