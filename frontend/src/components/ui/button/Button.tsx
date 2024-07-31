"use client";
import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onclick: () => void;
  className?: string;
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onclick,
  className,
  variant,
}) => {
  if (variant === "primary") {
    return (
      <button
        onClick={onclick}
        className={`${className} ${styles.primary} w-full rounded-lg p-2`}>
        {children}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        onClick={onclick}
        className={`${className} ${styles.secondary} w-full  p-2 text-white `}>
        {children}
      </button>
    );
  }
};

export default Button;
