import { useState, useEffect } from "react";

const Quote = () => {
  const [myQuotes, setMyQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMyQuotes(res);
      });
  }, []);

  return (
    <div>
      <h1>Quotes</h1>

      {myQuotes.map((q) => {
        return (
          <div key={q}>
            <h2> test </h2>
            <p>{q}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Quote;
