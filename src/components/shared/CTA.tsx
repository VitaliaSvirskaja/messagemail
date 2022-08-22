import styles from "./CTA.module.css";
import sendIcon from "../../assets/send.png";

interface Props {
  withIcon: boolean;
  size: "small" | "normal";
}

export const CTA = (props: Props) => {
  return (
    <div>
      {props.withIcon && props.size === "normal" ? (
        <button className={`${styles.ctaButton} ${styles.ctaButtonWithIcon}`}>
          <p className={`${styles.buttonText} ${styles.buttonTextWithIcon}`}>
            {" "}
            Manage my DM's
          </p>
          <img src={sendIcon} alt="Send-Icon" className={styles.buttonIcon} />
        </button>
      ) : (
        <button className={`${styles.ctaButton} ${styles.ctaButtonSmall}`}>
          <p className={styles.buttonText}> Manage my DM's</p>
        </button>
      )}
    </div>
  );
};
