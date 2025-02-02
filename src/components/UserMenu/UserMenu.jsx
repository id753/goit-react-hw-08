// src/components/UserMenu/UserMenu.jsx
import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.user_menu}>
      <span>Welcome, {user.name}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
