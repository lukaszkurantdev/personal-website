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
          <div key={item.year} className={styles.yearContainer}>
            <Typography variant="paragraph" weight="bold">
              {item.year}
            </Typography>

            {item.articles.map((article) => (
              <BlogItem
                key={`post-${article.index}`}
                title={article.title}
                description={article.description}
                date={article.date}
                link={article.link}
                type={article.type}
              />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
