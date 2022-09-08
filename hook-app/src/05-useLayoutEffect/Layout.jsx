import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-example";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, error } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote, author } = !!data && data[0]; // data puede ser null, entonces esto daría error
  // Para ejecutar esta línea solo si hay data, !data hace que null sea false y !!data hace que null sea true.
  // Es decir que cuando !!data sea true va a desetructurar la data[0]

  const onNextQuote = () => {
    increment();
  };

  const onPreviousQuote = () => {
    decrement();
  };

  return (
    <>
      <h1>Breakingbad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      <button
        className="btn btn-primary"
        onClick={onPreviousQuote}
        disabled={isLoading}
      >
        Previous quote
      </button>

      <button
        className="btn btn-primary"
        onClick={onNextQuote}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
