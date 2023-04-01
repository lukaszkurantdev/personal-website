import styles from "./TextArea.module.css";

type TextAreaProps = {
  name: string;
  id: string;
  label: string;
  required?: boolean;
};

export const TextArea = ({ name, id, label, required }: TextAreaProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        className={styles.input}
        required={required}
      />
    </div>
  );
};
