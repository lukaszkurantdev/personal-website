import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import styles from "./BlogSection.module.css";
import { BlogPost } from "@/components/BlogPost/BlogPost";
import { Button } from "@/components/Button/Button";
import { POSTS } from "@/modules/blog/BlogSection/BlogSection.constants";

export const BlogSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "blog" });
  const { t: blogT } = useTranslation("blog");

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h1">{t("title")}</Typography>
      </div>

      <div className={styles.row}>
        {POSTS.slice(0, 2).map((post) => (
          <BlogPost
            key={`blog-post-${post.index}`}
            date={blogT(`articles.article${post.index}.date`)}
            title={blogT(`articles.article${post.index}.title`)}
            description={blogT(`articles.article${post.index}.description`)}
            image={`/images/posts/article${post.index}.webp`}
            {...post}
          />
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
