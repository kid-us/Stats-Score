import type { TimelineItem } from "@/types/match-timeline-types";
import MatchEventItem from "./MatchEventItem";
import TimelineDivider from "./Timeline";

interface Props {
  timeline: TimelineItem[];
}

const MatchTimeline = ({ timeline }: Props) => (
  <div className="md:space-y-4 space-y-5">
    {timeline.map((item) =>
      item.type === "divider" ? (
        <TimelineDivider key={item.id} label={item.label} />
      ) : (
        <MatchEventItem key={item.id} event={item} />
      )
    )}
  </div>
);

export default MatchTimeline;
