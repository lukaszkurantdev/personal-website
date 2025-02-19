"use client";

import { useRouter, useSearchParams } from "next/navigation";

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
import { Button } from "@/components/Button/Button";
import { Links } from "@/constants/Links";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import classNames from "classnames";

const Form = () => {
  return (
    <form
      className={styles.form}
      method="POST"
      name="contact-form"
      action={FORM_ACTION}
      {...NETLIFY_FORM_PARAMS}
    >
      <input type="hidden" name={FORM_SUBJECT} value="Subject" />
      <input type="hidden" name={FORM_NAME} value={FORM_NAME_VALUE} />
      <p hidden>
        <label>
          <input name={BOT_FIELD_NAME} />
        </label>
      </p>

      <Input id="name" name="name" type="text" label="Name" required />
      <Input id="email" name="email" type="email" label="Email" required />
      <TextArea id="message" name="message" label="Message" required />
      <Button title="Submit" type="submit" className={styles.submitButton} />
    </form>
  );
};

const ConfirmationMessage = () => {
  const router = useRouter();

  const onClickButton = () => {
    router.replace(Links.Contact);
  };

  return (
    <div className={classNames(styles.form, styles.confirmation)}>
      <Typography>
        {
          "Thank you for submitting this form. Someone should get back to you within 24-48 hours."
        }
      </Typography>
      <Button
        title="Submit another response"
        type="submit"
        className={styles.button}
        onClick={onClickButton}
      />
    </div>
  );
};

export const ContactFormSection = () => {
  const searchParams = useSearchParams();

  const confirmationScreenVisible = searchParams.get("success") === "true";
  const formVisible = !confirmationScreenVisible;

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Typography opacity>
          {"Write to me and let's talk about your problems and expectations."}
        </Typography>
      </div>

      {formVisible ? <Form /> : <ConfirmationMessage />}
    </div>
  );
};
