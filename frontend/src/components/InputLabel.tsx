import React from "react";

interface InputLabelProps {
  id: string;
  type: string;
  label: string;
  value?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const InputLabel = ({ id, type, label, value, onChange }: InputLabelProps) => {
  return (
    <div className="flex flex-col items-start w-full">
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
        className="flex bg-blue-100 rounded-sm h-10 w-full p-1 text-gray-900 font-semibold"
      />
    </div>
  );
};

export default InputLabel;
