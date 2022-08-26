import { FormField } from "../components/shared/FormField";
import styles from "./ContactUs.module.css";
import { CTA } from "../components/shared/CTA";

interface Props {}

export const ContactUs = (props: Props) => {
  return (
    <div className={styles.contentContainer}>
      <div>
        <h1 className={styles.headline}>Contact</h1>
        <h2 className={styles.subheadline}>
          Have a question that's not addressed in our FAQ? Contact us below.
        </h2>
        <h2 className={`${styles.headline} ${styles.subheadline}`}>
          You can also send an e-mail to:contact@messagemail.com
        </h2>
      </div>
      <div className={styles.formField}>
        <FormField type={"email"} label={"Email Adress"}></FormField>
        <div className={styles.messageField}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            name="Message"
            maxLength={300}
            rows={15}
            className={styles.messageInput}
          >
            {" "}
          </textarea>
        </div>
        <div className={styles.ctaButton}>
          <CTA withIcon={false} size="normal" buttonText={"Send message"} />
        </div>
      </div>
    </div>
  );
};
