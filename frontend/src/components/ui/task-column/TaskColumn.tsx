"use client";
import React, { FC, useState } from "react";
import { ChartNoAxesColumnIncreasing, Plus } from "lucide-react";
import Button from "../button/Button";
import TaskFormDrawer from "../taskform-drawer/TaskFormDrawer";

interface TaskColumnProps {
  title: string;
  children?: React.ReactNode;
}
const TaskColumnTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <h3 className="text-lg font-normal text-[##555555]  ">{title}</h3>
      <ChartNoAxesColumnIncreasing className=" rotate-90 text-[##555555]   " />
    </div>
  );
};

const TaskColumn: FC<TaskColumnProps> = ({ title, children }) => {
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const toggleTaskModal = () => {
    setOpenTaskModal(!openTaskModal);
  };

  return (
    <div className="p-2 flex flex-col gap-4  ">
      <TaskColumnTitle title={title} />
      {children}
      <div>
        <Button
          variant="secondary"
          className="flex flex-row justify-between"
          onclick={toggleTaskModal}>
          Add new <Plus />
        </Button>
        <TaskFormDrawer
          isOpen={openTaskModal}
          taskStatus={title}
          handleToggle={toggleTaskModal}
        />
      </div>
    </div>
  );
};

export default TaskColumn;
