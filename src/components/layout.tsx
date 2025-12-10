import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default layout;
