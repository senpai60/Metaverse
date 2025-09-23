import React, { Children } from "react";

function ButtonDefault({ children, className = "", ...prop }) {
  return (
    <button className={`button-main ${className}`} {...prop}>
      {children}
    </button>
  );
}

export default ButtonDefault;
