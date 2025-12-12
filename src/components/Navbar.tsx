import { ball, englandFlag, logo, menu, worldMapIcon } from "@/assets";
import { nav } from "@/constants/navItems";
import { Link, NavLink } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";

const Navbar = () => {
  const [selectedLeague, setSelectedLeague] = useState("premier_league");
  const [selectedSeason, setSelectedSeason] = useState("2024/25");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-[60px] flex justify-between items-center px-4 opacity-100 bg-foreground font-poppins!">
      {/* Logo */}
      <Link to={"/"}>
        <div className="w-[82px] h-[26.1px] lg:h-[60px] lg:w-[200px]">
          <img src={logo} alt="Stat Score" />
        </div>
      </Link>

      <div className="flex items-center  gap-4">
        {/* Nav Links */}
        {nav.map((n) => (
          <NavLink
            to={n.path}
            key={n.id}
            className={({ isActive }) =>
              `hidden lg:block decoration-2 decoration-primary underline-offset-8 text-[18px] p-2 ${
                isActive ? "underline text-primary" : "hover:underline"
              }`
            }
          >
            {n.name}
          </NavLink>
        ))}

        {/* World Map Icon */}
        <div className="bg-accent flex items-center justify-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full">
          <img
            src={worldMapIcon}
            alt="Global"
            className="lg:w-6 md:w-5 w-4 lg:h-6 md:h-5 h-4"
          />
        </div>

        {/* Ball Icon */}
        <div className="bg-accent flex items-center justify-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full">
          <img src={ball} alt="Global" className="lg:w-6 w-4 lg:h-6 h-4" />
        </div>

        {/* League Selector */}
        <div className="bg-accent hover:bg-background/80 transition-colors duration-300 hover:border hover:border-zinc-400 ease-in flex items-center justify-center lg:w-[206px] lg:h-10 w-6 h-6 md:w-8 md:h-8 rounded-full lg:px-4">
          <img
            src={englandFlag}
            className="lg:w-4 md:w-5 w-4 lg:h-4 md:h-5 h-4"
            alt="Flag"
          />

          {/* Hidden on Medium and Mobile Devices */}
          <div className="hidden lg:block">
            <Select value={selectedLeague} onValueChange={setSelectedLeague}>
              <SelectTrigger className="w-full rounded-full border-none text-white [&>svg]:text-white! focus:ring-0! focus:ring-offset-0! focus:outline-none!">
                <SelectValue placeholder="Select League" />
              </SelectTrigger>

              <SelectContent className="w-[206px] bg-card text-white border-zinc-600">
                <SelectGroup>
                  <SelectItem value="premier_league">Premier League</SelectItem>
                  <SelectItem value="laliga">La Liga</SelectItem>
                  <SelectItem value="seria">Serie A</SelectItem>
                  <SelectItem value="bundesliga">Bundesliga</SelectItem>
                  <SelectItem value="ligue_1">Ligue 1</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Season Selector */}
        <div className="bg-accent flex items-center justify-center lg:w-[129px] lg:h-10 rounded-full hover:bg-background/80 transition-colors duration-300 hover:border hover:border-zinc-400 ease-in px-1">
          <Select value={selectedSeason} onValueChange={setSelectedSeason}>
            <SelectTrigger className="w-full rounded-full border-none text-white [&>svg]:text-white! focus:ring-0! focus:ring-offset-0! focus:outline-none! text-xs md:text-sm lg:text-base md:gap-1! gap-0! font-extralight!">
              <SelectValue placeholder="Season" />
            </SelectTrigger>

            {/* Hidden on Medium and Mobile Devices */}
            <div className="hidden lg:block">
              <SelectContent className="w-[123px] bg-card text-white border-zinc-600">
                <SelectGroup>
                  <SelectItem value="2017/18">2017/18</SelectItem>
                  <SelectItem value="2018/19">2018/19</SelectItem>
                  <SelectItem value="2019/20">2019/20</SelectItem>
                  <SelectItem value="2020/21">2020/21</SelectItem>
                  <SelectItem value="2021/22">2021/22</SelectItem>
                  <SelectItem value="2022/23">2022/23</SelectItem>
                  <SelectItem value="2023/24">2023/24</SelectItem>
                  <SelectItem value="2024/25">2024/25</SelectItem>
                </SelectGroup>
              </SelectContent>
            </div>
          </Select>
        </div>

        {/* Language Icon */}
        <div className="hidden lg:flex items-center justify-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-accent">
          <img
            src={englandFlag}
            className="lg:w-6 md:w-5 w-4 lg:h-6 md:h-5 h-4"
            alt="Language"
          />
        </div>

        {/* Menu */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
          <img src={menu} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-foreground z-50 transform transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-zinc-700">
          <Link to={"/"}>
            <div className="w-32">
              <img src={logo} alt="Stat Score" />
            </div>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col p-4 gap-4">
          {nav.map((n) => (
            <NavLink
              key={n.id}
              to={n.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg lg:block decoration-2 decoration-primary underline-offset-8 text-[18px] ${
                  isActive ? "underline text-primary" : "hover:underline"
                }`
              }
            >
              {n.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
