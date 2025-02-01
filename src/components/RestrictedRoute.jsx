import { useSelector } from "react-redux";
import {
  Navigate,
  // useLocation
} from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

// 22 n app
const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const location = useLocation();

  // *33
  // const location = useLocation();
  // return isLoggedIn ? <Navigate to={location?.state || "/todos"} /> : children;
  return !isLoggedIn ? children : <Navigate to="/contacts" />;
};

export default RestrictedRoute;
