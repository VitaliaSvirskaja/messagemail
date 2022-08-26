import styles from "./Login.module.css";
import { FormField } from "../components/shared/FormField";
import { useState } from "react";
import eyeOffIcon from "../assets/eye-off.png";
import eyeIcon from "../assets/eye.png";
interface Props {}

export const Login = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  function handleEyeclick() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.loginContainer}>
        <h1 className={styles.headerLogin}>Welcome back!</h1>
        <form className={styles.formContainer}>
          <div>
            <FormField type={"email"} label={"Email Adress"} />
          </div>
          <div>
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
            <div className={styles.forgotPassword}>Forgot passwort</div>
          </div>
          <button className={styles.submitButton} type="submit">
            Login
          </button>
        </form>
      </div>
      <div className={styles.registerContainer}>
        <h2 className={styles.headerRegister}>New here?</h2>
        <a href="/account">
          <button className={styles.registerButton}>Create account</button>
        </a>
      </div>
    </div>
  );
};
