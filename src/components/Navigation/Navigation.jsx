import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Navigation.module.css";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import styles from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
