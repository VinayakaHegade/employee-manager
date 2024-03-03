import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
