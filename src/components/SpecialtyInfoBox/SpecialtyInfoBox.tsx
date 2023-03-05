import { Typography } from "@/components/Typography/Typography";
import type { FC, ReactNode } from "react";
import styles from "./SpecialtyInfoBox.module.css";

type SpecialtyInfoBoxProps = {
  icon: ReactNode;
  header: string;
  description: string;
  technologiesHeader: string;
  technologies: string;
};

export const SpecialtyInfoBox: FC<SpecialtyInfoBoxProps> = ({
  icon,
  header,
  description,
  technologies,
  technologiesHeader,
}) => {
  return (
    <div className={styles.container}>
      {icon}
      <Typography variant="h2">{header}</Typography>
      <Typography opacity>{description}</Typography>
      <Typography
        className={styles.technologiesHeader}
        variant="small-paragraph"
      >
        {technologiesHeader}
      </Typography>
      <Typography variant="small-paragraph" opacity>
        {technologies}
      </Typography>
    </div>
  );
};
