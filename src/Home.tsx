import { Herosection } from "./components/Herosection";
import styles from "./styles/home.module.css";
import { Features } from "./components/Features";
import { Reviews } from "./components/Reviews";
import { CtaSection } from "./components/CtaSection";

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <Herosection />
      <Features />
      <Reviews />
      <CtaSection />
    </div>
  );
};
