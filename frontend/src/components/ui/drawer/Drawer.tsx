import React, { FC } from "react";
import { createPortal } from "react-dom";

interface DrawerProps {
  open: boolean;
  children?: React.ReactNode;
  toggleDrawer: () => void;
}

const Drawer: FC<DrawerProps> = ({ open, children, toggleDrawer }) => {
  if (!open) {
    return null;
  }
  return createPortal(
    <>
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto ${
          !open ? "translate-x-full" : ""
        }   transition-transform  bg-white w-2/5 dark:bg-gray-800`}>
        <div className="p-4">{children}</div>
      </div>
      {open && (
        <div
          onClick={toggleDrawer}
          className="bg-black opacity-5 fixed z-30 top-0 left-0 w-full h-full min-h-screen"></div>
      )}
    </>,
    document.querySelector("#portal")!
  );
};

export default Drawer;
