import styles from "./CreateAccount.module.css";
import eyeIcon from "../assets/eye.png";
import eyeOffIcon from "../assets/eye-off.png";
import { FormField } from "../components/shared/FormField";
import { useState } from "react";
interface Props {}

export const CreateAccountPage = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  function handleEyeclick() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <div className={styles.content}>
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.accountHeader1}>Create an account</h1>
          <h2 className={styles.accountHeader2}>
            After you create your basic account information, you will then be
            asked to connect your various social media accounts.
          </h2>
        </div>
        <form className={styles.accountForm}>
          <FormField type={"text"} label={"Name"} />
          <div className={styles.formField}>
            <FormField type={"text"} label={"Email Adress"} />
          </div>
          <div className={styles.formField}>
            <FormField
              type={passwordVisible ? "text" : "password"}
              label={"Password"}
            />
            <img
              src={passwordVisible ? eyeOffIcon : eyeIcon}
              alt="Eye-Icon"
              className={styles.eyeIcon}
              onClick={handleEyeclick}
            />
          </div>

          <button className={styles.submitButton} type="submit">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

//TODO eye icon für show_hide password erstellen -> setInputType "text" bzw. "password"
