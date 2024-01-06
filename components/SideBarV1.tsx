import { cn } from "@/lib/utils";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import { BiDollar } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiBillLine, RiLogoutBoxLine } from "react-icons/ri";
import { TbPhoto } from "react-icons/tb";
import { usePathname } from "next/navigation";

interface MenuItem {
  href: string;
  icon: React.ElementType;
  title: string;
}

const menuItems: MenuItem[] = [
  { href: "", icon: LayoutGrid, title: "Overview" },
  { href: "message", icon: MdOutlineInventory2, title: "Messages" },
  { href: "patients", icon: BiDollar, title: "Patients" },
  { href: "billing", icon: RiBillLine, title: "Billing" },
  { href: "appointment", icon: GoGraph, title: "Appointment" },
  { href: "payment", icon: TbPhoto, title: "Payment" },
];

export default function SideBarV1() {
  const pathname = usePathname();
  return (
    <div className="grid min-w-[280px] grid-rows-[max-content_1fr_max-content] bg-black text-white">
      <Link href={"/"} className="flex items-center px-6 gap-x-4 h-24">
        <div className="h-12 w-12 rounded-full bg-white"></div>
        <span className="text-lg">Company Name</span>
      </Link>
      <div className="grid grid-cols-1 place-content-start gap-y-4 py-4 px-4">
        {/* <div className="flex items-center gap-x-3 rounded-xl border bg-white px-3 py-3 text-black">
          <div className="h-6 w-6 rounded-full border bg-black"></div>
          <span className="font-medium">Overview</span>
        </div> */}
        {menuItems.map((item, index) => (
          <Link
            href={`/${item.href}`}
            key={`menu-item-${item.href}-${index}`}
            className={cn(
              "flex items-center gap-x-3 rounded-lg px-3 py-3 transition-colors duration-500 ease-in-out",
              "hover:bg-white hover:text-black",
              pathname === `/${item.href}` && "bg-white text-black"
            )}
          >
            <item.icon className="h-6 w-6" />
            <span className="">{item.title}</span>
          </Link>
        ))}
      </div>
      <div className="py-4 px-4">
        <Link
          href={"logout"}
          className={cn(
            "flex items-center gap-x-3 rounded-lg px-3 py-3 transition-colors duration-500 ease-in-out"
          )}
        >
          <RiLogoutBoxLine className="h-6 w-6" />
          <span className="font-medium">Log out</span>
        </Link>
      </div>
    </div>
  );
}
