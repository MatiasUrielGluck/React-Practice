function getPerson() {
  return {
    name: "Matías",
    age: "20",
    favColor: "blue",
  };
}

export const Card = () => {
  return (
    <div>
      <h4>Name: {getPerson().name}</h4>
      <p>Age: {getPerson().age}</p>
      <p>Favorite color: {getPerson().favColor}</p>
    </div>
  );
};
