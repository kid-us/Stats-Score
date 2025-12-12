import { coloredCalendar } from "@/assets/images";
import { useEffect, useRef, useState } from "react";

function ScrollableCalendar() {
  // Generate previous 15 and next 15 days
  const days = Array.from({ length: 31 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 15 + i);
    return date;
  });

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const formatDay = (date: Date) => weekdays[date.getDay()];
  const formatDateMonth = (date: Date) =>
    `${date.getDate()} ${months[date.getMonth()]}`;

  const today = new Date();
  const todayIndex = days.findIndex(
    (d) =>
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
  );

  const [activeIndex, setActiveIndex] = useState(todayIndex);
  const containerRef = useRef<HTMLDivElement>(null);

  // Is today
  const isToday = (date: Date) =>
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  // Scroll to today on mount
  useEffect(() => {
    if (containerRef.current) {
      const children = containerRef.current.children;
      const child = children[todayIndex] as HTMLElement;
      const containerWidth = containerRef.current.offsetWidth;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      containerRef.current.scrollLeft = childCenter - containerWidth / 2;
    }
  }, [todayIndex]);

  // Handle scroll to update active index
  const handleScroll = () => {
    if (!containerRef.current) return;
    const containerCenter =
      containerRef.current.scrollLeft + containerRef.current.offsetWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;
    Array.from(containerRef.current.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const childCenter = c.offsetLeft + c.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
    setActiveIndex(closestIndex);
  };

  return (
    <div className="relative">
      {/* Left overlay */}
      <div className="absolute -left-10 top-0 h-full w-53 bg-linear-to-r from-[#181921] to-transparent pointer-events-none z-10" />
      {/* Right overlay */}
      <div className="absolute right-0 top-0 h-full w-53 bg-linear-to-l from-[#181921] to-transparent pointer-events-none z-10" />

      <div className="absolute right-4 z-40 h-full">
        <div className="flex items-center h-full">
          <img src={coloredCalendar} alt="Calendar" className="w-10 h-10" />
        </div>
      </div>

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto py-5 px-2 scrollbar-none scroll-smooth no-scrollbar relative z-0"
      >
        {days.map((date, index) => (
          <div
            key={index}
            className={`flex-none w-20 text-center mx-2 cursor-pointer rounded p-2 transition-all font-light ${
              index === activeIndex ? "bg-card text-primary" : "text-white"
            }`}
          >
            <p>{isToday(date) ? "Today" : formatDay(date)}</p>
            <p className="text-sm mt-1">{formatDateMonth(date)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollableCalendar;
