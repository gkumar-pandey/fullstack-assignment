import React from "react";

interface FormContainerProps {
  children: React.ReactNode;
}
const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div className="form-bg border border-[#CECECE] p-14 rounded-2xl w-full gap-9 flex flex-col ">
      {children}
    </div>
  );
};

export default FormContainer;
