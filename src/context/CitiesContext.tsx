import { object } from "prop-types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface props {
  children: ReactNode;
}

interface contextProp {
  cities: any;
  isLoading: any;
}

const CitiesContext = createContext<null | any>(null);

export function CitiesProvider({ children }: props) {
  const [cities, setCities] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCity() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert("An Error Occured...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCity();
  }, []);

  async function getCity(id: string) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      alert("An Error Occured...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities: cities,
        isLoading: isLoading,
        currentCity: currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext is Being used outside its Provider");
  return context;
}
