import React from "react";

interface CustomSelectPros {
  id: string;
  label: string;
  items: string[];
  value?: string | number;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

function SelectLabel({ id, label, items, value, onChange }: CustomSelectPros) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>

      <select
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className="flex bg-blue-100 rounded-sm h-10 w-full p-1 text-gray-900 font-semibold"
      >
        <option className="italic">Selecione</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectLabel;
