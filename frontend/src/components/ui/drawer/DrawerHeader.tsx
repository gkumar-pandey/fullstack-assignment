import React, { FC } from "react";
import { X } from "lucide-react";
import { Maximize2 } from "lucide-react";
import { Share2 } from "lucide-react";
import { Star } from "lucide-react";

interface DrawerHeaderProps {
  closeHandler: () => void;
}
const DrawerHeader: FC<DrawerHeaderProps> = ({ closeHandler }) => {
  return (
    <div className=" flex flex-row items-center justify-between">
      <div className="flex flex-row items-center text-[#797979] gap-5">
        <X onClick={closeHandler} className="cursor-pointer " />
        <Maximize2 className="rotate-90 cursor-pointer" />
      </div>
      <div className="flex flex-row items-center gap-5">
        <button className="bg-[#F4F4F4] text-[#797979] flex items-center flex-nowrap gap-2 p-2 rounded-lg text-lg  ">
          Share <Share2 />
        </button>
        <button className="bg-[#F4F4F4] text-[#797979] p-2 flex flex-nowrap gap-2 rounded-lg text-lg  ">
          Favorite <Star />
        </button>
      </div>
    </div>
  );
};

export default DrawerHeader;
