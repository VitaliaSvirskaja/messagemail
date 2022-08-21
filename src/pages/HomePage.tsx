import { Herosection } from "../components/home/Herosection";
import styles from "./Home.module.css";
import { Features } from "../components/home/Features";
import { Reviews } from "../components/home/Reviews";
import { CtaSection } from "../components/home/CtaSection";

interface Props {}

export const HomePage = (props: Props) => {
  return (
    <div className={styles.home}>
      <Herosection />
      <Features />
      <Reviews />
      <CtaSection />
    </div>
  );
};
