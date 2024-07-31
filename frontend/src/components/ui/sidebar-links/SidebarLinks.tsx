import React from "react";
import {
  House,
  SquareKanban,
  Settings,
  UsersRound,
  ChartSpline,
} from "lucide-react";

const SidebarLinks = () => {
  const links = [
    { icon: <House />, label: "Home" },
    { icon: <SquareKanban />, label: "Boards" },
    { icon: <Settings />, label: "Settings" },
    { icon: <UsersRound />, label: "Teams" },
    { icon: <ChartSpline />, label: "Analytics" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {links.map((ele, idx) => (
        <button
          className="flex flex-row items-center justify-start gap-2 w-full p-2  font-normal text-[#797979] "
          key={idx}>
          {ele.icon} {ele.label}
        </button>
      ))}
    </div>
  );
};

export default SidebarLinks;
