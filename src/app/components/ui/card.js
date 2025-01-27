import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export function Card({ children, className }) {
  return (
    <div
      className={clsx(
        "bg-white shadow-md rounded-lg overflow-hidden border border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function CardContent({ children, className }) {
  return <div className={clsx("p-4", className)}>{children}</div>;
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
