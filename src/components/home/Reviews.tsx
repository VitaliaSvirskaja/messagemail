import styles from "./Review.module.css";
import reviewPerson3 from "../../assets/reviewPerson3.png";
import reviewPerson2 from "../../assets/reviewPerson2.png";
import reviewPerson1 from "../../assets/reviewPerson1.png";

interface Props {}

export const Reviews = (props: Props) => {
  return (
    <div>
      <p className={styles.reviewHeader}>User Reviews</p>
      <div className={styles.reviewContainer}>
        <div className={styles.reviewCard}>
          <img
            src={reviewPerson1}
            alt="Person 1"
            className={styles.personImage}
          />
          <p className={styles.reviewText}>
            It's never been easier to keep track of and respond to all your
            social media messages.
          </p>
          <p className={`${styles.reviewText} ${styles.reviewPersonname}`}>
            - Sarah
          </p>
        </div>
        <div className={styles.reviewCard}>
          <img
            src={reviewPerson2}
            alt="Person 2"
            className={styles.personImage}
          />
          <p className={styles.reviewText}>
            A unique and super effective tool - I highly recommend it.
          </p>
          <p className={`${styles.reviewText} ${styles.reviewPersonname}`}>
            - Thomas
          </p>
        </div>
        <div className={styles.reviewCard}>
          <img
            src={reviewPerson3}
            alt="Person 3"
            className={styles.personImage}
          />
          <p className={styles.reviewText}>
            Just the right tool to finally manage the social media message
            chaos.
          </p>
          <p className={`${styles.reviewText} ${styles.reviewPersonname}`}>
            - Kate
          </p>
        </div>
      </div>
    </div>
  );
};
