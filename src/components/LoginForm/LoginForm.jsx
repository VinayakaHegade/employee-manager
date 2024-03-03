import { useContext, useState } from "react";
import styles from "./LoginForm.module.css";
import { AuthContext } from "../../providers/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const guestEmail = "guest@example.com";
  const guestPassword = "guest123";

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.email === guestEmail && form.password === guestPassword) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert(
        "Wrong credentials! You can use the following guest credentials: \nEmail: guest@example.com \nPassword: guest123"
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <input
        autoComplete="off"
        placeholder="E-mail"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className={`${styles.input} Mulish-Bold-14px`}
      />
      <input
        autoComplete="new-password"
        placeholder="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        className={`${styles.input} Mulish-Bold-14px`}
      />
      <button
        type="submit"
        className={`${styles.submitButton} Mulish-Bold-16px`}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
