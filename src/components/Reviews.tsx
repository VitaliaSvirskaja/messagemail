import styles from "../styles/review.module.css";

interface Props {}

export const Reviews = (props: Props) => {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewCard}></div>
      <div className={styles.reviewCard}></div>
      <div className={styles.reviewCard}></div>
    </div>
  );
};
