import styles from "./page.module.css";
import { Typography } from "@/components/Typography/Typography";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import ReactHtmlParser from "html-react-parser";
import { Button } from "@/components/Button/Button";
import { Github } from "@/assets/icons/Github";
import { Apple } from "@/assets/icons/Apple";
import { Tag } from "@/components/Tag/Tag";
import { BackButton } from "@/components/BackButton/BackButton";
import { Windows } from "@/assets/icons/Windows";
import { GooglePlay } from "@/assets/icons/GooglePlay";
import { Metadata } from "next";

const PORTFOLIO_ITEM_MULTIPLIER = 1.3;
const TECHNOLOGIES_DELIMITER = ",";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const ITEM = PORTFOLIO_DATA.find((item) => item.slug === params.slug);

  return {
    title: `${ITEM?.title} – Lukasz Kurant`,
  };
}

export default function PortfolioItem({
  params,
}: {
  params: { slug: string };
}) {
  const ITEM = PORTFOLIO_DATA.find((item) => item.slug === params.slug);

  if (!ITEM) {
    return null;
  }

  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <BackButton />

        <div className={styles.header}>
          <Image
            src={`/images/portfolio/item${ITEM.index}/main.webp`}
            alt={ITEM.title}
            className={styles.image}
            height={ITEM.imageSize.height * PORTFOLIO_ITEM_MULTIPLIER}
            width={ITEM.imageSize.width * PORTFOLIO_ITEM_MULTIPLIER}
          />

          <Typography variant="h1" className={styles.title} align="center">
            {ITEM.title}
          </Typography>

          <Typography opacity align="center">
            {ITEM.description}
          </Typography>

          <div
            className={styles.dateContainer}
            style={{ backgroundColor: ITEM.color }}
          >
            <Typography variant="small-paragraph" className={styles.date}>
              {ITEM.date}
            </Typography>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.aboutContainer}>
              <Typography variant="h2">About</Typography>
              <Typography opacity>{ReactHtmlParser(ITEM.about)}</Typography>

              {ITEM.websiteLink ? (
                <Link
                  href={ITEM.websiteLink}
                  className={styles.websiteButton}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button title="Go to website" />
                </Link>
              ) : null}
            </div>

            <div className={styles.socialContainer}>
              {ITEM.windowsStoreLink ? (
                <Link href={ITEM.windowsStoreLink}>
                  {" "}
                  <Windows />
                </Link>
              ) : null}

              {ITEM.githubLink ? (
                <Link href={ITEM.githubLink}>
                  <Github />
                </Link>
              ) : null}

              {ITEM.googlePlayLink ? (
                <Link href={ITEM.googlePlayLink}>
                  <GooglePlay />
                </Link>
              ) : null}

              {ITEM.appStoreLink ? (
                <Link href={ITEM.appStoreLink}>
                  <Apple />
                </Link>
              ) : null}
            </div>
          </div>
          <div className={styles.column}>
            <Typography variant="h2">Used technologies</Typography>
            <div className={styles.tagsContainer}>
              {ITEM.usedTechnologies
                .split(TECHNOLOGIES_DELIMITER)
                .map((tag) => (
                  <Tag title={tag} key={tag} />
                ))}
            </div>
          </div>
        </div>

        {ITEM.casesCount > 0 ? (
          <div>
            <Typography variant="h2">Cases</Typography>

            <div className={styles.casesContainer}>
              {ITEM.cases?.map((item, index) => (
                <div key={`case-${index}`} className={styles.caseItem}>
                  <Typography variant="h3">{item.title}</Typography>
                  <Typography opacity>{item.description}</Typography>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {ITEM.screenshotsCount > 0 ? (
          <div>
            <Typography variant="h2" className={styles.galleryTitle}>
              Gallery
            </Typography>

            <div className={styles.gallery}>
              {Array(ITEM.screenshotsCount)
                .fill(0)
                .map((_, index) => (
                  <Image
                    key={`${ITEM.slug}-screenshot-${index}`}
                    src={`/images/portfolio/item${ITEM.index}/screenshot${index}.png`}
                    alt={`${ITEM.slug} screenshot ${index}`}
                    height={ITEM.screenshotSize.height}
                    width={ITEM.screenshotSize.width}
                  />
                ))}
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((item) => ({
    slug: item.slug,
  }));
}
