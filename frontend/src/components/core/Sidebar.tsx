"use client";
import React from "react";

import LogoutBtn from "../ui/logout-btn/LogoutBtn";
import SidebarLinks from "../ui/sidebar-links/SidebarLinks";

import { CirclePlus, ArrowDownToLine } from "lucide-react";
import Button from "../ui/button/Button";
import UserAvatar from "../ui/user-avatar/UserAvatar";

const Sidebar = () => {
  const createNewTaskHandler = () => {};

  return (
    <aside className="h-dvh py-6 px-4 border-r-1 border-[#DEDEDE] w-1/5 sticky top-0 left-0 z-40 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <UserAvatar />
          <LogoutBtn />
        </div>
        <div>
          <SidebarLinks />
        </div>
        <div>
          <Button
            variant="primary"
            onclick={() => {}}
            className="form-btn flex flex-row items-center justify-center gap-2 ">
            Create New Task <CirclePlus />
          </Button>
        </div>
      </div>
      <div>
        <div className="text-[#666666]  flex flex-row items-center gap-2 p-2 bg-[#F3F3F3] cursor-pointer ">
          <ArrowDownToLine size={40} />
          <div>
            <p className="text-xl">Download the app</p>
            <p className="text-sm">Get the full experience </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
