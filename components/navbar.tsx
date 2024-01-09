import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import IconComponent from "./generics/IconButton";
import { PrimaryInput } from "./Input";

function NavBar() {
  return (
    <div className="flex bg-stone-50 border border-black border-opacity-10 items-center justify-between gap-x-4 border-l px-4 py-4 z-50">
      <div className="flex items-center gap-x-4">
        <PrimaryInput
          LeftComp={<IoMdSearch size={26} />}
          placeholder="Search with us" />
       
        {/* <Link href="/appointment">
          <button className="w-[216px] h-[66px] px-[60px] py-4 bg-[#0D1821] rounded-lg flex-col justify-center items-start inline-flex cursor-pointer">
            <div className="justify-center items-center inline-flex">
              <div className="flex text-white">
                <AiOutlinePlus />
              </div>
              <div className="justify-center items-center flex">
                <div className="text-white text-lg font-semibold whitespace-nowrap items-center">Add patient</div>
              </div>
            </div>
          </button>
        </Link> */}
      </div>
      <div className="flex items-center gap-x-4">
        <IconComponent icon={<IoSettingsOutline />} />
        <IconComponent icon={<FiMessageSquare />} />
        <IconComponent icon={<FaRegBell />} />
        <div className="w-[65px] h-[59.01px] rounded-lg ">
          <Avatar className="w-full h-full hover:cursor-pointer hover:scale-105">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
