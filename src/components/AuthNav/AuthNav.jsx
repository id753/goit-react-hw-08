// src/components/AuthNav/AuthNav.jsx
import { Link } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => (
  <nav className={s.nav}>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
  </nav>
);

export default AuthNav;
