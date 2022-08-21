import styles from "./CtaSection.module.css";
import sendIcon from "../../assets/send.png";

interface Props {}

export const CtaSection = (props: Props) => {
  return (
    <div className={styles.ctaContainer}>
      <p className={styles.ctaText}>Ready to start?</p>
      <button className={styles.ctaButton}>
        <p className={styles.buttonText}> Manage my DM's</p>
        <img src={sendIcon} alt="Send-Icon" className={styles.buttonIcon} />
      </button>
    </div>
  );
};
