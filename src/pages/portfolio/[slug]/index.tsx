import Head from "next/head";
import { useTranslation } from "next-i18next";

import styles from "./styles.module.css";

import { PORTFOLIO_ITEMS } from "@/modules/portfolio/PortfolioList/PortfolioList.constants";
import { PortfolioItemDetails } from "@/components/PortfolioItemDetails/PortfolioItemDetails";
import { getServerSideTranslations } from "@/utils/serverSideTranslations";
import type { ServerSideProps } from "@/types/ServerSideProps";

type Props = {
  item: typeof PORTFOLIO_ITEMS[number];
};

export default function PortfolioItem({ item }: Props) {
  const { t } = useTranslation("portfolio");

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>
          {t("itemHeadTitle", { name: t(`list.item${item.index}.title`) })}
        </title>
      </Head>

      <div className={styles.container}>
        <PortfolioItemDetails {...item} />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale, params }: ServerSideProps) {
  const item = PORTFOLIO_ITEMS.find((item) => item.slug === params?.slug);
  const translations = await getServerSideTranslations(locale, ["portfolio"]);

  return {
    props: {
      item,
      ...translations,
    },
  };
}

export const getStaticPaths = () => {
  return { fallback: "blocking", paths: [] };
};
