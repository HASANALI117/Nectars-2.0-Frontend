import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../../comonents/product/ProductCard";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "../../comonents/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ShopHome() {
  const { shopName } = useParams();

  useEffect(() => {
    console.log(shopName);
  }, []);

  return (
    <NextUIProvider>
      <Navbar
        brand="ShopName"
        dropdownColor="secondary"
        signupColor="secondary"
        loginColor="text"
        profilePic="https://i.pravatar.cc/300"
        buttonColor="secondary"
        variant="default"
        activeColor="secondary"
      />
      <ProductCard
        name="Product Name"
        desc="This product is a product of many products that are produced here."
        price="$9.99"
      />
    </NextUIProvider>
  );
}
