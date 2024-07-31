import Image from "next/image";
import React, { FC } from "react";

interface DashboardCardProps {
  image: string;
  title: string;
  description: string;
}

const DashboardCard: FC<DashboardCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="p-4 border border-[#F4F4F4] bg-white max-w-sm rounded-lg ">
      <div className="flex flex-row gap-4">
        <Image src={image} alt={title} />
        <div>
          <p className="text-lg font-semibold text-[#757575] ">{title}</p>
          <p className="text-sm font-normal text-[#868686]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
