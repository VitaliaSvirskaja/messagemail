import styles from "./Features.module.css";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import { FeatureCard } from "./FeatureCard";

const featureText1 = "Read & respond to DM’s from your social media accounts.";
const featureText2 =
  "Custom auto-response messages based on keywords from incoming DMs";
const featureText3 = "Mass DM selected recipients";

interface Props {}

export const Features = (props: Props) => {
  return (
    <div className={styles.featureContainer}>
      <FeatureCard imgSrc={feature1} featureText={featureText1} />
      <FeatureCard imgSrc={feature2} featureText={featureText2} />
      <FeatureCard imgSrc={feature3} featureText={featureText3} />
    </div>
  );
};
