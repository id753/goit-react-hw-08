// src/components/UserMenu/UserMenu.jsx
import s from "./UserMenu.module.css";

const UserMenu = ({ user, onLogout }) => (
  <div className={s.user_menu}>
    <span>Welcome, {user.name}</span>
    <button onClick={onLogout}>Logout</button>
  </div>
);

export default UserMenu;
