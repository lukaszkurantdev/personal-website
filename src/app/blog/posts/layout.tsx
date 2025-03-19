import { BackButton } from "@/components/BackButton/BackButton";
import styles from "./page.module.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}

