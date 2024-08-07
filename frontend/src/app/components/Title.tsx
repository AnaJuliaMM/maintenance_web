import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="p-4  text-blue-100 text-2xl border-b-2 border-gray-500 font-bold">{children}</h1>
  );
};
