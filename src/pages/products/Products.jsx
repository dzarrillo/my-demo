import { useState, useEffect } from "react";
import "./Products.css";

const Products = () => {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albums) => {
        setMyProducts(albums);
      });
  }, []);

  return (
    <>
      <div>Products</div>
      <div className="product-grid">
        {myProducts.map((product) => {
          return (
            <div className="product-card">
              <p> Product {product.id}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
