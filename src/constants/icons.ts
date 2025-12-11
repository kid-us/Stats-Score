import {
  ball2,
  substitution,
  yellowCard,
  redCard,
  injury,
  cornerFlag,
  offThePost,
} from "@/assets/images";

export const EVENT_ICONS: Record<string, string> = {
  goal: ball2,
  substitution: substitution,
  yellow: yellowCard,
  red: redCard,
  injury: injury,
  corner: cornerFlag,
  "off-post": offThePost,
};
