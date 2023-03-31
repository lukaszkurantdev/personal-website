import classNames from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  onClick?: () => void;
  variant?: "primary" | "secondary" | 'danger' | 'ternary';
  disabled?: boolean;
  className?: string;
  title: string;
};

export const Button = ({
  className,
  title,
  disabled,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, styles[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
