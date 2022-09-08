import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (step = 1) => {
    setCounter(counter + step);
  };

  const decrement = (step = 1) => {
    if (counter - step <= 0) return
    setCounter(counter - step);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
