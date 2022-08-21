import styles from "./CTA.module.css";
import sendIcon from "../../assets/send.png";

interface Props {
  withIcon: boolean;
}

export const CTA = (props: Props) => {
  return (
    <div>
      {props.withIcon ? (
        <button className={styles.ctaButton}>
          <p className={styles.buttonText}> Manage my DM's</p>
          <img src={sendIcon} alt="Send-Icon" className={styles.buttonIcon} />
        </button>
      ) : (
        <button className={styles.ctaButtonWithoutIcon}>
          <p className={styles.buttonTextWithoutIcon}> Manage my DM's</p>
        </button>
      )}
    </div>
  );
};
