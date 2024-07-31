import Sidebar from "@/components/core/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row  ">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
