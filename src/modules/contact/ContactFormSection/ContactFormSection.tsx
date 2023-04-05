import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import styles from "./ContactFormSection.module.css";
import {
  BOT_FIELD_NAME,
  FORM_ACTION,
  FORM_NAME,
  FORM_NAME_VALUE,
  FORM_SUBJECT,
  NETLIFY_FORM_PARAMS,
} from "./ContactFormSection.constants";

import { Typography } from "@/components/Typography/Typography";
import { Input } from "@/components/Input/Input";
import { TextArea } from "@/components/TextArea/TextArea";
import { Button } from "@/components/Button/Button";
import { Links } from "@/constants/Links";

const Form = () => {
  const { t } = useTranslation("contact", { keyPrefix: "form" });

  return (
    <form
      className={styles.form}
      method="POST"
      name="contact-form"
      action={FORM_ACTION}
      {...NETLIFY_FORM_PARAMS}
    >
      <input type="hidden" name={FORM_SUBJECT} value={t<string>("subject")} />
      <input type="hidden" name={FORM_NAME} value={FORM_NAME_VALUE} />
      <p hidden>
        <label>
          <input name={BOT_FIELD_NAME} />
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
    router.replace(Links.Contact, undefined, { shallow: true });
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
