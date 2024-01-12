import { NavLink, useParams } from "react-router-dom";
import styles from "./CityItem.module.css";
type Props = {
  city: any;
};
const formatDate = (date: any) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }: Props) => {
  const { emoji, cityName, date, id, position } = city;

  console.log(city);
  return (
    <li>
      <NavLink
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={styles.cityItem}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </NavLink>
    </li>
  );
};

export default CityItem;
