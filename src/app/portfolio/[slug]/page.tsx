import styles from "./page.module.css";
import { Typography } from "@/components/Typography/Typography";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import ReactHtmlParser from "html-react-parser";
import { Tag } from "@/components/Tag/Tag";
import { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import classNames from "classnames";
import { Fade } from "react-awesome-reveal";

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
      <Header title={ITEM.title} previousTitle="Projects" />
      <Fade>
        <div className={styles.contentContainer}>
          <div className={styles.columns}>
            <div className={styles.column}>
              <div className={styles.aboutContainer}>
                <Typography variant="h2">About</Typography>
                <Typography opacity>{ReactHtmlParser(ITEM.about)}</Typography>
              </div>
            </div>
            <div className={classNames(styles.column, styles.column2)}>
              <Image
                src={`/images/portfolio/item${ITEM.index}/icon.png`}
                alt={ITEM.title}
                className={styles.image}
                height={30}
                width={30}
              />

              <div>
                <Typography variant="h3">Date</Typography>
                <Typography opacity> {ITEM.date}</Typography>
              </div>

              <div className={styles.linksContainer}>
                <Typography variant="h3">Links</Typography>

                {ITEM.websiteLink ? (
                  <Link
                    href={ITEM.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography link>Website</Typography>
                  </Link>
                ) : null}

                {ITEM.windowsStoreLink ? (
                  <Link
                    href={ITEM.windowsStoreLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography link>Microsoft Store</Typography>
                  </Link>
                ) : null}

                {ITEM.githubLink ? (
                  <Link href={ITEM.githubLink} target="_blank" rel="noreferrer">
                    <Typography link>Github</Typography>
                  </Link>
                ) : null}

                {ITEM.googlePlayLink ? (
                  <Link
                    href={ITEM.googlePlayLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography link>Google Play</Typography>
                  </Link>
                ) : null}

                {ITEM.appStoreLink ? (
                  <Link
                    href={ITEM.appStoreLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography link>App Store</Typography>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h3">Used technologies</Typography>
            <div className={styles.tagsContainer}>
              {ITEM.usedTechnologies
                .split(TECHNOLOGIES_DELIMITER)
                .map((tag) => (
                  <Tag title={tag} key={tag} />
                ))}
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
                      src={`/images/portfolio/item${ITEM.index}/screenshot${index}.webp`}
                      alt={`${ITEM.slug} screenshot ${index}`}
                      height={ITEM.screenshotSize.height}
                      width={ITEM.screenshotSize.width}
                    />
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      </Fade>
    </main>
  );
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((item) => ({
    slug: item.slug,
  }));
}
