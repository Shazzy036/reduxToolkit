import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProducts(data);
    //   });

    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="row">
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                product={product}
              />
            );
          })}
      </div>
    </>
  );
};

export default Product;
