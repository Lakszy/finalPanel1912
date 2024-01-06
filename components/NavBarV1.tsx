import { Bell, Plus, Search, Settings } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

export default function NavBarV1() {
  return (
    <div className="flex justify-between gap-x-4 px-4 py-4 h-24 border">
      <div className="flex gap-x-6">
        <div className="h-full w-full min-w-[700px] rounded-[22px] border bg-white border-[#f0e4e4] relative overflow-hidden flex items-center px-4">
          <Search className=" text-gray-500" size={30} />
          <Input
            placeholder="Search patients, appointment..."
            className="border-none outline-none ring-0 bg-transparent focus-visible:ring-0 h-full leading-6 text-lg placeholder:text-lg placeholder:text-gray-500 placeholder:leading-6 caret-size:h-16"
          />
        </div>
        <Button className="h-full rounded-[22px] border bg-black border-black flex items-center gap-x-4 px-8">
          <Plus className="text-white" size={30} />
          <span className="text-white text-lg leading-6">Add Patient</span>
        </Button>
      </div>
      <div className="flex items-center gap-x-4">
        <Button
          variant={"outline"}
          className="h-full w-20 bg-white border-[#f0e4e4] rounded-[22px] border"
        >
          <Bell className="text-gray-500" size={30} />
        </Button>
        <Button
          variant={"outline"}
          className="h-full w-20 bg-white border-[#f0e4e4] rounded-[22px] border"
        >
          <Settings className="text-gray-500" size={30} />
        </Button>
        <div className="h-full w-20 bg-white border-[#f0e4e4] rounded-[22px] border overflow-hidden relative">
          <Image
            src="https://static.independent.co.uk/2022/08/22/10/mark%20zuckerberg%20metaverse%20avatar.png?width=1200&height=1200&fit=crop"
            alt="avatar"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
