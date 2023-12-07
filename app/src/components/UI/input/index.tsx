import React from "react";
import { IInputProps } from "../../../types/ui/IInput";

const Input: React.FC<IInputProps> = ({
  id,
  onChange,
  type,
  value,
  className,
  placeholder,
}) => {
  return (
    <>
      <input
        className={`outline-0 border border-1 rounded ${className}`}
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
