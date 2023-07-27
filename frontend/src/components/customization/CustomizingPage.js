import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import BannerUtilities from "./banner/BannerUtilities";
import NavBarUtilities from "./navbarSettings/NavBarUtilities";
import Navbar from "../navbar/NavBar";
import ProductsCarousel from "../product/ProductsCarousel";
import ProductUtilities from "./product/ProductUtilities";
import PUtilities from "./product/PUtilities";
import BACKEND_URL from "../../constants";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CustomizingPage() {
  const { shopId } = useParams();
  const navigate = useNavigate();
  const [shopDetails, setShopDetails] = useState();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/shops/${shopId}/`)
      .then((res) => {
        console.log(res.data);
        setShopDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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

  const handleSaveSubmit = () => {
    const newShopProps = {
      banner: bannerData,
      navbar: navBarData,
      carousel: productData,
    };

    console.log(newShopProps);

    Promise.all([
      axios.post(`${BACKEND_URL}/shops/props/create/`, {
        shopId: shopId,
        props: newShopProps,
      }),
    ])
      .then((res) => {
        console.log(res);
        navigate(`/shop/${shopDetails.shopName}/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const submitButtonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "12px 24px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "15vh",
    margin: "20px",
    marginTop: "5vh",
    cursor: "pointer",
    borderRadius: "3vw",
    width: "30vw",
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={submitButtonStyle} onClick={handleSaveSubmit}>
          Submit
        </button>
      </div>
      {/* <ProductUtilities bannerData={bannerData} onUpdate={handleBannerUpdate} />
      <div style={bannerContainerStyle}>
        <ProductsCarousel {...bannerData} />

    </div> */}
    </div>
  );
}
