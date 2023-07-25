import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/homepage/Home";
import NavBar from "./components/navbar/NavBar";
import ProductsCarousel from "./components/product/ProductsCarousel";
import ProductDetails from "./components/product/ProductDetails";

function App() {
  const carouselProps = {
    swipeable: true,
    draggable: false,
    showDots: false,
    ssr: true,
    infinite: false,
    keyBoardControl: true,
    transitionDuration: 500,
    containerClass: "carousel-container",
    removeArrowOnDeviceType: ["tablet", "mobile"],
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",
  };

  const detailsProps = {
    bgColor: "#3c4048",
    title: "Burger",
    description: "Desssssssssssssssssssssssscription",
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/test"
            element={
              <div>
                <NavBar detailsCustom={detailsProps} />

                <ProductsCarousel
                  isCarousel={false}
                  carouselCustom={carouselProps}
                />
              </div>
            }
          />
          <Route
            path="/test/product-details"
            element={
              <div>
                <NavBar />

                <ProductDetails detailsCustom={detailsProps} />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
