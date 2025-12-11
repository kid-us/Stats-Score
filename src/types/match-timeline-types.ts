export type EventSide = "home" | "away";

export type EventType =
  | "goal"
  | "substitution"
  | "yellow"
  | "red"
  | "injury"
  | "corner"
  | "off-post";

// Real match events
export interface MatchEvent {
  id: number;
  type: "event";
  eventType: EventType;
  side: EventSide;
  minute: string;
  player?: string;
  assist?: string;
  description?: string;
}

// Timeline dividers (halftime, kickoff)
export interface TimelineDivider {
  id: number;
  type: "divider";
  label: string;
}

// Union (the timeline will display both)
export type TimelineItem = MatchEvent | TimelineDivider;
