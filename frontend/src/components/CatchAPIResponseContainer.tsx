import React from "react";

interface CatchAPIResponseContainerProps {
  text: string;
  icon: React.ReactNode;
}

function CatchAPIResponseContainer({
  text,
  icon,
}: CatchAPIResponseContainerProps) {
  return (
    <div className="flex justify-center items-center gap-4 w-full text-lg">
      {text} {icon}
    </div>
  );
}

export default CatchAPIResponseContainer;
