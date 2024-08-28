import styles from "./page.module.css";
import { Typography } from "@/components/Typography/Typography";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "./page.constants";
import { CERTIFICATES_DATA } from "@/data/certificates";
import { PUBLICATIONS_DATA } from "@/data/publications";
import { BackButton } from "@/components/BackButton/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities – Lukasz Kurant",
};

export default function Activities() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <BackButton />

        <Typography variant="h1" className={styles.title}>
          Publications
        </Typography>

        {PUBLICATIONS_DATA.map((item) => (
          <div key={item.key}>
            <Typography weight="bold">{item.title}</Typography>
            <Typography variant="small-paragraph" opacity>
              {item.details}
            </Typography>
          </div>
        ))}

        <Typography variant="h1" className={styles.secondTitle}>
          Certificates
        </Typography>

        <div className={styles.certificatesContainer}>
          {CERTIFICATES_DATA.map((item) => (
            <Link
              key={item.alt}
              href={item.link}
              target="blank"
              rel="noreferrer"
            >
              <Image
                src={item.link}
                alt={item.alt}
                className={styles.image}
                height={IMAGE_HEIGHT}
                width={IMAGE_WIDTH}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
