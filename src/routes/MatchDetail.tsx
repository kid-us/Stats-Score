import { arsenal, leftArrow } from "@/assets/images";
import MatchTimeline from "@/components/MatchTimeline";
import type { TimelineItem } from "@/types/match-timeline-types";
import { useState } from "react";

const tabs: string[] = [
  "Details",
  "Odds",
  "Lineups",
  "Events",
  "Stats",
  "Standings",
];

const MatchDetail = () => {
  const [activeTab, setActiveTab] = useState("Events");

  const matchTimeline: TimelineItem[] = [
    {
      id: 0,
      type: "divider",
      label: "Fulltime ‘ 2 - 1",
    },
    {
      id: 1,
      type: "event",
      eventType: "substitution",
      minute: "89’",
      side: "home",
      player: "Gyokores",
      assist: "Odegard",
    },
    {
      id: 2,
      type: "event",
      eventType: "goal",
      minute: "82’",
      side: "home",
      player: "Saka",
      assist: "Rice",
    },
    {
      id: 3,
      type: "event",
      eventType: "yellow",
      minute: "75’",
      side: "away",
      player: "Konate",
    },

    // Divider
    {
      id: 10,
      type: "divider",
      label: "Halftime ‘ 2 - 1",
    },

    {
      id: 1,
      type: "event",
      eventType: "substitution",
      minute: "89’",
      side: "home",
      player: "Gyokores",
      assist: "Odegard",
    },
    {
      id: 2,
      type: "event",
      eventType: "goal",
      minute: "82’",
      side: "home",
      player: "Saka",
      assist: "Rice",
    },
    {
      id: 3,
      type: "event",
      eventType: "yellow",
      minute: "75’",
      side: "away",
      player: "Konate",
    },

    // Divider
    {
      id: 11,
      type: "divider",
      label: "Kickoff ‘ 13:00",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-card lg:rounded-xl px-4 md:py-2 py-4 space-y-8">
        <div className="flex items-center gap-4">
          <img src={leftArrow} alt="Left Arrow" className="w-6 h-6" />
          <p className="text-[14px]">English Premier League</p>
        </div>

        <div className="flex items-center justify-center lg:gap-40 gap-20">
          {/* Home Team */}
          <div className="flex flex-col justify-center items-center relative">
            <img src={arsenal} alt="Arsenal" className="w-[42px] h-[43.45px]" />
            <div className="absolute top-0 -right-3 w-2.5 h-3 bg-[#E7D93F] flex items-center justify-center">
              <span className="text-black text-[10px]">2</span>
            </div>
            <p className="text-[14px]">Arsenal</p>
          </div>

          {/* Result */}
          <div className="text-center space-y-1">
            <p className="uppercase text-[11px]">11 Aug</p>
            <div className="flex text-[22px] gap-2 font-semibold">
              <p>2</p>
              <p>-</p>
              <p>1</p>
            </div>
            <p className="text-[] bg-destructive px-1 rounded text-[10px]">
              Finished
            </p>
          </div>

          {/* Away Team */}
          <div className="flex flex-col justify-center items-center relative">
            <img src={arsenal} alt="Arsenal" className="w-[42px] h-[43.45px]" />
            <div className="absolute top-0 -left-6 w-2.5 h-3 bg-destructive flex items-center justify-center">
              <span className="text-black text-[10px]">2</span>
            </div>
            <div className="absolute top-0 -left-3 w-2.5 h-3 bg-[#E7D93F] flex items-center justify-center">
              <span className="text-black text-[10px]">2</span>
            </div>
            <p className="text-[14px]">Arsenal</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-nowrap no-scrollbar overflow-x-scroll md:justify-center items-center gap-4">
          {tabs.map((t) => (
            <button
              onClick={() => setActiveTab(t)}
              className={`p-2 text-[14px] ${
                activeTab === t
                  ? "underline underline-offset-12 md:underline-offset-8 decoration-2 decoration-primary"
                  : ""
              } `}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4">
        <div className="rounded-lg bg-card px-4 md:py-2 py-4">
          <div className="py-2">
            <p className="text-[14px]">{activeTab}</p>
          </div>

          <div className="space-y-4">
            {/* Match Event */}
            <MatchTimeline timeline={matchTimeline} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetail;
