import styles from "../shared/FormField.module.css";
import { useState } from "react";

interface Props {
  type: string;
  label: string;
}

export const FormField = (props: Props) => {
  return (
    <div className={styles.formField}>
      <label htmlFor={props.label} className={styles.label}>
        {props.label}
      </label>
      <input
        type={props.type}
        className={styles.inputField}
        id={props.label}
        required
      />
    </div>
  );
};
