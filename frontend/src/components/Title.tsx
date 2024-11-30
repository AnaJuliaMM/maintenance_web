import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className="text-blue-100 text-2xl font-bold py-5 text-center">{children}</h1>;
};
