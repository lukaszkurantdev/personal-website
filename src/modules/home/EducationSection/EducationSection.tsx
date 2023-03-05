import { Typography } from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import styles from "./EducationSection.module.css";
import EducationIcon from "@/assets/icons/EducationIcon.svg";
import { EducationInfoBox } from "@/components/EducationInfoBox/EducationInfoBox";

export const EducationSection = () => {
  const { t } = useTranslation("home", { keyPrefix: "education" });

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h1">{t("title")}</Typography>
        <Typography>{t("description")}</Typography>
      </div>

      <div className={styles.row}>
        <EducationInfoBox
          icon={<EducationIcon />}
          date="2020 - 2022"
          header="Master studies in the field of Computer Science"
          description="Maria Curie-Sklodowska University, Lublin, Poland"
          details="Thesis: The mechanism of argumentation mining in legal cases texts using recurrent neural networks."
        />
        <EducationInfoBox
          icon={<EducationIcon />}
          date="2020 - 2022"
          header="Master studies in the field of Computer Science"
          description="Maria Curie-Sklodowska University, Lublin, Poland"
          details="Thesis: The mechanism of argumentation mining in legal cases texts using recurrent neural networks."
        />
        <EducationInfoBox
          icon={<EducationIcon />}
          date="2020 - 2022"
          header="Master studies in the field of Computer Science"
          description="Maria Curie-Sklodowska University, Lublin, Poland"
          details="Thesis: The mechanism of argumentation mining in legal cases texts using recurrent neural networks."
        />
      </div>

      <div className={styles.textContainer}>
        <Typography variant="h2">{t("certificates.title")}</Typography>
        <Typography>{t("certificates.description")}</Typography>
      </div>

      <div className={styles.textContainer}>
        <Typography variant="h2">{t("otherActivities.title")}</Typography>
        <Typography>{t("otherActivities.description")}</Typography>
      </div>
    </div>
  );
};
