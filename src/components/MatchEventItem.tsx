import { EVENT_ICONS } from "@/constants/icons";
import type { MatchEvent } from "@/types/match-timeline-types";

interface Props {
  event: MatchEvent;
}

const MatchEventItem = ({ event }: Props) => {
  const isHome = event.side === "home";
  const icon = EVENT_ICONS[event.eventType];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-center w-full gap-2">
        {/* HOME SIDE */}
        {isHome ? (
          <div className="flex w-1/3 items-center justify-end gap-3">
            <div>
              <p className="text-[12px]">{event.player}</p>
              {event.assist && (
                <p className="text-[12px] text-muted">{event.assist}</p>
              )}
              {event.description && (
                <p className="text-[12px] text-muted">{event.description}</p>
              )}
            </div>
            <img src={icon} className="w-3 h-3" />
            <div className="md:w-8 w-6">
              <hr className="border-[#292B41] md:w-8 w-6" />
            </div>
          </div>
        ) : (
          <hr className="border-transparent w-1/3" />
        )}

        {/* MINUTE */}
        <p
          className={`text-[12px] w-12 ${
            event.eventType === "goal"
              ? "bg-primary text-black"
              : "bg-[#26273B]"
          } text-center rounded-full py-0.5`}
        >
          {event.minute}
        </p>

        {/* AWAY SIDE */}
        {!isHome ? (
          <div className="flex w-1/3 items-center justify-start gap-3">
            <hr className="border-[#292B41] w-8" />
            <img src={icon} className="w-3 h-3" />
            <div>
              <p className="text-[12px]">{event.player}</p>
              {event.assist && (
                <p className="text-[12px] text-muted">{event.assist}</p>
              )}
              {event.description && (
                <p className="text-[12px] text-muted">{event.description}</p>
              )}
            </div>
          </div>
        ) : (
          <hr className="border-transparent w-1/3" />
        )}
      </div>
    </div>
  );
};

export default MatchEventItem;
