import styles from "./ReviewCard.module.css";

interface Props {
  imgSrc: string;
  reviewText: string;
  reviewerName: string;
}

export const ReviewCard = (props: Props) => {
  return (
    <div className={styles.reviewCard}>
      <img
        src={props.imgSrc}
        alt={props.imgSrc}
        className={styles.personImage}
      />
      <p className={styles.reviewText}>{props.reviewText}</p>
      <p className={`${styles.reviewText} ${styles.reviewPersonname}`}>
        - {props.reviewerName}
      </p>
    </div>
  );
};
