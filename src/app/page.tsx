import styles from "./page.module.css";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { CurrentWorkSection } from "@/components/CurrentWorkSection/CurrentWorkSection";
import { StackSection } from "@/components/StackSection/StackSection";
import { BlogSection } from "@/components/BlogSection/BlogSection";
import { PortfolioSection } from "@/components/PortfolioSection/PortfolioSection";
import { Fade } from "react-awesome-reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fullstack Software Engineer – Lukasz Kurant",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />

      <Fade>
        <div className={styles.contentContainer}>
          <div className={styles.columnsContainer}>
            <div className={styles.column}>
              <CurrentWorkSection />
            </div>
            <div className={styles.column}>
              <BlogSection />
            </div>
          </div>

          <StackSection />

          <PortfolioSection />
        </div>
      </Fade>
    </main>
  );
}
