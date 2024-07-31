"use client";
import React, { useState } from "react";
import { img1, img2, img3 } from "../../../public";
import DashboardCard from "../ui/dashboard-card/DashboardCard";
import { CircleHelp } from "lucide-react";
import SearchAndFilter from "../ui/searchandfilter/SearchAndFilter";
import TaskContainer from "../ui/taskcontainer/TaskContainer";

import TaskColumn from "../ui/task-column/TaskColumn";
import TaskCard from "../ui/taskcard/TaskCard";
import { taskData } from "@/data";

const DashboardMain = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => setOpenDrawer(!openDrawer);
  const dashboardCardsData = [
    {
      image: img1,
      title: "Introducing tags",
      description:
        "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
    },
    {
      image: img2,
      title: "Share Notes Instantly",
      description:
        "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
    },
    {
      image: img3,
      title: "Access Anywhere",
      description:
        "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
    },
  ];

  const todoTasks = taskData?.filter(
    (ele, idx) => ele.status.toLowerCase().replace(" ", "") === "todo"
  );

  const inProgressTasks = taskData?.filter(
    (ele, idx) => ele.status.toLowerCase().replace(" ", "") === "inprogress"
  );

  const underReviewTasks = taskData?.filter(
    (ele, idx) => ele.status.toLowerCase().replace(" ", "") === "underreview"
  );

  const finishedTasks = taskData?.filter(
    (ele, idx) => ele.status.toLowerCase().replace(" ", "") === "finished"
  );

  return (
    <main className="p-4 w-[80%] overflow-y-scroll min-h-dvh bg-[#f3f3f3]  ">
      <div className="flex flex-col gap-4">
        <div className="py-2 flex flex-row justify-between ">
          <h2 className="text-5xl font-semibold  ">Good Morning, Joe!</h2>
          <p className="text-base flex flex-row font-normal gap-1 text-[#080808]">
            Help & feedback <CircleHelp />{" "}
          </p>
        </div>
        <div className="flex flex-row justify-between w-full  ">
          {dashboardCardsData.map((data, idx) => (
            <DashboardCard {...data} key={idx} />
          ))}
        </div>
        <SearchAndFilter createNewBtnHandler={toggleDrawer} />
        <div>
          <TaskContainer>
            <TaskColumn title="To do">
              {todoTasks?.map((ele, idx) => (
                <TaskCard key={idx} {...ele} />
              ))}
            </TaskColumn>
            <TaskColumn title="In Progress">
              {inProgressTasks?.map((ele, idx) => (
                <TaskCard key={idx} {...ele} />
              ))}
            </TaskColumn>
            <TaskColumn title="Under review">
              {underReviewTasks?.map((ele, idx) => (
                <TaskCard key={idx} {...ele} />
              ))}
            </TaskColumn>
            <TaskColumn title="Finished">
              {finishedTasks?.map((ele, idx) => (
                <TaskCard key={idx} {...ele} />
              ))}
            </TaskColumn>
          </TaskContainer>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;
