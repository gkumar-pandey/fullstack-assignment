import React from "react";

interface TaskContainerProps {
  children: React.ReactNode;
}
const TaskContainer: React.FC<TaskContainerProps> = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded-lg grid grid-cols-4 ">{children}</div>
  );
};

export default TaskContainer;
