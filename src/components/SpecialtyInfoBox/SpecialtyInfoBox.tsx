import classNames from "classnames";
import type { ReactNode } from "react";

import styles from "./SpecialtyInfoBox.module.css";
import { TECHNOLOGIES_DELIMITER } from "./SpecialtyInfoBox.constants";

import { Typography } from "@/components/Typography/Typography";

type SpecialtyInfoBoxProps = {
  icon: ReactNode;
  header: string;
  description: string;
  technologiesHeader: string;
  technologies: string;
  reversed?: boolean;
};

export const SpecialtyInfoBox = ({
  icon,
  header,
  reversed,
  description,
  technologies,
  technologiesHeader,
}: SpecialtyInfoBoxProps) => {
  const technologiesList = technologies.split(TECHNOLOGIES_DELIMITER);

  return (
    <div
      className={classNames(styles.mainContainer, {
        [styles.reversedContainer]: reversed,
      })}
    >
      <div className={styles.container}>
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
      <div className={styles.photoContainer}>{icon}</div>
    </div>
  );
};
