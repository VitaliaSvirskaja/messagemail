import styles from "../shared/FormField.module.css";
import { useState } from "react";

interface Props {
  type: string;
  label: string;
}

export const FormField = (props: Props) => {
  return (
    <div className={styles.formField}>
      <label htmlFor={props.label}>{props.label}</label>
      <input type={props.type} className={styles.inputField} required />
    </div>
  );
};

//TODO htmlFor besprechen
