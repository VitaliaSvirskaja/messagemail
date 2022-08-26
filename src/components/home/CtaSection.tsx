import styles from "./CtaSection.module.css";
import { CTA } from "../shared/CTA";

interface Props {}

export const CtaSection = (props: Props) => {
  return (
    <div className={styles.ctaContainer}>
      <p className={styles.ctaText}>Ready to start?</p>
      <CTA withIcon={true} size="normal" buttonText={"Manage my DM's"} />
    </div>
  );
};
