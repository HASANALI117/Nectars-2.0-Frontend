import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./comonents/product/ProductCard";

export default function App() {
  return (
    <ProductCard
      name="Product Name"
      desc="This product is a product of many products that are produced here."
      price="$9.99"
    />
  );
}
