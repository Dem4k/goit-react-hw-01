import styles from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={clsx(styles.status, isOnline ? styles.on : styles.off)}>
        {isOnline ? "Online" : "Offline"}
      </p>
      {/* <p className={`${styles.status} ${isOnline ? styles.on : styles.off}`}>
        {isOnline ? "Online" : "Offline"}
      </p> */}
    </div>
  );
}
