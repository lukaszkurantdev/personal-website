import Image from "next/image";
import styles from "./page.module.css";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { Typography } from "@/components/Typography/Typography";
import Link from "next/link";
import { CurrentWorkSection } from "@/components/CurrentWorkSection/CurrentWorkSection";
import { LibrariesSection } from "@/components/LibrariesSection/LibrariesSection";
import { StackSection } from "@/components/StackSection/StackSection";
import { BlogSection } from "@/components/BlogSection/BlogSection";
import { PortfolioSection } from "@/components/PortfolioSection/PortfolioSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fullstack Software Engineer – Lukasz Kurant",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />

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
    </main>
  );
}
