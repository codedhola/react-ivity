import { object } from "prop-types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

interface props {
  children: ReactNode;
}

interface contextProp {
  cities: any;
  isLoading: any;
}

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "cities/loaded":
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
      };
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "city/loaded":
      return {
        ...state,
        currentCity: action.payload,
        isLoading: false,
      };
    case "created":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        isLoading: false,
        currentCity: action.payload,
      };
    case "deleted":
      return {
        ...state,
        cities: state.cities.filter((val: any) => val.id !== action.payload),
        isLoading: false,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action provided");
  }
}

const CitiesContext = createContext<null | any>(null);

export function CitiesProvider({ children }: props) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchCity() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        // setCities(data);
        dispatch({ type: "cities/loaded", payload: data });
      } catch (err: any) {
        dispatch({ type: "rejected", payload: err.message });
      }
    }
    fetchCity();
  }, []);

  async function getCity(id: string) {
    if (Number(id) === currentCity.id) return;
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      // setCurrentCity(data);
      dispatch({ type: "city/loaded", payload: data });
    } catch (err: any) {
      // alert("An Error Occured...");
      dispatch({ type: "rejected", payload: err.message });
    }
  }

  async function createCity(payload: any) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`http://localhost:8000/cities`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
      });
      // console.log(payload);
      const data = await res.json();
      // console.log(data);
      dispatch({ type: "created", payload: data });
      // setCities((cities: any) => [data, ...cities]);
    } catch (err: any) {
      dispatch({ type: "rejected", payload: err.message });
    }
  }

  async function deleteCity(id: any) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`http://localhost:8000/cities/${id}`, {
        method: "DELETE",
      });
      // console.log(payload);
      const data = await res.json();
      console.log(data);
      // setCities((cities: any) => cities.filter((val: any) => val.id !== id));
      dispatch({ type: "deleted", payload: id });
    } catch (err: any) {
      dispatch({ type: "rejected", payload: err.message });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities: cities,
        isLoading: isLoading,
        currentCity: currentCity,
        getCity,
        createCity,
        deletecity: deleteCity,
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
