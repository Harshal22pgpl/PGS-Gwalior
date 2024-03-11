import React, { forwardRef } from "react";
import clsx from "clsx";

const Types = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
  delete: "btn-delete",
};

const Sizes = {
  large: "text-button",
  small: "text-button-sm",
};

const Button = forwardRef((props, ref) => {
  const {
    className,
    btnType = "primary",
    size = "large",
    onClick,
    children,
    disabled,
    backgroundColor,
    ...otherProps
  } = props;

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={clsx("btn", Types[btnType], Sizes[size], className)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});

export default Button;
