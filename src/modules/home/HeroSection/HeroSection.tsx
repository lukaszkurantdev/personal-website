import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import TextTransition from "react-text-transition";
import {
  TITLE_WORDS_KEYS,
  TRANSITION_SPRING_CONFIG,
} from "./HeroSection.constants";
import styles from "./HeroSection.module.css";
import Image from "next/image";

export const HeroSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "hero" });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  const titleWords = TITLE_WORDS_KEYS.map((word) => t(`titleWord.${word}`));

  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <div className={styles.textContainer}>
          <Typography variant="h1" fontSize={50}>
            {t("title")}
            <TextTransition
              springConfig={TRANSITION_SPRING_CONFIG}
              direction="down"
              className="text-center xl:text-left"
            >
              {titleWords[index % titleWords.length]}
            </TextTransition>
          </Typography>

          <Typography variant="h2" className={styles.header}>
            {t("header")}
          </Typography>
          <Typography>
            {t("description1")}
            <span className={styles.primaryText}>{t("description2")}</span>
            {t("description3")}
          </Typography>
          <Button className={styles.button} title={t("button")} />
        </div>
        <div className={styles.column}>
          <Image
            alt="avatar"
            src="/images/avatar.png"
            className={styles.image}
            width={550}
            height={506}
          />
        </div>
      </div>
    </div>
  );
};
