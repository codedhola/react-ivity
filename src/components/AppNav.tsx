import styles from "./appNav.module.css";
import { NavLink } from "react-router-dom";

type Props = {};

const AppNav = (props: Props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="country">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
