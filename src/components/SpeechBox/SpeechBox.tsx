import styles from "./SpeechBox.module.css";

import { Typography } from "@/components/Typography/Typography";
import Image from "next/image";
import { CERTIFICATE_IMAGE_SIZE } from "./SpeechBox.constants";

export type SpeechBoxProps = {
  date: string;
  title: string;
  publisher?: string;
  description?: string;
  logoSrc?: string;
  logoAlt?: string;
};

export const SpeechBox = ({
  date,
  title,
  publisher,
  description,
  logoSrc,
  logoAlt,
}: SpeechBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        {logoSrc && logoAlt ? (
          <Image
            src={logoSrc}
            alt={logoAlt}
            height={CERTIFICATE_IMAGE_SIZE}
            width={CERTIFICATE_IMAGE_SIZE}
          />
        ) : null}
        <div>
          <Typography weight="bold">{title}</Typography>
          <Typography variant="small-paragraph" opacity>
            {date}
          </Typography>
        </div>
      </div>
      <Typography>{publisher}</Typography>

      <Typography variant="small-paragraph" opacity>
        {description}
      </Typography>
    </div>
  );
};
