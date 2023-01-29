import { Outlet, useLocation } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
const Layout = ({ notShow = [] }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Outlet />
      {!notShow.includes(pathname) && <Footer />}
    </>
  );
};
export default Layout;
