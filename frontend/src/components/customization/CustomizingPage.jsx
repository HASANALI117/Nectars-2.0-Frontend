import React, { useState } from "react";
import Banner from "../banner/Banner";
import BannerUtilities from "./banner/BannerUtilities";
import NavBarUtilities from "./navbarSettings/NavBarUtilities";
import Navbar from "../navbar/NavBar";
import ProductsCarousel from "../product/ProductsCarousel";
import ProductUtilities from "./product/ProductUtilities";

export default function CustomizingPage() {
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

  return (
    <div>
      <h1 className="Customize-page">Customize your website</h1>

      <h2>Banner</h2>
      <br></br>

      <Banner {...bannerData} />
      <BannerUtilities bannerData={bannerData} onUpdate={handleBannerUpdate} />
      <br></br>
      <h2>Navbar</h2>
      <br></br>


      <div style={navBarContainerStyle}>
        <Navbar {...navBarData} />
      </div>
  <NavBarUtilities navBarData={navBarData} onUpdate={handleNavBarUpdate} />
      {/* <h2>Banner</h2>
      <h1 className="Customize-page">Customize your website</h1>
      <Banner {...bannerData} />
      <BannerUtilities bannerData={bannerData} onUpdate={handleBannerUpdate} />
      <div>
        {/* <Banner {...bannerData} /> 
      </div> */}
    </div> 


      <div style={bannerContainerStyle}>
        <Banner {...bannerData} />
      </div>

      <h2>Product</h2>
      <ProductUtilities bannerData={bannerData} onUpdate={handleBannerUpdate} />
      <div style={bannerContainerStyle}>
        <ProductsCarousel {...bannerData} />
      </div>
    </div>

  );
}
