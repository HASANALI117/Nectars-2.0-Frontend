// import logo from './logo.svg';

import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/homepage/Home";
import Banner from "./components/banner/Banner";
import BannerVal from "./components/banner/BannerVal";
import ShopHome from "./components/shop/ShopHome";
import Dashboard from "./components/shop/Dashboard";
import SignUpPage from "./components/homepage/SignUpPage";
import ShopInfo from "./components/homepage/ShopInfo";
import CustomizingPage from "./components/customization/CustomizingPage";
import FileUpload from "./components/test/FileUpload";
import { useEffect, useState } from "react";
import RedirectedSignin from "./components/RedirectedSignin";
import ProductUtilities from "./components/customization/product/ProductUtilities";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) {
      setIsAuth(true);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/shopinfo" element={<ShopInfo />} />
        <Route path="/customization" element={<CustomizingPage />} />
        <Route path="/:shopName/" element={<ShopHome />} />
        <Route path="/:shopName/home" element={<ShopHome />} />
        <Route
          path="/:shopName/dashboard"
          element={isAuth ? <Dashboard /> : <RedirectedSignin />}
        />
        <Route path="/fileTest" element={<FileUpload />} />
        {/* <Route path="/Test" element={<ProductUtilities />} /> */}
      </Routes>
    </>
  );
}

export default App;
