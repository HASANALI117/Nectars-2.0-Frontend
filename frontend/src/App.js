import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./comonents/product/ProductCard";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./comonents/navbar/Navbar";

export default function App() {
  return (
    <NextUIProvider className="conatinerall">
      <Navbar
        brand="Brand"
        dropdownColor="success"
        buttonColor="success"
        profilePic="https://i.pravatar.cc/150"
      />
      <ProductCard
        name="Product Name"
        desc="This product is a product of many products that are produced here."
        price="$9.99"
        buttonColor="success"
      />
    </NextUIProvider>
  );
}
