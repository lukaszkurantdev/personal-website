import { useTranslation } from "next-i18next";
import styles from "./ContactFormSection.module.css";
import { Typography } from "@/components/Typography/Typography";
import { Input } from "@/components/Input/Input";
import { TextArea } from "@/components/TextArea/TextArea";
import { Button } from "@/components/Button/Button";
import { useRouter } from "next/router";

const Form = () => {
  const { t } = useTranslation("contact", { keyPrefix: "form" });

  return (
    <form
      className={styles.form}
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="subject" value={t<string>("subject")} />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          <input name="bot-field" />
        </label>
      </p>

      <Input id="name" name="name" type="text" label={t("name")} required />
      <Input id="email" name="email" type="email" label={t("email")} required />
      <TextArea id="message" name="message" label={t("message")} required />

      <Button title={t("button")} type="submit" className={styles.button} />
    </form>
  );
};

const ConfirmationMessage = () => {
  const { t } = useTranslation("contact", { keyPrefix: "submitted" });
  const router = useRouter();

  const onClickButton = () => {
    router.replace("/contact", undefined, { shallow: true });
  };

  return (
    <div className={styles.form}>
      <Typography>{t("description")}</Typography>
      <Button
        title={t("button")}
        type="submit"
        className={styles.button}
        onClick={onClickButton}
      />
    </div>
  );
};

export const ContactFormSection = () => {
  const { t } = useTranslation("contact", { keyPrefix: "form" });
  const router = useRouter();

  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography variant="h1">{t("title")}</Typography>
        <Typography opacity>{t("description")}</Typography>
      </div>

       {formVisible ? <Form /> : <ConfirmationMessage />}
    </div>
  );
};
