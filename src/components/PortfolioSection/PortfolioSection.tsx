import styles from "./PortfolioSection.module.css";
import { Typography } from "../Typography/Typography";
import { PortfolioItem } from "../PortfolioItem/PortfolioItem";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const PortfolioSection = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Portfolio
      </Typography>
      <Typography className={styles.title} opacity variant="small-paragraph">
        Selected projects
      </Typography>

      <div className={styles.grid}>
        {PORTFOLIO_DATA.map((item) => (
          <PortfolioItem
            key={`blog-post-${item.index}`}
            image={`/images/portfolio/item${item.index}/icon.png`}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
