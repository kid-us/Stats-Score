import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const layout = () => {
  return (
    <main>
      <Navbar />
      <div className="lg:py-4 max-w-[820px] mx-auto pb-8">
        {/* <Outlet /> */}
      </div>
    </main>
  );
};

export default layout;
