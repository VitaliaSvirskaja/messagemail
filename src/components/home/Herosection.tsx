import banner from "../../assets/hero.png";
import styles from "./Herosection.module.css";
import { Link } from "react-router-dom";
import send from "../../assets/send.png";

interface Props {}

export const Herosection = (props: Props) => {
  return (
    <div className={styles.herosection}>
      <div>
        <h1 className={styles.headline}>Manage your DM's with Ease</h1>
        <h2 className={styles.subheadline}>
          We offer you a central location to manage all of your social media
          account’s direct messages!
        </h2>
        <Link to="/account">
          <button className={styles.cta}>
            <a className={styles.ctaText}>Manage my DM's</a>
            <img src={send} alt="Send-Icon" className={styles.ctaIcon} />
          </button>
        </Link>
      </div>
      <img src={banner} alt="Hero-Banner" className={styles.banner} />
    </div>
  );
};