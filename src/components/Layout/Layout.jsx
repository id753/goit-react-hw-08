import { Outlet } from "react-router-dom";
// import Header from "../Header/Header";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <div>
      {/* всегда остается Xедер а под ним все остальное */}
      {/* <Header /> */}
      <AppBar />
      <Outlet />
    </div>
  );
};
export default Layout;
