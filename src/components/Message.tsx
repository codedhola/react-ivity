import styles from "./Message.module.css";

interface Prop {
  message: any;
}
function Message({ message }: Prop) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
