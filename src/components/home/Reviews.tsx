import styles from "./Review.module.css";
import reviewPerson3 from "../../assets/reviewPerson3.png";
import reviewPerson2 from "../../assets/reviewPerson2.png";
import reviewPerson1 from "../../assets/reviewPerson1.png";
import { ReviewCard } from "./ReviewCard";

const reviewText1 =
  "It's never been easier to keep track of and respond to all your social media messages.";
const reviewText2 =
  "A unique and super effective tool - I highly recommend it.";
const reviewText3 =
  "Just the right tool to finally manage the social media message chaos.";

interface Props {}

export const Reviews = (props: Props) => {
  return (
    <div>
      <p className={styles.reviewHeader}>User Reviews</p>
      <div className={styles.reviewContainer}>
        <ReviewCard
          reviewText={reviewText1}
          reviewerName={"Sarah"}
          imgSrc={reviewPerson1}
        />
        <ReviewCard
          reviewText={reviewText2}
          reviewerName={"Thomas"}
          imgSrc={reviewPerson2}
        />
        <ReviewCard
          reviewText={reviewText3}
          reviewerName={"Kate"}
          imgSrc={reviewPerson3}
        />
      </div>
    </div>
  );
};
