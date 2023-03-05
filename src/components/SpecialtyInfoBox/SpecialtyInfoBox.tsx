import { Typography } from "@/components/Typography/Typography";
import type { FC, ReactNode } from "react";
import styles from "./SpecialtyInfoBox.module.css";

type SpecialtyInfoBoxProps = {
  icon: ReactNode;
  header: string;
  description: string;
  items: string[];
};

export const SpecialtyInfoBox: FC<SpecialtyInfoBoxProps> = ({
  icon,
  header,
  description,
  items,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        {icon}
        <Typography variant="h2">{header}</Typography>
      </div>
      <Typography>{description}</Typography>
      <div className={styles.itemsContainer}>
        {items.map((item, index) => (
          <Typography key={index}>{item}</Typography>
        ))}
      </div>
    </div>
  );
};