import React from "react";
import { BellDot } from "lucide-react";
import { Sun } from "lucide-react";
import { ChevronsRight } from "lucide-react";

const LogoutBtn = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-5">
        <BellDot />
        <Sun />
        <ChevronsRight />
      </div>
      <button className="bg-[#F4F4F4] text-[#797979] p-2 rounded-lg text-lg  ">
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
