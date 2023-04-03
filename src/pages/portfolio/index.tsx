import styles from "./styles.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PortfolioList } from "@/modules/portfolio/PortfolioList/PortfolioList";

export default function Portfolio() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <PortfolioList />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "cookies", "portfolio"])),
    },
  };
}
