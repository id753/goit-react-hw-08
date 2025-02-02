import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

// 22 n app
const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // *33
  const location = useLocation();
  return isLoggedIn ? (
    <Navigate to="/contacts" state={{ from: location }} />
  ) : (
    children
  );
};

export default RestrictedRoute;
