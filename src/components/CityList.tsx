import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
type Props = {
  cities: any;
  isLoading: any;
};

const CityList = ({ cities, isLoading }: Props) => {
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((item: any) => (
        <CityItem city={item} key={item.id} />
      ))}
    </ul>
  );
};

export default CityList;
