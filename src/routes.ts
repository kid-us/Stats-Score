import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import EventDetail from "./routes/EventDetail";
import layout from "./components/layout";

export const router = createBrowserRouter([
  {
    Component: layout,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: Contact },
      { path: "contact/:name", Component: EventDetail },
    ],
  },
]);
