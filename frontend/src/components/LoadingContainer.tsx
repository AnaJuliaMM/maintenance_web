import React from "react";

import { RiLoader2Fill } from "react-icons/ri";

function LoadingContainer() {
  return (
    <div className="flex justify-center items-center gap-4 w-full text-lg">
      Por favor, aguarde! Os dados estão sendo carregados{" "}
      <RiLoader2Fill size={30} />
    </div>
  );
}

export default LoadingContainer;
