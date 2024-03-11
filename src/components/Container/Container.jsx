import clsx from "clsx";
import React from "react";

const Types = {
  div: "div",
  row: "row",
  column: "column",
};

const Sizes = {
  sm: "container-small",
  md: "container-medium",
  lg: "container-large",
  custom: "",
};

const Container = (props) => {
  const {
    className,
    type = "div",
    size = "lg",
    children,
    width = "full",
    height = "full",
    ...otherProps
  } = props;

  return (
    <div
      className={clsx(
        Types[type],
        Sizes[size],
        className,
        `width-${width} height-${height}`
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Container;
