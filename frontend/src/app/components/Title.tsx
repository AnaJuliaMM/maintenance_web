import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="p-2 opacity-60 text-blue-100 text-xl border-b">{children}</h1>
  );
};
