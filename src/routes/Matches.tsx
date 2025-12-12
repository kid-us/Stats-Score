import { calendar } from "@/assets/images";
import MatchCard from "@/components/MatchCard";
import ScrollableCalendar from "@/components/ScrollableCaledar";
import { Button } from "@/components/ui/button";
import { useGetMatches } from "@/hooks/useGetMatches";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Loader,
  Radio,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

const tabs: { name: string; value: number; icon?: LucideIcon }[] = [
  { name: "All", value: 6 },
  { name: "Live", value: 4, icon: Radio },
  { name: "Favorites", value: 2, icon: Heart },
];

const Contact = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  // Premier League Data
  const { data: pl, isLoading: isPLLoading } = useGetMatches("PL", "17");
  // Champions League Data
  const { data: cl, isLoading: isCLLoading } = useGetMatches("CL", "6");

  if (isCLLoading || isPLLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[30dvh]">
        <Loader className="animate-spin" />
        <p className="text-sm mt-4 text-muted">
          Loading matches please wait ...
        </p>
      </div>
    );
  }

  return (
    <div className="lg:space-y-4">
      <p className="text-[20px] lg:block hidden font-semibold">Matches</p>

      {/* Calendar */}
      {/* Large and Medium Device Calendar */}
      <div className="md:flex hidden justify-between items-center bg-card py-2 px-4 h-14 rounded-xl">
        <button>
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2.5">
          <img src={calendar} />
          <p>Today</p>
        </div>

        <button>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Small Device Calendar */}
      <div className="md:hidden">
        <ScrollableCalendar />
      </div>

      <div className="space-y-4 p-4">
        {/* Tabs */}
        <div className="md:flex grid grid-cols-3 gap-4 h-9">
          {tabs.map((t) => (
            <Button
              key={t.name}
              onClick={() => setActiveTab(t.name)}
              className={`flex gap-2 group py-2 px-3 h-full ${
                activeTab !== t.name &&
                "hover:bg-transparent hover:text-lime-300"
              } text-[14px] ${
                activeTab === t.name ? "bg-primary text-black" : "bg-card"
              }`}
            >
              {t.icon && (
                <t.icon
                  fill={activeTab === t.name ? "" : "#fff"}
                  className={`${
                    activeTab === t.name ? "text-black" : "text-white"
                  }`}
                />
              )}

              {t.name}
              <p
                className={`flex items-center justify-center w-4 h-4 bg-black rounded-full text-[12px]  font-semibold ${
                  activeTab === t.name
                    ? "text-primary"
                    : "text-white hover:text-lime-300!"
                }`}
              >
                {t.value}
              </p>
            </Button>
          ))}
        </div>

        {/* Champions League */}
        {cl && <MatchCard data={cl} />}

        {/* Premier League */}
        {pl && <MatchCard data={pl} hasLive />}
      </div>
    </div>
  );
};

export default Contact;
