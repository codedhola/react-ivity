import React from "react";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";

type Props = {};

const AppLayout = (props: Props) => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
};

export default AppLayout;
