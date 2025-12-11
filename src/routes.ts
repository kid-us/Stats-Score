import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Matches from "./routes/Matches";
import MatchDetail from "./routes/MatchDetail";
import layout from "./components/layout";

export const router = createBrowserRouter([
  {
    Component: layout,
    children: [
      { index: true, Component: Home },
      { path: "matches", Component: Matches },
      { path: "matches/:name", Component: MatchDetail },
    ],
  },
]);
