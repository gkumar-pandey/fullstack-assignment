import { Clock } from "lucide-react";
import React, { FC } from "react";

interface TaskCardProps {
  title: string;
  description: string;
  priority: string;
  due_date: string;
}

const colorForPriority = (priority: string) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "#FF6B6B";
    case "medium":
      return "#FFA235";
    case "low":
      return "#0ECC5A";
    default:
      return "#0ECC5A";
  }
};

const TaskCard: FC<TaskCardProps> = ({
  title,
  description,
  priority,
  due_date,
}) => {
  const priorityColor = colorForPriority(priority);

  return (
    <div className="bg-[#F9F9F9] border p-4 rounded-lg flex flex-col gap-3 border-[#DEDEDE]">
      <p className="text-base font-medium text-[#606060]">{title}</p>
      <p className="text-sm font-normal text-[#797979]">{description}</p>
      <button
        style={{ backgroundColor: priorityColor }}
        className={`text-start w-fit text-white rounded-lg py-1 px-2 text-xs font-normal`}>
        {priority}
      </button>
      <div className="flex flex-row items-center gap-3">
        <Clock />
        <p className="text-base font-medium text-[#606060]">{due_date}</p>
      </div>
    </div>
  );
};

export default TaskCard;
