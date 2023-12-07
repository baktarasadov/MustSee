import React from "react";
import { IButtonProps } from "../../../types/ui/IButton";

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`p-1 font-semibold text-base rounded-2xl border  ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
