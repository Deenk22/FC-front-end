import {Outlet, useLocation} from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Outlet />
      {location.pathname === "/login" ? null : <Footer />}
    </>
  );
}
