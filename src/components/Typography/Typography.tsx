import classNames from "classnames";
import type { ReactNode } from "react";

import styles from "./Typography.module.css";
import { TYPOGRAPHY_VARIANTS } from "./Typography.constants";

type TypographyProps = {
  variant?: keyof typeof TYPOGRAPHY_VARIANTS;
  weight?: "bold" | "medium" | "normal";
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
  fontSize?: number;
};

export const Typography = ({
  className,
  variant = "paragraph",
  weight = "normal",
  align = "left",
  children,
  fontSize,
}: TypographyProps) => {
  const Variant = TYPOGRAPHY_VARIANTS[variant];

  return (
    <Variant
      className={classNames(
        styles[variant],
        styles[weight],
        styles[align],
        className
      )}
      style={{ fontSize }}
    >
      {children}
    </Variant>
  );
};
