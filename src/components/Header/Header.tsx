import styles from "./Header.module.css";
import { Typography } from "../Typography/Typography";
import Link from "next/link";

type HeaderProps = {
  title: string;
  previousTitle?: string;
  previousLink?: string;
  description?: string;
  breadCrumbTitle: string;
};

export const Header = ({
  title,
  description,
  previousTitle,
  previousLink,
  breadCrumbTitle
}: HeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.insideContainer}>
        <div className={styles.breadCrumbs}>
          <Link href="/">
            <Typography variant="small-paragraph" link>
              Home
            </Typography>
          </Link>

          {previousTitle ? (
            <>
              <ChevronSvg />
              {previousLink ? (
                <Link href={previousLink}>
                  <Typography variant="small-paragraph" link>
                    {previousTitle}
                  </Typography>
                </Link>
              ) : (
                <Typography variant="small-paragraph" opacity>
                  {previousTitle}
                </Typography>
              )}
            </>
          ) : null}

          <ChevronSvg />
          <Typography variant="small-paragraph" opacity>
            {breadCrumbTitle}
          </Typography>
        </div>

        <Typography variant="h1" className={styles.title}>
          {title}
        </Typography>

        {description ? (
          <Typography variant="small-paragraph" opacity>
            {description}
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

const ChevronSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="gray"
    height={12}
    width={12}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);
