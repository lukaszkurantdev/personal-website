import { useTranslation } from "next-i18next";

import styles from "./BlogSection.module.css";
import { POSTS } from "./BlogSection.constants";

import { Typography } from "@/components/Typography/Typography";
import { BlogPost } from "@/components/BlogPost/BlogPost";

export const BlogSection = () => {
  const { t } = useTranslation("blog");

  const posts = POSTS.map((post) => (
    <BlogPost
      key={`blog-post-${post.index}`}
      date={t(`articles.article${post.index}.date`)}
      title={t(`articles.article${post.index}.title`)}
      description={t(`articles.article${post.index}.description`)}
      image={`/images/posts/article${post.index}.webp`}
      {...post}
    />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h1">{t("title")}</Typography>
        <Typography opacity>{t("description")}</Typography>
      </div>

      <div className={styles.grid}>{posts}</div>

      <div className={styles.moreContainer}>
        <Typography variant="h2">{t("more.title")}</Typography>
        <Typography align="center" opacity>
          {t("more.description")}
        </Typography>
      </div>
    </div>
  );
};
