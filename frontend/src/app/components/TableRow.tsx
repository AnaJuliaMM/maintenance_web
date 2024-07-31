import React from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

type TableRowCard = {
  environment: string;
  equipment: string;
  requisiton: string;
  service: string;
};

export const TableRow: React.FC<TableRowCard> = ({
  environment,
  equipment,
  requisiton,
  service,
}) => {
  return (
    <div className="grid grid-cols-5 p-5">
      <p>{environment}</p>
      <p>{equipment}</p>
      <p>{requisiton}</p>
      <p>{service}</p>
      <div className="flex gap-2">
        <MdOutlineEdit className="cursor-pointer" size={20}/>
        <MdDeleteOutline className="cursor-pointer" size={20}/>
      </div>
    </div>
  );
};
