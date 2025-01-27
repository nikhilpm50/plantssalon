import React from "react";
import clsx from "clsx";

export function Button({ children, className, onClick, ...props }) {
  return (
    <button
      className={clsx(
        "px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
