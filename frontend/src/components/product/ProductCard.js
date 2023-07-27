import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductDetails from "./ProductDetails";
import axios from "axios";
import BACKEND_URL from "../../constants";

function ProductCard(props) {
  // const [showProductDetails, setShowProductDetails] = useState(false);

  // const handleProductDetails = () => {
  //   setShowProductDetails(!showProductDetails);
  // };

  const handleAddToCart = () => {
    axios
      .post(
        `${BACKEND_URL}/addToCart/`,
        {
          productId: props.productId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
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
          src={props.imageUrl}
          className="cardImage"
          style={{ width: "100%", height: "15rem", objectFit: "cover" }}
        />

        <div className="cardOverlay">
          <Button
            variant="danger"
            className="cardButton"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </Card>
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
          fontSize: props.fontSize,
        }}
      >
        <div>{props.title}</div>
        <div>{props.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
