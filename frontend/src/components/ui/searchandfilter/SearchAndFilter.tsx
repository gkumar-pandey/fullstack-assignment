"use client";
import React, { FC, useState } from "react";
import {
  Calendar,
  Filter,
  PlusCircle,
  Search,
  Share2,
  Sparkles,
} from "lucide-react";
import Button from "../button/Button";
import TaskFormDrawer from "../taskform-drawer/TaskFormDrawer";

interface SearchAndFilterProps {
  createNewBtnHandler: () => void;
}

const SerchBar = () => {
  return (
    <div className="bg-white rounded-lg flex flex-row items-center px-2 gap-1 border border-[#E9E9E9] ">
      <input
        placeholder="Search"
        className="w-full py-2 text-lg focus:outline-none"
      />
      <Search />
    </div>
  );
};

const SearchAndFilter: FC<SearchAndFilterProps> = ({ createNewBtnHandler }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const filters = [
    {
      label: "Calender View",
      icon: <Calendar />,
    },
    {
      icon: <Sparkles />,
      label: "Automation",
    },
    {
      icon: <Filter />,
      label: "Filter",
    },
    {
      icon: <Share2 />,
      label: "Share",
    },
  ];
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <SerchBar />
      </div>
      <div>
        <div className="flex flex-row items-center gap-4 ">
          {filters.map((ele, idx) => (
            <button
              className="flex flex-row gap-3 p-2 bg-[#F4F4F4] text-[#797979] text-base font-normal "
              key={idx}>
              {ele.label}
              {ele.icon}
            </button>
          ))}
          <div>
            <Button
              variant="primary"
              className="form-btn flex items-center gap-2 flex-row text-center "
              onclick={toggleDrawer}>
              Create New <PlusCircle />
            </Button>
          </div>
          <TaskFormDrawer isOpen={openDrawer} handleToggle={toggleDrawer} />
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
