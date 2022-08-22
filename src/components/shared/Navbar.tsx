import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { CTA } from "./CTA";
interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <div>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.account}>
        <a href="src/components/shared/Navbar">Log in</a>
        <CTA withIcon={false} size="small" />
      </div>
    </div>
  );
};
