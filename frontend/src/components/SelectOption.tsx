import React from "react";

interface SelectOptionProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  id,
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full border rounded-md p-2 text-gray-950 bg-sky-100"
      >
        <option value="" disabled></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
