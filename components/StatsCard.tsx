import { MdCallEnd } from "react-icons/md";
import { Card } from "./ui/card";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

export let STATS_CARDS_VARIANTS: "max-content" | "full-width";

export type StatsCardProps = {
  Icon: React.JSX;
  title: string;
  value: string;
  className?: string;
  // variant?: typeof STATS_CARDS_VARIANTS;
} & {
  variant: VariantProps<typeof STATS_CARDS_VARIANTS>;
};

export default function StatsCard({
  title,
  value,
  Icon,
  className,
  variant = "full-witdh",
}: StatsCardProps) {
  return (
    <Card
      className={cn(
        "rounded-[18px] flex items-center gap-x-3 p-4",
        variant === "max-content" && "w-[max-content] flex-col justify-center"
      )}
    >
      <div
        className={cn(
          "bg-[#f3f6f3] rounded-md flex items-center justify-center",
          variant === "max-content" && "",
          variant === "full-witdh" && "h-16 w-16"
        )}
      >
        <Icon />
      </div>
      <div>
        <h3 className="text-xl text-gray-500">{title}</h3>
        <span className="text-xl font-medium">{value}</span>
      </div>
    </Card>
  );
}
