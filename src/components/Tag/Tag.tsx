import styles from "./Tag.module.css";
import { Typography } from "../Typography/Typography";

type TagProps = {
  title: string;
};

export const Tag = ({ title }: TagProps) => {
  return (
    <div className={styles.container}>
      <Typography variant="x-small-paragraph">{title}</Typography>
    </div>
  );
};
