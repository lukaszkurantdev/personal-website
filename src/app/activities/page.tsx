import styles from "./page.module.css";
import { Typography } from "@/components/Typography/Typography";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "./page.constants";
import { CERTIFICATES_DATA } from "@/data/certificates";
import { PUBLICATIONS_DATA } from "@/data/publications";
import { Fade } from "react-awesome-reveal";
import { Metadata } from "next";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Activities – Lukasz Kurant",
};

export default function Activities() {
  return (
    <main className={styles.main}>
      <Header title="Activities" />
      <Fade>
        <div className={styles.contentContainer}>
          <Typography variant="h2" className={styles.title}>
            Publications
          </Typography>

          {PUBLICATIONS_DATA.map((item) => (
            <div key={item.key} className={styles.publication}>
              <Typography>{item.title}</Typography>
              <Typography variant="small-paragraph" opacity italic>
                {item.details}
              </Typography>
            </div>
          ))}

          <Typography variant="h2" className={styles.secondTitle}>
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
      </Fade>
    </main>
  );
}
