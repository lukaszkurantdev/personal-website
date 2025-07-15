import Link from "next/link";
import styles from "./BlogSection.module.css";
import { Typography } from "../Typography/Typography";
import { BlogItem } from "../BlogItem/BlogItem";
import { BLOG_DATA } from "@/data/blog";
import { Links } from "@/constants/Links";
import { ColumnsContainer } from "../ColumnsContainer/ColumnsContainer";

const DATA = [...BLOG_DATA[0].articles, ...BLOG_DATA[1].articles].slice(0, 3);

export const BlogSection = () => {
  return (
    <ColumnsContainer title="New on my blog">
      {DATA.map((item) => (
        <BlogItem
          key={`post-${item.index}`}
          title={item.title}
          description={item.description}
          date={item.date}
          link={item.link}
          type={item.type}
        />
      ))}

      <div className={styles.linksContainer}>
        <Link href={Links.Blog}>
          <Typography variant="small-paragraph" link>
            Check my all blog posts
          </Typography>
        </Link>
      </div>
    </ColumnsContainer>
  );
};
