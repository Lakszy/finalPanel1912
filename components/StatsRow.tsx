import { Calendar, Currency, User } from "lucide-react";
import StatsCard, { STATS_CARDS_VARIANTS } from "./StatsCard";

const STATS_CARDS = [
  {
    Icon: Calendar,
    title: "Appointment",
    value: "656",
  },
  {
    Icon: User,
    title: "Total Patients",
    value: "422",
  },
  {
    Icon: Calendar,
    title: "Total Optimization",
    value: "2430",
  },
  {
    Icon: Currency,
    title: "Total Earning",
    value: "$7892",
    variant: "max-content" as typeof STATS_CARDS_VARIANTS,
  },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_max-content] gap-x-3 p-4">
      {STATS_CARDS.map((card, index) => (
        <StatsCard {...card} key={`stat-card-${index}`} />
      ))}
    </div>
  );
}
