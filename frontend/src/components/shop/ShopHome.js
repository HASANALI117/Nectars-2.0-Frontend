import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../../comonents/product/ProductCard";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "../../comonents/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../constants";

export default function ShopHome() {
  const { shopName } = useParams();
  const [shopId, setShopId] = useState({});
  const [shopOwnerId, setShopOwnerId] = useState({});

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/shops/${shopName}/`)
      .then((res) => {
        console.log(res.data);
        setShopId(res.data.shopId);
        setShopOwnerId(res.data.shopOwner);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <NextUIProvider>
      <Navbar brand={shopName} dropdownColor="success" />
      <ProductCard
        name="Product Name"
        desc="This product is a product of many products that are produced here."
        price="$9.99"
      />
    </NextUIProvider>
  );
}
