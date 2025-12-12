import { createBrowserRouter } from "react-router-dom";
import Matches from "./routes/Matches";
import MatchDetail from "./routes/MatchDetail";
import layout from "./components/layout";
import Standings from "./routes/Standings";
import Live from "./routes/Live";
import Teams from "./routes/Teams";
import Comparison from "./routes/Comparison";
import Statics from "./routes/Statics";
import Venues from "./routes/Venues";

export const router = createBrowserRouter([
  {
    Component: layout,
    children: [
      { index: true, Component: Matches },
      { path: "matches", Component: Matches },
      { path: "match/:id", Component: MatchDetail },
      { path: "live", Component: Live },
      { path: "standings", Component: Standings },
      { path: "teams", Component: Teams },
      { path: "comparison", Component: Comparison },
      { path: "statics", Component: Statics },
      { path: "venues", Component: Venues },
    ],
  },
]);
