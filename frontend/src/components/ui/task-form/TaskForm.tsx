import React, { FC, useState } from "react";
import statusIcon from "../../../../public/status.svg";
import priorityIcon from "../../../../public/priority.svg";
import calendarIcon from "../../../../public/calender.svg";
import descrptionIcon from "../../../../public/description.svg";
import { Plus } from "lucide-react";
import Image from "next/image";

interface TaskFormType {
  title: string;
  description: string;
  status?: string;
  priority: string;
  due_date: string;
}

interface FormTagsProps {
  icon: any;
  tagName: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

interface TaskFormProps {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  taskFormData: TaskFormType;
}

const FormTags: FC<FormTagsProps> = ({
  icon,
  tagName,
  name,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-row items-center gap-10 ">
      <div className="flex flex-row items-center gap-6 w-48 text-[#666666] ">
        <div>
          <Image src={icon} alt="icon" height={24} width={24} />
        </div>
        <p>{tagName}</p>
      </div>
      <div className="justify-start flex flex-row">
        <input
          value={value}
          name={name}
          onChange={onChange}
          placeholder="Not Selected"
          className="w-32 border-none focus:outline-none "
        />
      </div>
    </div>
  );
};

const TaskTitleForm: FC<TaskFormProps> = ({ handleOnChange, taskFormData }) => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <input
          value={taskFormData.title}
          name="title"
          onChange={handleOnChange}
          placeholder="Title"
          className="w-full text-5xl font-semibold py-3  bg-white border-none focus:outline-none "
        />
      </div>
      <div className="flex flex-col gap-8">
        <FormTags
          name="status"
          onChange={handleOnChange}
          tagName="Status"
          value={taskFormData?.status}
          icon={statusIcon}
        />
        <FormTags
          name="priority"
          value={taskFormData.priority}
          onChange={handleOnChange}
          tagName="Priority"
          icon={priorityIcon}
        />
        <FormTags
          name="due_date"
          value={taskFormData.due_date}
          onChange={handleOnChange}
          tagName="Deadline"
          icon={calendarIcon}
        />
        <FormTags
          name="description"
          value={taskFormData.description}
          onChange={handleOnChange}
          tagName="Description"
          icon={descrptionIcon}
        />
      </div>
      <div className="flex flex-row items-center gap-5">
        <Plus /> <span>Add Coustem Property</span>
      </div>
      <hr className="text-[#DEDEDE] h-px" />

      <textarea
        className="w-full focus:outline-none "
        placeholder="Start Writing or Drag Your file here."
      />
    </div>
  );
};

const TaskForm = ({ status }: { status?: string }) => {
  const [taskFormData, setTaskFormData] = useState<TaskFormType>({
    title: "",
    status: "" || status,
    priority: "",
    due_date: "",
    description: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <TaskTitleForm
        handleOnChange={handleOnChange}
        taskFormData={taskFormData}
      />
    </div>
  );
};

export default TaskForm;
