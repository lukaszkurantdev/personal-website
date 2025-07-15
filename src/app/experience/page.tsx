import styles from "./page.module.css";
import { EXPERIENCE_DATA } from "@/data/experience";
import { ExperienceItem } from "@/components/ExperienceItem/ExperienceItem";
import { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Fade } from "react-awesome-reveal";

export const metadata: Metadata = {
  title: "Experience – Lukasz Kurant",
};

export default function Experience() {
  return (
    <main className={styles.main}>
      <Header breadCrumbTitle="Experience" title="Experience and education" />
      <Fade>
        <div className={styles.contentContainer}>
          {EXPERIENCE_DATA.map((item) => (
            <ExperienceItem {...item} key={item.key} />
          ))}
        </div>
      </Fade>
    </main>
  );
}
