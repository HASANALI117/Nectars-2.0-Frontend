import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../../components/product/ProductCard";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "../navbar/NavBar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import NavbarSettings from "../customization/navbarSettings/NavbarSettings";
import Banner from "../banner/Banner";
import { useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../constants";
import ProductsCarousel from "../product/ProductsCarousel";

export default function ShopHome() {
  const { shopName } = useParams();
  const [shopId, setShopId] = useState();
  const [shopOwnerId, setShopOwnerId] = useState();
  const [shopProps, setShopProps] = useState({});
  const [isLoadingShopId, setIsLoadingShopId] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [shopCategories, setShopCategories] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);

  const [productData, setProductData] = useState({
    color: "white",
    // title: "Product Name",
    fontSize: "1rem",
    // price: "$400",
    noOfCards: "5",
    isCarousel: true,
    bgColor: "gray",
    showDots: false,
  });

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/shops/${shopName}/`)
      .then((res) => {
        console.log(res.data);
        setShopId(res.data[0].shopId);
        setShopOwnerId(res.data[0].shopOwner);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (shopId) {
      axios
        .get(`${BACKEND_URL}/shops/${shopId}/props/`)
        .then((res) => {
          console.log(res.data);
          setShopProps(res.data[0].props);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(`${BACKEND_URL}/categories/shop/${shopId}/`)
        .then((res) => {
          console.log(res.data);
          setShopCategories(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setIsLoadingShopId(false);
  }, [shopId]);

  useEffect(() => {
    if (shopCategories.length > 0) {
      const categories = shopCategories.sort(() => Math.random() - 0.5);
      console.log(categories);
      const requests = categories.map((category) =>
        axios.get(
          `${BACKEND_URL}/products/search/?shopId=${shopId}&filter=${category.categoryId}`
        )
      );

      Promise.all(requests)
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            console.log(res[i].data);
            setShopProducts((prev) => [
              ...prev,
              { category: categories[i].name, products: res[i].data },
            ]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [shopCategories]);

  useEffect(() => {
    if (shopProducts.length > 0) {
      setIsLoadingProducts(false);
      console.log("products:", shopProducts);
    }
  }, [shopProducts]);

  // const bannerData = {
  //   imageUrl:
  //     "https://t4.ftcdn.net/jpg/04/28/76/95/360_F_428769564_NB2T4JM9E2xsxFdXXwqW717HwgaZdpAq.jpg", // a url to add an image
  //   color: "", // a color to add a background color
  //   overlay: true, // a boolean to add an overlay
  //   title: "Welcome to the Jungle", // a title
  //   titleColor: "white", // a title color
  //   titleSize: "30px", // a title size
  //   titleAlignment: "center", // a title alignment
  // };

  const bannerData = shopProps.banner;

  return (
    <NextUIProvider>
      {isLoadingShopId ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Navbar brand={shopName} dropdownColor="success" />
          <Banner {...bannerData} />
          {isLoadingProducts ? (
            <div>Loading...</div>
          ) : (
            shopProducts.map((products, index) => (
              <ProductsCarousel
                categoryTitle={products.category}
                productList={products.products}
                {...productData}
              />
            ))
          )}
        </div>
      )}

      {/* <ProductCard
        name="Product Name"
        desc="This product is a product of many products that are produced here."
        price="$9.99"
      /> */}
    </NextUIProvider>
  );
}
