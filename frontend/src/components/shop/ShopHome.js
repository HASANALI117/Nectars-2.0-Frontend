import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../../components/product/ProductCard";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "../navbar/NavBar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import NavbarSettings from "../customization/navbarSettings/NavbarSettings";
import Banner from "../banner/Banner";

export default function ShopHome() {
  const { shopName } = useParams();

  useEffect(() => {
    console.log(shopName);
  }, []);

  const bannerData = {
    imageUrl:
      "https://t4.ftcdn.net/jpg/04/28/76/95/360_F_428769564_NB2T4JM9E2xsxFdXXwqW717HwgaZdpAq.jpg", // a url to add an image
    color: "", // a color to add a background color
    overlay: true, // a boolean to add an overlay
    title: "Welcome to the Jungle", // a title
    titleColor: "white", // a title color
    titleSize: "30px", // a title size
    titleAlignment: "center", // a title alignment
  };

  return (
    <NextUIProvider>
      <Navbar brand={shopName} dropdownColor="success" />
      <Banner {...bannerData} />

      {/* <ProductCard
        name="Product Name"
        desc="This product is a product of many products that are produced here."
        price="$9.99"
      /> */}
    </NextUIProvider>
  );
}
