import { BackButton } from "@/components/BackButton/BackButton";
import styles from "./page.module.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <BackButton />

        <div className={styles.articleContentContainer}>{children}</div>
      </div>
    </main>
  );
}
