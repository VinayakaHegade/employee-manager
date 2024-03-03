import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { AuthContext } from "./providers/AuthContext";
import { useContext } from "react";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
