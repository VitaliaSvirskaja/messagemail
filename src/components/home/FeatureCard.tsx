import styles from "./FeatureCard.module.css";

interface Props {
  imgSrc: string;
  featureText: string;
}

export const FeatureCard = (props: Props) => {
  return (
    <div className={styles.featureBox}>
      <img
        src={props.imgSrc}
        alt={props.imgSrc}
        className={styles.featureIcon}
      />
      <p className={styles.featureText}>{props.featureText}</p>
    </div>
  );
};
