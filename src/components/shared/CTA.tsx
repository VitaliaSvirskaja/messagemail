import styles from "./CTA.module.css";
import sendIcon from "../../assets/send.png";

interface Props {
  withIcon: boolean;
  size: "small" | "normal";
  buttonText: string;
}

export const CTA = (props: Props) => {
  return (
    <a href="/account" style={{ textDecoration: "none" }}>
      {props.withIcon && props.size === "normal" ? (
        <button className={`${styles.ctaButton} ${styles.ctaButtonWithIcon}`}>
          <p className={`${styles.buttonText} ${styles.buttonTextWithIcon}`}>
            {props.buttonText}
          </p>
          <img src={sendIcon} alt="Send-Icon" className={styles.buttonIcon} />
        </button>
      ) : (
        <button className={`${styles.ctaButton} ${styles.ctaButtonSmall}`}>
          <p className={styles.buttonText}>{props.buttonText}</p>
        </button>
      )}
    </a>
  );
};
