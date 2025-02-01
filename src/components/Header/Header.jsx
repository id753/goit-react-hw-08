// import { Link, NavLink } from "react-router-dom";
// import s from "./Header.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
// import { logout } from "../../redux/auth/operations";

// const Header = () => {
//   // 12
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const user = useSelector(selectUser);
//   // 14
//   const dispatch = useDispatch();

//   return (
//     <header className={s.header}>
//       <h2>Phonebook</h2>
//       {/* 12  n authoperations*/}
//       {/* Если пользователь авторизован, выводим приветствие */}
//       {isLoggedIn && <h2>WELCOME, {user.name}</h2>}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           {/* Показываем ссылку на "Contacts" только если пользователь авторизован */}
//           {isLoggedIn && (
//             <li>
//               <Link to="/contacts">Contacts</Link>
//             </li>
//           )}
//           {/* 12 Показываем ссылки на регистрацию и логин только если пользователь не авторизован */}
//           {!isLoggedIn && (
//             <>
//               <li>
//                 <Link to="/register">Register</Link>
//               </li>
//               <li>
//                 <NavLink to="/login">Login</NavLink>
//               </li>
//             </>
//           )}
//           {/* 12 Показываем кнопку выхода, если пользователь авторизован */}
//           {isLoggedIn && (
//             <li>
//               {/* // 14 n authslice */}
//               <button onClick={() => dispatch(logout())}>Logout</button>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
