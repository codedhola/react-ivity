import CountryItem from "./CountryItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../context/CitiesContext";

type Props = {
  cities: any;
  isLoading: any;
};

const CountryList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((arr: any, city: any) => {
    if (!arr.map((el: any) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  if (!countries.length) return <Message message="add Your countries" />;
  return (
    <ul className={styles.countryList}>
      {countries.map((item: any) => (
        <CountryItem country={item} key={item.id} />
      ))}
    </ul>
  );
};

export default CountryList;
