import { useTranslation } from "next-i18next";

import styles from "./PortfolioList.module.css";
import { PORTFOLIO_ITEMS } from "./PortfolioList.constants";

import { Button } from "@/components/Button/Button";
import { PortfolioItemBox } from "@/components/PortfolioItemBox/PortfolioItemBox";
import { Typography } from "@/components/Typography/Typography";

export const PortfolioList = () => {
  const { t } = useTranslation("portfolio");

  const items = PORTFOLIO_ITEMS.map((item) => (
    <PortfolioItemBox
      key={`blog-post-${item.index}`}
      title={t(`list.item${item.index}.title`)}
      description={t(`list.item${item.index}.description`)}
      image={`/images/portfolio/item${item.index}/main.webp`}
      {...item}
    />
  ));

  return (
    <div className={styles.container}>
      <Typography variant="h1">{t("title")}</Typography>
      <Typography opacity>{t("description")}</Typography>

      <div className={styles.grid}>{items}</div>

      <div className={styles.workContainer}>
        <Typography variant="h2">{t("work.title")}</Typography>
        <Typography opacity align="center">
          {t("work.description")}
        </Typography>
        <Button className={styles.workButton} title={t("work.button")} />
      </div>
    </div>
  );
};
