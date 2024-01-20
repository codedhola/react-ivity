import React from "react";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
import User from "../components/User";

type Props = {};

const AppLayout = (props: Props) => {
  return (
    <div className={styles.app}>
      <User />
      <SideBar />
      <Map />
    </div>
  );
};

export default AppLayout;
