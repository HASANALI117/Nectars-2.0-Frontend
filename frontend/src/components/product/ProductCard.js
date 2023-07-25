import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductDetails from "./ProductDetails";

function ProductCard(props) {
  const [showProductDetails, setShowProductDetails] = useState(false);

  const handleProductDetails = () => {
    setShowProductDetails(!showProductDetails);
  };

  return (
    <div>
      <a href="http://localhost:3000/test/product-details">
        <Card
          style={{
            width: "15rem",
            height: "15rem",
            borderRadius: "10px 10px 0 0",
            margin: "1rem",
            marginBottom: "0",
            border: "none",
          }}
          className="productCard"
          border={"dark"}
        >
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSL7mNkAUGAVyYIap9JyQ5ZYg-3nOTiOUpsAZYsF2Vg&s"
            className="cardImage"
            style={{ width: "100%", height: "15rem", objectFit: "cover" }}
          />

          <div className="cardOverlay">
            <Card.Title className="productTitle">{props.name}</Card.Title>
            <Card.Text className="cardDescription">{props.desc}</Card.Text>
            <Card.Subtitle className="cardPrice">{props.price}</Card.Subtitle>
            <Button
              variant="danger"
              className="cardButton"
              onClick={handleProductDetails}
            >
              Buy Now
            </Button>
          </div>
        </Card>
      </a>
      <div
        style={{
          width: "15rem",
          height: "7rem",
          margin: "1rem",
          marginTop: "0",
          borderRadius: "0 0 10px 10px",
          backgroundColor: props.bgColor,
          color: props.color,
          padding: "1rem",
        }}
      >
        <div>Product Title</div>
        <div>price: 100</div>
      </div>
    </div>
  );
}

export default ProductCard;
