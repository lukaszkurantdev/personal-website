import { Typography } from "@/components/Typography/Typography";
import type { FC, ReactNode } from "react";
import styles from "./EducationInfoBox.module.css";

type EducationInfoBoxProps = {
  icon?: ReactNode;
  date: string;
  header: string;
  description?: string;
  details?: string;
};

export const EducationInfoBox: FC<EducationInfoBoxProps> = ({
  icon,
  date,
  header,
  description,
  details,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        {icon}
        <Typography variant="h2">{date}</Typography>
      </div>
      <Typography weight="bold">{header}</Typography>
      <Typography>{description}</Typography>
      <Typography variant="x-small-paragraph">{details}</Typography>
    </div>
  );
};
