import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  type: string;
  onClick: MouseEventHandler;
  children: ReactNode;
};

const Button = ({ type, onClick, children }: Props) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
};

export default Button;
