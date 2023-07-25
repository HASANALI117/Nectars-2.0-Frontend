// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/homepage/Home";
import ShopHome from "./components/shop/ShopHome";
import Dashboard from "./components/shop/Dashboard";
import FileUpload from "./components/test/FileUpload";
import { useEffect, useState } from "react";
import RedirectedSignin from "./components/RedirectedSignin";

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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:shopName/" element={<ShopHome />} />
          <Route path="/:shopName/home" element={<ShopHome />} />
          <Route
            path="/:shopName/dashboard"
            element={isAuth ? <Dashboard /> : <RedirectedSignin />}
          />
          <Route path="/fileTest" element={<FileUpload />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
