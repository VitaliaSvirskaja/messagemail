import styles from "../styles/features.module.css";

interface Props {}

export const Features = (props: Props) => {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.feature}>
        <div className={styles.featureBox}>
          <p className={styles.featureText}>
            Read & respond to DM’s from your social media accounts.
          </p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.featureBox}>
          <p className={styles.featureText}>
            Custom auto-response messages based on keywords from incoming DMs
          </p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.featureBox}>
          <p className={styles.featureText}>Mass DM selected recipients</p>
        </div>
      </div>
    </div>
  );
};
