import { BLOG_DATA } from "@/data/blog";
import styles from "./page.module.css";
import { Typography } from "@/components/Typography/Typography";
import { BlogItem } from "@/components/BlogItem/BlogItem";
import { BackButton } from "@/components/BackButton/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Lukasz Kurant",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <BackButton />

        <Typography variant="h1" className={styles.title}>
          Blog
        </Typography>

        {BLOG_DATA.map((item) => (
          <BlogItem
            key={`post-${item.index}`}
            title={item.title}
            description={item.description}
            date={item.date}
            link={item.link}
          />
        ))}
      </div>
    </main>
  );
}
