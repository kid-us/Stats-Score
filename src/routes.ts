import { createBrowserRouter } from "react-router-dom";
import Matches from "./routes/Matches";
import MatchDetail from "./routes/MatchDetail";
import layout from "./components/layout";

export const router = createBrowserRouter([
  {
    Component: layout,
    children: [
      { index: true, Component: Matches },
      { path: "matches", Component: Matches },
      { path: "match/:id", Component: MatchDetail },
    ],
  },
]);
