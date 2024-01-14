import style from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

// type Props = {};

const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <p>Lists of cities</p>

      <Outlet />

      <footer className={style.footer}>
        <p className={style.copyright}>
          &copy; Copyright {new Date().getFullYear()} By CodedHola inc.{" "}
        </p>
      </footer>
    </div>
  );
};

export default SideBar;
