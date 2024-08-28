import styles from "./page.module.css";
import { Typography } from "@/components/Typography/Typography";
import { EXPERIENCE_DATA } from "@/data/experience";
import { ExperienceItem } from "@/components/ExperienceItem/ExperienceItem";
import { BackButton } from "@/components/BackButton/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience – Lukasz Kurant",
};

export default function Experience() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <BackButton />

        <Typography variant="h1" className={styles.title}>
          Experience and education
        </Typography>

        {EXPERIENCE_DATA.map((item) => (
          <ExperienceItem {...item} key={item.key} />
        ))}
      </div>
    </main>
  );
}
