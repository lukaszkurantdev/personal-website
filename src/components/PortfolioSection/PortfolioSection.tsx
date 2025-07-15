import styles from "./PortfolioSection.module.css";
import { PortfolioItem } from "../PortfolioItem/PortfolioItem";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ColumnsContainer } from "../ColumnsContainer/ColumnsContainer";

export const PortfolioSection = () => {
  return (
    <ColumnsContainer title="Portfolio" subTitle="Selected projects">
      <div className={styles.grid}>
        {PORTFOLIO_DATA.map((item) => (
          <PortfolioItem
            key={`blog-post-${item.index}`}
            image={`/images/portfolio/item${item.index}/icon.png`}
            {...item}
          />
        ))}
      </div>
    </ColumnsContainer>
  );
};
