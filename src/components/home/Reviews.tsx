import styles from "./Review.module.css";

interface Props {}

export const Reviews = (props: Props) => {
  return (
    <div>
      <p className={styles.reviewHeader}>User Reviews</p>
      <div className={styles.reviewContainer}>
        <div className={styles.reviewCard}></div>
        <div className={styles.reviewCard}></div>
        <div className={styles.reviewCard}></div>
      </div>
    </div>
  );
};
