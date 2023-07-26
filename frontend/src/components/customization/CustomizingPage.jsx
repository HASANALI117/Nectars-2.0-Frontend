import React, { useState } from "react";
import Banner from "../banner/Banner";
import BannerUtilities from "./banner/BannerUtilities";
import NavBarUtilities from "./navbarSettings/NavBarUtilities";
import Navbar from "../navbar/NavBar";
import ProductsCarousel from "../product/ProductsCarousel";
import ProductUtilities from "./product/ProductUtilities";
import PUtilities from "./product/PUtilities";

export default function CustomizingPage() {
  // Banner Customization
  const [bannerData, setBannerData] = useState({
    imageUrl:
      "https://t4.ftcdn.net/jpg/04/28/76/95/360_F_428769564_NB2T4JM9E2xsxFdXXwqW717HwgaZdpAq.jpg",
    color: "",
    overlay: true,
    title: "Welcome to the Jungle",
    titleColor: "white",
    titleSize: "30px",
    titleAlignment: "center",
    titleFont: "Arial, sans-serif",
    Vpos: "center",
  });

  const handleBannerUpdate = (updatedData) => {
    setBannerData(updatedData);
  };

  const bannerContainerStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  // Navbar Customization
  const [navBarData, setNavBarData] = useState({
    variant: "default",
    activeColor: "primary",
    signupColor: "primary",
    loginColor: "primary",
    buttonColor: "primary",
  });

  const handleNavBarUpdate = (updatedData) => {
    setNavBarData(updatedData);
  };

  const navBarContainerStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const defaultImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn25GIKRBm9pns6PBe8Sk0YSvV9h9sMcGYtFTMbOv7Tid9iXssGbOk_px6W-M8MoL77Rw&qp=CAU";

  const defaultProductList = [];

  for (let i = 0; i < 15; i++) {
    const product = {
      poster_image_url: defaultImageUrl,
      name: "Product " + (i + 1),
      price: "100",
    };
    defaultProductList.push(product);
  }

  // Product Customization

  const [productData, setProductData] = useState({
    color: "white",
    fontSize: "1rem",
    isCarousel: false,
    bgColor: "black",
    showDots: false,
    catBgColor: "gray",
    catFoColor: "white",
  });

  const handleProductUpdate = (updatedData) => {
    setProductData(updatedData);
  };

  const productContainerStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div>
      <h1 className="Customize-page">Customize your website</h1>

      {/* <h2>Banner</h2>
      <br></br>

      <Banner {...bannerData} />
      <BannerUtilities bannerData={bannerData} onUpdate={handleBannerUpdate} /> */}
      <br></br>
      <h2>Navbar</h2>
      <br></br>

      <div style={navBarContainerStyle}>
        <Navbar {...navBarData} />
      </div>
      <NavBarUtilities navBarData={navBarData} onUpdate={handleNavBarUpdate} />
      <br />
      <h2>Banner</h2>
      <Banner {...bannerData} />
      <BannerUtilities bannerData={bannerData} onUpdate={handleBannerUpdate} />
      {/* <Banner {...bannerData} /> 
      </div> 
    </div> 


      <div style={bannerContainerStyle}>
        <Banner {...bannerData} />
      </div>
*/}
      <h2>Product</h2>

      <div style={productContainerStyle}>
        <ProductsCarousel
          {...productData}
          productList={defaultProductList}
          categoryTitle={"Section Title"}
        />
      </div>
      <PUtilities productData={productData} onUpdate={handleProductUpdate} />

      {/* <ProductUtilities bannerData={bannerData} onUpdate={handleBannerUpdate} />
      <div style={bannerContainerStyle}>
        <ProductsCarousel {...bannerData} />

    </div> */}
    </div>
  );
}
