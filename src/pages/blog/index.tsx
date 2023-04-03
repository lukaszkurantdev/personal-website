import styles from "./styles.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BlogSection } from "@/modules/blog/BlogSection/BlogSection";

export default function Blog() {
  return (
    <div className={styles.container}>
      <BlogSection />
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","cookies", "blog"])),
    },
  };
}
