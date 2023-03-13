import { Typography } from "@/components/Typography/Typography";
import classNames from "classnames";
import type { FC, ReactNode } from "react";
import styles from "./SpecialtyInfoBox.module.css";

type SpecialtyInfoBoxProps = {
  icon: ReactNode;
  header: string;
  description: string;
  technologiesHeader: string;
  technologies: string;
  reversed?: boolean;
};

export const SpecialtyInfoBox: FC<SpecialtyInfoBoxProps> = ({
  icon,
  header,
  reversed,
  description,
  technologies,
  technologiesHeader,
}) => {
  const technologiesList = technologies.split(",");

  return (
    <div
      className={classNames(styles.mainContainer, {
        [styles.reversedContainer]: reversed,
      })}
    >
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

        <div className={styles.technologiesContainer}>
          {technologiesList.map((technology) => (
            <span key={technology} className={styles.technologyItem}>
              {technology}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.photoContainer} />
    </div>
  );
};
