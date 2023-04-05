import type { CSSProperties } from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "danger" | "ternary";
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
  onClick?: () => void;
};

export const Button = ({
  className,
  title,
  disabled,
  type,
  style,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, styles[variant], className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={style}
    >
      {title}
    </button>
  );
};
