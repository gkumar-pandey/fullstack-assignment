"use client";
import { FC, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<InputProps> = ({
  placeholder,
  className,
  type,
  value,
  name,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassowrd = () => setShowPassword((pre) => !pre);
  if (type === "password") {
    return (
      <div className="relative">
        <input
          placeholder={placeholder}
          type={showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          className={`${className} w-full bg-[#EBEBEB] text-[#606060] rounded-lg py-3 px-4 border-none focus:outline-[#999999] `}
        />
        <div
          onClick={toggleShowPassowrd}
          className="absolute top-1/2 -translate-y-1/2 cursor-pointer right-4">
          {!showPassword ? <VscEyeClosed /> : <VscEye />}
        </div>
      </div>
    );
  }
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`${className} w-full bg-[#EBEBEB] text-[#606060] rounded-lg py-3 px-4 border-none focus:outline-[#999999] `}
    />
  );
};

export default Input;
