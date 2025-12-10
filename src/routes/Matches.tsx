import { arsenal, calendar } from "@/assets/images";
import { Button } from "@/components/ui/button";
import {
  Check,
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

  return (
    <div className="lg:space-y-4">
      <p className="text-[20px] lg:block hidden">Matches</p>

      {/* Calendar */}
      <div className="flex justify-between items-center bg-card py-2 px-4 h-14 rounded-xl">
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

        {/* Ended Match */}
        <div className="rounded-xl bg-card p-4 space-y-3">
          <div className="flex justify-between">
            <h1 className="text-[14px]">UEFA Champions League</h1>
            <ChevronRight className="w-[18px] h-[18px]" />
          </div>

          {/* First Match with Agg */}
          <div className="flex h-[76px] items-center p-2 border-l-5 border-destructive">
            <p className="text-destructive w-14 flex justify-center text-[12px]">
              FT
            </p>
            <div className="flex justify-between w-full">
              {/* Teams */}
              <div className="space-y-2 p-2 items-center">
                <div className="flex items-center gap-2">
                  <img src={arsenal} alt="Arsenal" className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p className="text-[12px]">Arsenal</p>
                    <p className="flex items-center justify-center gap-0.5 bg-[#26273B] text-primary rounded-full px-2 py-1 text-[8px]">
                      <Check className="w-[11px] h-[11px]" />
                      AGG
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={arsenal} alt="Arsenal" className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p className="text-[12px]">Valencia</p>
                    <p className="flex items-center justify-center gap-0.5 bg-[#26273B] text-primary rounded-full px-2 py-1 text-[8px] uppercase]">
                      <Check className="w-[11px] h-[11px]" />
                      Pen
                    </p>
                  </div>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center space-y-2 p-2 gap-2">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[#6B7280] text-[11px]">[2]</p>
                  <p className="text-[#6B7280] text-[11px]">[0]</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[11px]">2</p>
                  <p className="text-[11px]">0</p>
                </div>
                <EllipsisVertical className="w-4 h-4" />
              </div>
            </div>
          </div>

          <hr className="border-[#292B41]" />

          {/* First Match with Agg */}
          <div className="flex h-[76px] items-center p-2 border-l-5 border-destructive">
            <p className="text-destructive w-14 flex justify-center text-[12px]">
              FT
            </p>
            <div className="flex justify-between w-full">
              {/* Teams */}
              <div className="space-y-2 p-2 items-center">
                <div className="flex items-center gap-2">
                  <img src={arsenal} alt="Arsenal" className="w-4 h-4" />
                  <div className="flex gap-2 items-center">
                    <p className="text-[12px]">Arsenal</p>
                    <p className="rotate-12 w-1.5 h-2 rounded-[1px] bg-destructive"></p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={arsenal} alt="Arsenal" className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p className="text-[12px]">Valencia</p>
                    <p className="flex items-center justify-center gap-0.5 bg-[#26273B] text-primary rounded-full px-2 py-1 text-[8px] uppercase]">
                      <Check className="w-[11px] h-[11px]" />
                      Pen
                    </p>
                  </div>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center space-y-2 p-2 gap-2">
                {/* Aggregate Score */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[#6B7280] text-[11px]">[2]</p>
                  <p className="text-[#6B7280] text-[11px]">[0]</p>
                </div>
                {/* Latest Score */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[11px]">2</p>
                  <p className="text-[11px]">0</p>
                </div>
                <EllipsisVertical className="w-4 h-4" />
              </div>
            </div>
          </div>

          <hr className="border-[#292B41]" />
        </div>

        {/* Live and Upcoming Matches Matches */}
        <div className="rounded-xl bg-card p-4 space-y-3">
          <div className="flex justify-between">
            <h1 className="text-[14px]">English Premier League</h1>
            <ChevronRight className="w-[18px] h-[18px]" />
          </div>

          {/* Live */}
          <div className="flex h-[76px] items-center pe-2 py-2 border-l-5 border-primary">
            <div className="flex flex-col w-14 ps-2 justify-center items-center bg-linear-to-r from-primary/10 h-[76px]">
              <p className="text-primary text-[12px]">63'</p>
              <p className="w-4 h-0.5 rounded-[100px] mt-1 bg-primary"></p>
            </div>
            <div className="flex justify-between w-full">
              {/* Teams */}
              <div className="space-y-2 p-2 items-center">
                <div className="flex items-center gap-2">
                  <img src={arsenal} alt="Arsenal" className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p className="text-[12px]">Arsenal</p>
                    <p className="flex items-center justify-center gap-0.5 bg-[#26273B] text-primary rounded-full px-2 py-1 text-[8px]">
                      <Check className="w-[11px] h-[11px]" />
                      AGG
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={arsenal} alt="Arsenal" className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p className="text-[12px]">Valencia</p>
                    <p className="flex items-center justify-center gap-0.5 bg-[#26273B] text-primary rounded-full px-2 py-1 text-[8px] uppercase]">
                      <Check className="w-[11px] h-[11px]" />
                      Pen
                    </p>
                  </div>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center space-y-2 p-2 gap-2">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[11px]">2</p>
                  <p className="text-[11px]">0</p>
                </div>
                <EllipsisVertical className="w-4 h-4" />
              </div>
            </div>
          </div>

          <hr className="border-[#292B41]" />

          {/* Upcoming */}
          <div className="flex h-[76px] items-center p-2 border-l-5 border-[#374151]">
            <p className="text-white w-14 flex justify-center text-[12px]">
              23:00
            </p>
            <div className="flex justify-between w-full">
              {/* Teams */}
              <div className="space-y-2 p-2 items-center">
                <div className="flex items-center gap-2">
                  <img src={arsenal} alt="Arsenal" className="w-4 h-4" />
                  <div className="flex gap-2 items-center">
                    <p className="text-[12px]">Arsenal</p>
                    <p className="rotate-12 w-1.5 h-2 rounded-[1px] bg-destructive"></p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={arsenal} alt="Arsenal" className="w-4 h-4" />
                  <div className="flex gap-2">
                    <p className="text-[12px]">Valencia</p>
                    <p className="flex items-center justify-center gap-0.5 bg-[#26273B] text-primary rounded-full px-2 py-1 text-[8px] uppercase]">
                      <Check className="w-[11px] h-[11px]" />
                      Pen
                    </p>
                  </div>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center space-y-2 p-2 gap-2">
                <EllipsisVertical className="w-4 h-4" />
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
