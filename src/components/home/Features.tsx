import styles from "./Features.module.css";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";

interface Props {}

export const Features = (props: Props) => {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.featureBox}>
        <img src={feature1} alt="Feature1" className={styles.featureIcon} />
        <p className={styles.featureText}>
          Read & respond to DM’s from your social media accounts.
        </p>
      </div>
      <div className={styles.featureBox}>
        <img src={feature2} alt="Feature2" className={styles.featureIcon} />
        <p className={styles.featureText}>
          Custom auto-response messages based on keywords from incoming DMs
        </p>
      </div>
      <div className={styles.featureBox}>
        <img src={feature3} alt="Feature3" className={styles.featureIcon} />
        <p className={styles.featureText}>Mass DM selected recipients</p>
      </div>{" "}
    </div>
  );
};
