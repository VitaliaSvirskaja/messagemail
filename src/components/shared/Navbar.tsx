import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { CTA } from "./CTA";
interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </a>
      <div className={styles.account}>
        <a
          href="/login"
          style={{ textDecoration: "none" }}
          className={styles.logIn}
        >
          Login
        </a>
        <CTA withIcon={false} size="small" />
      </div>
    </div>
  );
};
