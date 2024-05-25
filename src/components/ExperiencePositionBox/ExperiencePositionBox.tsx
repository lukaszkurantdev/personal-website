import classNames from "classnames";
import styles from "./ExperiencePositionBox.module.css";
import CalendarIcon from "../../assets/icons/calendar-icon.svg";
import { Typography } from "@/components/Typography/Typography";
import { TECHNOLOGIES_DELIMITER } from "../PortfolioItemDetails/PortfolioItemDetails.constants";
import Image from "next/image";
import { COMPANY_IMAGE_SIZE } from "./ExperiencePositionBox.styles";

type ExperiencePositionBoxProps = {
  date: string;
  position: string;
  company: string;
  description: string;
  expired?: boolean;
  technologies?: string;
  logoSrc?: string;
  isTopLineTransparent?: boolean;
  isBottomLineTransparent?: boolean;
};

export const ExperiencePositionBox = ({
  date,
  position,
  company,
  description,
  expired,
  logoSrc,
  technologies,
  isTopLineTransparent,
  isBottomLineTransparent,
}: ExperiencePositionBoxProps) => {
  const technologiesList = technologies?.split(TECHNOLOGIES_DELIMITER) || [];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.axisContainer}>
        <div
          className={classNames(
            styles.axisSmall,
            isTopLineTransparent && styles.transparentAxis
          )}
        />
        <div className={styles.logoContainer}>
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={company}
              height={COMPANY_IMAGE_SIZE}
              width={COMPANY_IMAGE_SIZE}
            />
          ) : null}
        </div>
        <div
          className={classNames(
            styles.axisLarge,
            isBottomLineTransparent && styles.transparentAxis
          )}
        />
      </div>
      <div className={styles.container}>
        <div
          className={classNames(
            styles.companyContainer,
            expired && styles.companyContainerExpired
          )}
        >
          <Typography className={styles.position}>{position}</Typography>
          <Typography className={styles.company}>{company}</Typography>
        </div>

        <Typography opacity>{description}</Typography>

        <div className={styles.technologiesContainer}>
          {technologiesList.map((technology) => (
            <span key={technology} className={styles.technologyItem}>
              {technology}
            </span>
          ))}
        </div>

        <Typography variant="small-paragraph" className={styles.date}>
          <CalendarIcon />
          {date}
        </Typography>
      </div>
    </div>
  );
};
