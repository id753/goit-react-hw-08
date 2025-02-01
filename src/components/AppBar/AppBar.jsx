// src/components/AppBar/AppBar.jsx
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import s from "./AppBar.module.css";

const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu user={user} onLogout={() => dispatch(logout())} />
      ) : (
        <AuthNav />
      )}
    </header>
  );
};

export default AppBar;
