import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  const onIncrementHandler = () => {
    increment();
  };

  const onDecrementHandler = () => {
    decrement();
  };

  const onResetHandler = () => {
    reset();
  };

  return (
    <>
      <h1>CounterWithCustomHook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={onIncrementHandler}>
        +1
      </button>
      <button className="btn btn-primary" onClick={onDecrementHandler}>-1</button>
      <button className="btn btn-primary" onClick={onResetHandler}>Reset</button>
    </>
  );
};
