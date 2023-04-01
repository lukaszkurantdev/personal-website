import styles from "./Input.module.css";
import type { HTMLInputTypeAttribute } from "react";

type InputProps = {
  name: string;
  id: string;
  label: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
};

export const Input = ({ name, id, label, required, type }: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <input
        id={id}
        name={name}
        className={styles.input}
        required={required}
        type={type}
      />
    </div>
  );
};
