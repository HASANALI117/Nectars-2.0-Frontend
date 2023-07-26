import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProductsCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [isCarousel, setIsCarousel] = useState(false);
  const [carouselCustomize] = useState({
    ...props.carouselCustom,
    responsive: responsive,
  });

  useEffect(() => {
    console.log(props);
  }, [props]);

  const handleIsCarousel = () => {
    setIsCarousel(props.isCarousel);
  };

  useEffect(() => {
    handleIsCarousel();
  }, [props.isCarousel]);

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const product = [];
  for (let i = 0; i < list.length; i += props.noOfCards) {
    const row = (
      <Row xs={2} md={4} lg={props.noOfCards} key={i}>
        {list.slice(i, i + props.noOfCards).map((item) => (
          <Col key={item}>
            <div style={{ display: "flex" }}>
              <ProductCard {...props} />
            </div>
          </Col>
        ))}
      </Row>
    );
    product.push(row);
  }

  const productCarousel = list.map((item) => {
    return <ProductCard {...props} />;
  });

  const carouselProps = {
    swipeable: true,
    draggable: false,
    showDots: props.showDots,
    responsive: responsive,
    ssr: true,
    infinite: true,
    keyBoardControl: true,
    transitionDuration: 500,
    containerClass: "carousel-container",
    removeArrowOnDeviceType: ["tablet", "mobile"],
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",
  };

  return (
    <div>
      {isCarousel ? (
        <Carousel {...carouselProps}>{productCarousel}</Carousel>
      ) : (
        product
      )}
    </div>
  );
}
