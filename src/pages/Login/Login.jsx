import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <img src="greendzine-logo.png" alt="greendzine logo" />
      <h1 className={`${styles.hashtag} Mulish-Regular-16px`}>
        #We are Electric
      </h1>
      <section className={styles.loginFormSection}>
        <LoginForm />
        <Link className={`${styles.forgotPasword} Mulish-Regular-15px`}>
          Forgot Password?
        </Link>
      </section>
    </div>
  );
};

export default Login;
