import styles from "./ColumnsContainer.module.css";
import { Typography } from "../Typography/Typography";
import { ReactNode } from "react";

type ColumnsContainerProps = {
  title: string;
  subTitle?: string;
  children: ReactNode
}

export const ColumnsContainer = ({ subTitle, children, title }: ColumnsContainerProps) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <Typography variant="h2">
          {title}
        </Typography>
        {subTitle ? <Typography opacity>
          {subTitle}
        </Typography> : null}
      </div>

      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};
