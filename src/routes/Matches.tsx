import { arsenal, calendar } from "@/assets/images";
import MatchCard from "@/components/MatchCard";
import ScrollableCalendar from "@/components/ScrollableCaledar";
import { Button } from "@/components/ui/button";
import { useGetMatches } from "@/hooks/useGetMatches";
import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  Heart,
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
  const { data: pl } = useGetMatches("PL", "16");
  // Champions League Data
  const { data: cl } = useGetMatches("CL", "6");

  return (
    <div className="lg:space-y-4">
      <p className="text-[20px] lg:block hidden">Matches</p>

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
        <div className="flex gap-4 h-9">
          {tabs.map((t) => (
            <Button
              onClick={() => setActiveTab(t.name)}
              className={`flex gap-2 py-2 px-3 h-full hover:bg-primary/50 text-[14px] ${
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
                className={`flex items-center justify-center w-4 h-4 bg-black rounded-full text-[12px font-semibold] ${
                  activeTab === t.name ? "text-primary" : "text-white"
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
        {pl && <MatchCard data={pl} />}

        {/* Live and Upcoming Matches Matches */}
        <div className="rounded-xl bg-card p-4 space-y-3">
          <div className="flex justify-between">
            <h1 className="text-[14px]">English Premier League</h1>
            <ChevronRight className="w-[18px] h-[18px]" />
          </div>

          {/* Live */}
          <div className="flex h-[76px] hover:bg-background transition-colors duration-500 items-center py-2 border-l-5 border-primary">
            <div className="flex flex-col w-14 ps-2 justify-center items-center bg-linear-to-r from-primary/10 h-[76px]">
              <p className="text-primary text-[12px]">63'</p>
              <div className="w-4 overflow-hidden">
                <p className="w-4 h-0.5 rounded-[100px] mt-1 bg-primary slide-bar"></p>
              </div>
            </div>
            <div className="flex justify-between w-full">
              {/* Teams */}
              <div className="space-y-2 p-2 items-center">
                <div className="flex items-center gap-2">
                  <img src={arsenal} alt="Arsenal" className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p className="text-[12px]">Arsenal</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={arsenal} alt="Arsenal" className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p className="text-[12px]">Valencia</p>
                  </div>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center space-y-2 gap-2">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[11px]">2</p>
                  <p className="text-[11px]">0</p>
                </div>
                <EllipsisVertical className="w-4 h-4 ms-2" />
              </div>
            </div>
          </div>

          <hr className="border-[#292B41]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
