import React from "react";

interface InputLabelProps {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputLabel = ({
  id,
  type,
  label,
  value,
  onChange,
}: InputLabelProps) => {
  return (
    <>
      <label htmlFor={id} className="block font-medium">
        {label}:
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
        className="w-full"
      />
    </>
  );
};

export default InputLabel;
