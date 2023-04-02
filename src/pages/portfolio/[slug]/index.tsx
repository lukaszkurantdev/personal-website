import styles from "./styles.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AboutSection } from "@/modules/contact/AboutSection/AboutSection";
import { ContactFormSection } from "@/modules/contact/ContactFormSection/ContactFormSection";
import { PORTFOLIO_ITEMS } from "@/modules/portfolio/PortfolioList/PortfolioList.constants";
import { PortfolioItemDetails } from "@/components/PortfolioItemDetails/PortfolioItemDetails";

type Props = {
  item: typeof PORTFOLIO_ITEMS[number];
};

export default function PortfolioItem({item}: Props) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <PortfolioItemDetails {...item} />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale, params }: any) {
  const item = PORTFOLIO_ITEMS.find(item => item.slug === params.slug)

  return {
    props: {
      item,
      ...(await serverSideTranslations(locale, ["common", "portfolio"])),
    },
  };
}

export const getStaticPaths = () => {
  return { fallback: 'blocking', paths: [] };
};
