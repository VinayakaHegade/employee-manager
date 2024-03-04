import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <img
        className={styles.customerSupport}
        src="src/assets/customer-support.png"
        alt="customer support"
      />
      <img
        className={styles.moptroLogo}
        src="src/assets/moptro-logo.png"
        alt="moptro logo"
      />
    </div>
  );
};

export default Home;
