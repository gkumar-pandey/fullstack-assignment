import React, { FC, useState } from "react";
import Drawer from "../drawer/Drawer";
import DrawerHeader from "../drawer/DrawerHeader";
import TaskForm from "../task-form/TaskForm";

interface TaskFormDrawerProps {
  isOpen: boolean;
  handleToggle: () => void;
  taskStatus?: string;
}

const TaskFormDrawer: FC<TaskFormDrawerProps> = ({
  isOpen,
  handleToggle,
  taskStatus,
}) => {
  return (
    <Drawer open={isOpen} toggleDrawer={handleToggle}>
      <div>
        <DrawerHeader closeHandler={handleToggle} />
        <TaskForm status={taskStatus} />
      </div>
    </Drawer>
  );
};

export default TaskFormDrawer;
