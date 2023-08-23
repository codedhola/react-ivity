import { useEffect, useState } from "react";

export function useLocalStorage(initialVal, key){

    const [value, setValue] = useState(function () {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialVal;
    });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue]
  
}