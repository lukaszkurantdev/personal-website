import styles from "./ExperienceItem.module.css";
import { Typography } from "../Typography/Typography";
import classNames from "classnames";
import { Tag } from "../Tag/Tag";

type ExperienceItemProps = {
  position: string;
  company: string;
  date: string;
  description: string;
  technologies: string;
  isCurrent: boolean;
};

export const ExperienceItem = ({
  position,
  company,
  date,
  description,
  technologies,
  isCurrent,
}: ExperienceItemProps) => {
  const tags = technologies.split(", ");

  return (
    <div className={styles.container}>
      <Typography
        className={styles.primaryColor}
        variant="small-paragraph"
        weight={isCurrent ? "bold" : "normal"}
      >
        {date}
      </Typography>
      <Typography weight="bold" className={styles.position}>
        {position}
      </Typography>
      <Typography variant="small-paragraph" opacity>
        {company}
      </Typography>

      <Typography variant="paragraph" className={styles.description}>
        {description}
      </Typography>

      {technologies && (
        <div className={styles.tagsContainer}>
          {tags.map((tag) => (
            <Tag title={tag} key={tag} />
          ))}
        </div>
      )}
    </div>
  );
};
