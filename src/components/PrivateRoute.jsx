import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

// 25 n app
const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // *33 n public
  const location = useLocation();

  // 25 n app

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export default PrivateRoute;
