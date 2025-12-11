import { formatTime } from "@/lib/formatDate";
import type { CompetitionMatchesResponse } from "@/types/matches-types";
import { Check, ChevronRight, EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  data: CompetitionMatchesResponse;
}

const MatchCard = ({ data }: Props) => {
  return (
    <div className="rounded-xl bg-card p-4 space-y-3">
      <div className="flex justify-between">
        <h1 className="text-[14px]">{data.competition.name}</h1>
        <ChevronRight className="w-[18px] h-[18px]" />
      </div>

      {data.matches.slice(0, 3).map((match, index) => (
        <Link key={match.id} to={`/match/${match.id}`} className="space-y-3">
          <div
            className={`flex h-[76px] items-center hover:bg-background transition-colors duration-500 ${
              match.status === "FINISHED"
                ? "border-destructive ps-2 border-l-5"
                : match.status === "TIMED"
                ? "border-l-5 border-[#374151]"
                : "border-l-5 border-primary pe-2 py-2"
            }`}
          >
            {match.status === "FINISHED" ? (
              <p className="text-destructive w-14 flex justify-center text-[12px]">
                FT
              </p>
            ) : match.status === "TIMED" ? (
              <p className="text-white w-14 flex justify-center text-[12px]">
                {formatTime(match.utcDate)}
              </p>
            ) : (
              <div className="flex flex-col w-14 ps-2 justify-center items-center bg-linear-to-r from-primary/10 h-[76px]">
                <p className="text-primary text-[12px]">63'</p>
                <p className="w-4 h-0.5 rounded-[100px] mt-1 bg-primary"></p>
              </div>
            )}

            <div className="flex justify-between w-full">
              {/* Teams */}
              <div className="space-y-2 p-2 items-center">
                <div className="flex items-center gap-2">
                  <img
                    src={match.homeTeam.crest}
                    alt="Arsenal"
                    className="w-4 h-4"
                  />
                  <div className="flex gap-2 items-center">
                    <p className="text-[12px]">{match.homeTeam.shortName}</p>
                    {data.competition.code === "CL" &&
                      (index === 0 ? (
                        <p className="rotate-12 w-1.5 h-2 rounded-[1px] bg-destructive"></p>
                      ) : (
                        <p className="flex items-center justify-center gap-0.5 bg-[#26273B] text-primary rounded-full px-2 py-1 text-[8px]">
                          <Check className="w-[11px] h-[11px]" />
                          AGG
                        </p>
                      ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={match.awayTeam.crest}
                    alt="Arsenal"
                    className="w-4 h-4"
                  />
                  <div className="flex gap-2">
                    <p className="text-[12px]">{match.awayTeam.shortName}</p>
                    {data.competition.code === "CL" && index === 1 && (
                      <p className="flex items-center justify-center gap-0.5 bg-[#26273B] text-primary rounded-full px-2 py-1 text-[8px] uppercase">
                        <Check className="w-[11px] h-[11px]" />
                        Pen
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center space-y-2 gap-2">
                {data.competition.code === "CL" && (
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-[#6B7280] text-[11px]">
                      [{match.score.halfTime.home}]
                    </p>
                    <p className="text-[#6B7280] text-[11px]">
                      [{match.score.halfTime.away}]
                    </p>
                  </div>
                )}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[11px]">{match.score.fullTime.home}</p>
                  <p className="text-[11px]">{match.score.fullTime.away}</p>
                </div>
                <EllipsisVertical className="w-4 h-4 ms-2" />
              </div>
            </div>
          </div>

          <hr className="border-[#292B41]" />
        </Link>
      ))}
    </div>
  );
};

export default MatchCard;
