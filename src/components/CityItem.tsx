import styles from "./CityItem.module.css";
type Props = {
  city: any;
};

const CityItem = ({ city }: Props) => {
  console.log(city);
  return <li className={styles.cityItem}>CityItem</li>;
};

export default CityItem;
