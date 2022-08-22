import styles from "./CreateAccount.module.css";

interface Props {}

export const CreateAccountPage = (props: Props) => {
  return (
    <div className={styles.content}>
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.accountHeader1}>Create an account</h1>
          <h2 className={styles.accountHeader2}>
            After you create your basic account information, you will then be
            asked to connect your various social media accounts.
          </h2>
        </div>
        <div className={styles.accountForm}>
          <div className={styles.formField}>
            <label htmlFor="Name">Name</label>
            <input type="text" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="Email Adress">Email Adress</label>
            <input type="text" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="Name">Password</label>
            <input type="password" />
          </div>
          <button className={styles.submitButton} type="submit">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
