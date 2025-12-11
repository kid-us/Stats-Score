import { arsenal, leftArrow, substitution } from "@/assets/images";
import { useState } from "react";

const tabs: string[] = [
  "Details",
  "Odds",
  "Lineups",
  "Events",
  "Stats",
  "Standings",
];

const MatchDetail = () => {
  const [activeTab, setActiveTab] = useState("Events");
  return (
    <div className="space-y-4">
      <div className="bg-card lg:rounded-xl px-4 py-2 space-y-8">
        <div className="flex items-center gap-4">
          <img src={leftArrow} alt="Left Arrow" className="w-6 h-6" />
          <p className="text-[14px]">English Premier League</p>
        </div>

        <div className="flex items-center justify-center lg:gap-40 gap-20">
          {/* Home Team */}
          <div className="flex flex-col justify-center items-center relative">
            <img src={arsenal} alt="Arsenal" className="w-[42px] h-[43.45px]" />
            <div className="absolute top-0 -right-3 w-2.5 h-3 bg-[#E7D93F] flex items-center justify-center">
              <span className="text-black text-[10px]">2</span>
            </div>
            <p className="text-[14px]">Arsenal</p>
          </div>

          {/* Result */}
          <div className="text-center space-y-1">
            <p className="uppercase text-[11px]">11 Aug</p>
            <div className="flex text-[22px] gap-2 font-semibold">
              <p>2</p>
              <p>-</p>
              <p>1</p>
            </div>
            <p className="text-[] bg-destructive px-1 rounded text-[10px]">
              Finished
            </p>
          </div>

          {/* Away Team */}
          <div className="flex flex-col justify-center items-center relative">
            <img src={arsenal} alt="Arsenal" className="w-[42px] h-[43.45px]" />
            <div className="absolute top-0 -left-6 w-2.5 h-3 bg-destructive flex items-center justify-center">
              <span className="text-black text-[10px]">2</span>
            </div>
            <div className="absolute top-0 -left-3 w-2.5 h-3 bg-[#E7D93F] flex items-center justify-center">
              <span className="text-black text-[10px]">2</span>
            </div>
            <p className="text-[14px]">Arsenal</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center items-center gap-4">
          {tabs.map((t) => (
            <button
              onClick={() => setActiveTab(t)}
              className={`p-2 text-[14px] ${
                activeTab === t
                  ? "underline underline-offset-8 decoration-2 decoration-primary"
                  : ""
              } `}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-card px-4 py-2">
        <div className="py-2">
          <p className="text-[14px]">{activeTab}</p>
        </div>

        <div className="space-y-4">
          {/* Full Time */}
          <div className="flex items-center justify-center w-full">
            <hr className="border-[#292B41] w-full"></hr>
            <p className="text-[12px] w-1/2 text-center">
              Fulltime <span className="ms-3">2</span> -{" "}
              <span className="">1</span>
            </p>
            <hr className="border-[#292B41] w-full"></hr>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center w-full gap-2">
              <div className="flex w-1/3 items-center justify-end gap-3">
                <div className="">
                  <p className="text-[12px]">Gyokores</p>
                  <p className="text-[12px] text-[#6B7280]">Odegard</p>
                </div>
                <img
                  src={substitution}
                  alt="Substitution"
                  className="w-3 h-3"
                />
                <hr className="border-[#292B41] w-8"></hr>
              </div>
              <p className="text-[12px] w-12 bg-[#26273B] text-center rounded-full py-0.5 px-2">
                89’
              </p>
              <hr className="border-transparent w-1/3"></hr>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center w-full gap-2">
              <div className="flex w-1/3 items-center justify-end gap-3">
                <div className="">
                  <p className="text-[12px]">Gyokores</p>
                  <p className="text-[12px] text-[#6B7280]">Odegard</p>
                </div>
                <img
                  src={substitution}
                  alt="Substitution"
                  className="w-3 h-3"
                />
                <hr className="border-[#292B41] w-8"></hr>
              </div>
              <p className="text-[12px] w-12 bg-[#26273B] text-center rounded-full py-0.5 px-2">
                89’
              </p>
              <hr className="border-transparent w-1/3"></hr>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center w-full gap-2">
              <div className="flex w-1/3 items-center justify-end gap-3">
                <div className="">
                  <p className="text-[12px]">Gyokores</p>
                  <p className="text-[12px] text-[#6B7280]">Odegard</p>
                </div>
                <img
                  src={substitution}
                  alt="Substitution"
                  className="w-3 h-3"
                />
                <hr className="border-[#292B41] w-8"></hr>
              </div>
              <p className="text-[12px] w-12 bg-[#26273B] text-center rounded-full py-0.5 px-2">
                89’
              </p>
              <hr className="border-transparent w-1/3"></hr>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center w-full gap-2">
              <div className="flex w-1/3 items-center justify-end gap-3">
                <div className="">
                  <p className="text-[12px]">Gyokores</p>
                  <p className="text-[12px] text-[#6B7280]">Odegard</p>
                </div>
                <img
                  src={substitution}
                  alt="Substitution"
                  className="w-3 h-3"
                />
                <hr className="border-[#292B41] w-8"></hr>
              </div>
              <p className="text-[12px] w-12 bg-[#26273B] text-center rounded-full py-0.5 px-2">
                89’
              </p>
              <hr className="border-transparent w-1/3"></hr>
            </div>
          </div>

          {/* Half Time */}
          <div className="flex items-center justify-center w-full">
            <hr className="border-[#292B41] w-full"></hr>
            <p className="text-[12px] w-1/2 text-center">
              Halftime' <span className="ms-3">2</span> -{" "}
              <span className="">1</span>
            </p>
            <hr className="border-[#292B41] w-full"></hr>
          </div>

          {/* Kickoff */}
          <div className="flex items-center justify-center w-full">
            <hr className="border-[#292B41] w-full"></hr>
            <p className="text-[12px] w-1/2 text-center">
              Kickoff - <span>13:00 </span>
            </p>
            <hr className="border-[#292B41] w-full"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetail;
