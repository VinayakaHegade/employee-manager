import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <img src="greendzine-logo.png" alt="greendzine logo" />
      <h1 className={`${styles.hashtag} Mulish-Regular-16px`}>#We are Electric</h1>
    </div>
  );
};

export default Login;
