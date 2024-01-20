import { NavLink } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../context/CitiesContext";
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
  const { currentCity, deletecity } = useCities();
  const { emoji, cityName, date, id, position } = city;
  // console.log("DATAS => ", emoji, cityName, date, position);
  const deleteCity = (e: Event, id: any) => {
    e.preventDefault();
    console.log(e.target);
    deletecity(id);
    console.log(id);
  };

  return (
    <li>
      <NavLink
        to={`${id}?lat=${position?.lat}&lng=${position?.lng}`}
        className={`${styles.cityItem} ${
          currentCity.id === id ? styles["cityItem--active"] : ""
        }`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button
          onClick={(e: any) => deleteCity(e, id)}
          className={styles.deleteBtn}
        >
          &times;
        </button>
      </NavLink>
    </li>
  );
};

export default CityItem;
