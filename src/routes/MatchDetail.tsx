import { leftArrow } from "@/assets/images";
import MatchTimeline from "@/components/MatchTimeline";
import { useGetMatchesDetail } from "@/hooks/useGetMatchDetail";
import { formatTime } from "@/lib/formatDate";
import type { TimelineItem } from "@/types/match-timeline-types";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const tabs: string[] = [
  "Details",
  "Odds",
  "Lineups",
  "Events",
  "Stats",
  "Standings",
];

// Date to Day and Month
function formatDateToDayMonth(dateString: string): string {
  const date = new Date(dateString);

  // Months
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];

  return `${day} ${month}`;
}

const MatchDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Events");

  const { data, isLoading } = useGetMatchesDetail(id!);

  // Mock Match event
  const matchTimeline: TimelineItem[] = [
    {
      id: 0,
      type: "divider",
      label: `Fulltime  ${data?.score.fullTime.home} - ${data?.score.fullTime.away}`,
    },
    {
      id: 1,
      type: "event",
      eventType: "substitution",
      minute: "90+’",
      side: "away",
      player: "Issak",
      assist: "Konate",
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
      minute: "65’",
      side: "away",
      player: "Konate",
    },
    {
      id: 4,
      type: "event",
      eventType: "red",
      minute: "75’",
      description: "Sent Off",
      side: "away",
      player: "Konate",
    },

    {
      id: 4,
      type: "event",
      eventType: "off-post",
      minute: "55’",
      side: "home",
      player: "Rice",
    },
    // Divider
    {
      id: 10,
      type: "divider",
      label: `Halftime ‘ ${data?.score.halfTime.home} - ${data?.score.halfTime.away}`,
    },

    {
      id: 1,
      type: "event",
      eventType: "injury",
      minute: "44’",
      side: "home",
      player: "Trosard",
    },
    {
      id: 1,
      type: "event",
      eventType: "corner",
      minute: "34’",
      side: "home",
      player: "2nd Corner",
    },
    {
      id: 2,
      type: "event",
      eventType: "goal",
      minute: "29’",
      side: "home",
      player: "Gyokeres",
      assist: "Saka",
    },
    {
      id: 3,
      type: "event",
      eventType: "yellow",
      minute: "15’",
      side: "away",
      player: "Salah",
    },
    {
      id: 3,
      type: "event",
      eventType: "corner",
      minute: "15’",
      side: "home",
      player: "1st Corner",
    },
    {
      id: 3,
      type: "event",
      eventType: "corner",
      minute: "7’",
      side: "away",
      player: "1st Corner",
    },

    // Divider
    {
      id: 11,
      type: "divider",
      label: `Kick Off ${formatTime(data ? data.utcDate : "")}`,
    },
  ];

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[30dvh]">
        <Loader className="animate-spin" />
        <p className="text-sm mt-4 text-muted">
          Loading match events please wait ...
        </p>
      </div>
    );
  }

  return (
    <>
      {data && (
        <div className="space-y-4">
          <div className="bg-card lg:rounded-xl px-4 md:py-2 py-4 space-y-8">
            <div className="flex items-center gap-4">
              <img
                src={leftArrow}
                alt="Left Arrow"
                onClick={() => navigate(-1)}
                className="w-6 h-6 cursor-pointer"
              />
              <p className="text-[14px]">{data.competition.name}</p>
            </div>

            <div className="flex items-center justify-center lg:gap-40 gap-20">
              {/* Home Team */}
              <div className="flex flex-col justify-center items-center relative">
                <img
                  src={data.homeTeam.crest}
                  alt="Arsenal"
                  className="w-[42px] h-[43.45px]"
                />
                <div className="absolute top-0 -right-3 w-2.5 h-3 bg-[#E7D93F] flex items-center justify-center">
                  <span className="text-black text-[10px]">2</span>
                </div>
                <p className="text-[11px] md:mt-0 mt-1 md:text-[14px] w-full">
                  {data.homeTeam.shortName}
                </p>
              </div>

              {/* Result */}
              <div className="text-center space-y-1">
                <p className="uppercase text-[11px]">
                  {formatDateToDayMonth(data.utcDate)}
                </p>
                <div className="flex text-[22px] gap-2 font-semibold">
                  <p>{data.score.fullTime.home}</p>
                  <p>-</p>
                  <p>{data.score.fullTime.away}</p>
                </div>
                <p className="text-[] bg-destructive px-1 rounded text-[10px] lowercase first-letter:uppercase">
                  {data.status}
                </p>
              </div>

              {/* Away Team */}
              <div className="flex flex-col justify-center items-center relative">
                <img
                  src={data.awayTeam.crest}
                  alt="Arsenal"
                  className="w-[42px] h-[43.45px]"
                />
                <div className="absolute top-0 -left-6 w-2.5 h-3 bg-destructive flex items-center justify-center">
                  <span className="text-black text-[10px]">2</span>
                </div>
                <div className="absolute top-0 -left-3 w-2.5 h-3 bg-[#E7D93F] flex items-center justify-center">
                  <span className="text-black text-[10px]">2</span>
                </div>
                <p className="text-[11px] md:mt-0 mt-1 md:text-[14px]">
                  {data.awayTeam.shortName}
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-nowrap no-scrollbar overflow-x-scroll md:justify-center items-center gap-4">
              {tabs.map((t) => (
                <button
                  onClick={() => setActiveTab(t)}
                  className={`p-2 text-[12px] md:text-[14px] ${
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
      )}
    </>
  );
};

export default MatchDetail;
