export const POSTS = [
  {
    date: "March 21, 2023",
    title: "Association rules in JavaScript",
    description: "The use of an apriori algorithm to perform basket analysis.",
    link: "https://dogtronic.io/en/association-rules-in-javascript/",
    image: "/images/posts/basket.webp",
    polishVersionLink: "https://dogtronic.io/algorytmy-regresji-w-javascript/",
  },
  {
    date: "March 21, 2023",
    title: "Association rules in JavaScript",
    description: "The use of an apriori algorithm to perform basket analysis.",
    link: "https://dogtronic.io/en/association-rules-in-javascript/",
    image: "/images/posts/basket.webp",
    polishVersionLink: "https://dogtronic.io/algorytmy-regresji-w-javascript/",
  },
];

import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import styles from "./BlogSection.module.css";
import { BlogPost } from "@/components/BlogPost/BlogPost";
import { Button } from "@/components/Button/Button";

export const BlogSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "blog" });

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h1">{t("title")}</Typography>
      </div>

      <div className={styles.row}>
        {POSTS.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}

        <div className={styles.moreContainer}>
          <Typography variant="h2">{t("more.title")}</Typography>
          <Typography align="center">{t("more.description")}</Typography>
          <Button className={styles.button} title={t("more.button")} />
        </div>
      </div>
    </div>
  );
};
