import { BLOG_DATA } from "@/data/blog";
import styles from "./page.module.css";
import { Typography } from "@/components/Typography/Typography";
import { BlogItem } from "@/components/BlogItem/BlogItem";
import { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Fade } from "react-awesome-reveal";

export const metadata: Metadata = {
  title: "Blog – Lukasz Kurant",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Header title="Blog" />
      <Fade>
        <div className={styles.contentContainer}>
          {BLOG_DATA.map((item) => (
            <div key={item.year} className={styles.yearContainer}>
              <Typography variant="paragraph">{item.year}</Typography>

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
      </Fade>
    </main>
  );
}
