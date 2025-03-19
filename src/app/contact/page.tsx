import styles from "./page.module.css";
import { Fade } from "react-awesome-reveal";
import { ContactFormSection } from "@/components/ContactFormSection/ContactFormSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Contact – Lukasz Kurant",
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <Header title="Contact" />
      <Fade>
        <div className={styles.contentContainer}>
          <div className={styles.columns}>
            <div className={styles.column}>
              <Suspense>
                <ContactFormSection />
              </Suspense>
            </div>
            <div className={styles.column}>
              <AboutSection />
            </div>
          </div>
        </div>
      </Fade>
    </main>
  );
}
