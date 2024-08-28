import styles from "./page.module.css";
import { Typography } from "@/components/Typography/Typography";

import { BackButton } from "@/components/BackButton/BackButton";
import { ContactFormSection } from "@/components/ContactFormSection/ContactFormSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact – Lukasz Kurant",
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <BackButton />

        <Typography variant="h1" className={styles.title}>
          Contact
        </Typography>

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
    </main>
  );
}
