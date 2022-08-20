import styles from "../styles/navbar.module.css";
import logo from "../assets/logo.png";
interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <div>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.account}>
        <a href="">Log in</a>
        <button>Manage my DM's</button>
      </div>
    </div>
  );
};