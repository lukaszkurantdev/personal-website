import Image from "next/image";
import Link from "next/link";
import { Typography } from "../Typography/Typography";

import styles from "./PortfolioItemDetails.module.css";
import { useTranslation } from "next-i18next";
import { PORTFOLIO_ITEMS } from "@/modules/portfolio/PortfolioList/PortfolioList.constants";
import Windows from "@/assets/icons/Windows.svg";
import Github from "@/assets/icons/Github.svg";
import GooglePlay from "@/assets/icons/GooglePlay.svg";
import Apple from "@/assets/icons/Apple.svg";
import ReactHtmlParser from "react-html-parser";
import { Button } from "../Button/Button";

type PortfolioItemDetailsProps = typeof PORTFOLIO_ITEMS[number];

export const PortfolioItemDetails = ({
  index: itemIndex,
  date,
  slug,
  color,
  imageSize,
  windowsStoreLink,
  githubLink,
  googlePlayLink,
  appStoreLink,
  websiteLink,
  screenshotsCount,
  screenshotSize,
  casesCount,
}: PortfolioItemDetailsProps) => {
  const { t } = useTranslation("portfolio");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.particle1} />
        <div className={styles.particle2} />
        <div className={styles.particle3} />
        <div className={styles.particle4} />
        <div className={styles.particle5} />

        <Image
          src={`/images/portfolio/item${itemIndex}/main.webp`}
          alt={t(`list.item${itemIndex}.title`)}
          className={styles.image}
          height={imageSize.height * 1.5}
          width={imageSize.width * 1.5}
        />

        <div
          className={styles.dateContainer}
          style={{ backgroundColor: color }}
        >
          <Typography variant="small-paragraph" className={styles.date}>
            {date}
          </Typography>
        </div>

        <Typography className={styles.title} variant="h1">
          {t(`list.item${itemIndex}.title`)}
        </Typography>

        <Typography opacity align="center" className={styles.description}>
          {t(`list.item${itemIndex}.description`)}
        </Typography>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <Typography variant="h2">{t(`item.about`)}</Typography>
          <Typography opacity>
            {ReactHtmlParser(t(`list.item${itemIndex}.about`))}
          </Typography>

          {websiteLink ? (
            <Link
              href={websiteLink}
              className={styles.websiteButton}
              target="_blank"
              rel="noreferrer"
            >
              <Button title={t("item.goToWebsite")} variant="danger" />
            </Link>
          ) : null}
        </div>
        <div className={styles.column}>
          <Typography variant="h2">{t(`item.usedTechnologies`)}</Typography>
          <Typography opacity>
            {t(`list.item${itemIndex}.usedTechnologies`)}
          </Typography>

          <div className={styles.socialContainer}>
            {windowsStoreLink ? (
              <Link href={windowsStoreLink}>
                <Windows />
              </Link>
            ) : null}

            {githubLink ? (
              <Link href={githubLink}>
                <Github />
              </Link>
            ) : null}

            {googlePlayLink ? (
              <Link href={googlePlayLink}>
                <GooglePlay />
              </Link>
            ) : null}

            {appStoreLink ? (
              <Link href={appStoreLink}>
                <Apple />
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {casesCount > 0 && (
        <div>
          <Typography variant="h2">
            {t(`item.interestingCases.title`)}
          </Typography>
          <Typography opacity>
            {t(`item.interestingCases.description`)}
          </Typography>
          <div className={styles.casesContainer}>
            {Array(casesCount)
              .fill(0)
              .map((_, index) => (
                <div key={`case-${index}`} className={styles.caseItem}>
                  <Typography variant="h3">
                    {t(`list.item${itemIndex}.cases.case${index}.title`)}
                  </Typography>
                  <Typography opacity>
                    {t(`list.item${itemIndex}.cases.case${index}.description`)}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      )}

      {screenshotsCount > 0 && (
        <div>
          <Typography variant="h2">{t(`item.gallery`)}</Typography>

          <div className={styles.gallery}>
            {Array(screenshotsCount)
              .fill(0)
              .map((_, index) => (
                <Image
                  key={`${slug}-screenshot-${index}`}
                  src={`/images/portfolio/item${itemIndex}/screenshot${index}.png`}
                  alt={`${slug} screenshot ${index}`}
                  height={screenshotSize.height}
                  width={screenshotSize.width}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};