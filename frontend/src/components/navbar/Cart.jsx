import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import BACKEND_URL from "../../constants";

export default function Cart(props) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/userCart/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCartItems(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleIncrement = (id) => {
    const currentQuantity = cartItems.find(
      (item) => item.productId === id
    ).quantity;

    axios
      .post(
        `${BACKEND_URL}/updateCart/`,
        {
          productId: id,
          quantity: currentQuantity + 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      )
      .then((res) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.productId === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDecrement = (id) => {
    const currentQuantity = cartItems.find(
      (item) => item.productId === id
    ).quantity;

    axios
      .post(
        `${BACKEND_URL}/updateCart/`,
        {
          productId: id,
          quantity: currentQuantity - 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      )
      .then((res) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.productId === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = (id) => {
    axios
      .post(
        `${BACKEND_URL}/removeFromCart/`,
        {
          productId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      )
      .then((res) => {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.productId !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const list =
    cartItems.length > 0 ? (
      cartItems.map((item) => (
        <Row style={{ margin: "1rem auto" }}>
          <Col>
            <div
              style={{
                width: "15rem",
                height: "100%",
                backgroundColor: "grey",
                borderRadius: "25px",
              }}
              key={item.productId}
            >
              <img
                src={item.poster_image_url}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "25px",
                }}
              />
            </div>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="dark"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={() => handleDecrement(item.productId)}
            >
              <i class="fa-solid fa-minus "></i>
            </Button>

            <div style={{ margin: "6rem auto", fontSize: "1.5rem" }}>
              {item.quantity}
            </div>

            <Button
              variant="dark"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={() => handleIncrement(item.productId)}
            >
              <i class="fa-solid fa-plus "></i>
            </Button>
            <Button
              variant="dark"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={() => handleRemove(item.productId)}
            >
              <i class="fa-solid fa-trash "></i>
            </Button>
          </Col>
          {cartItems.indexOf(item) !== cartItems.length - 1 ? (
            <hr
              style={{
                margin: "0.7rem auto",
                width: "95%",
                borderWidth: "0.3rem",
              }}
            />
          ) : (
            <></>
          )}
        </Row>
      ))
    ) : (
      <div>Your cart is empty</div>
    );

  return (
    <div
      style={{
        position: "absolute",
        left: "23%",
        top: "6em",
      }}
    >
      <Card
        style={{
          width: "150%",
          height: "30rem",
          backgroundColor: "#3c4048",
          border: "1px solid white",
          color: "white",
          overflowY: "auto",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              textAlign: "center",
              fontSize: "1.8rem",
              marginBottom: "1rem",
            }}
          >
            Cart
          </Card.Title>
          <Card.Text>
            <div>
              <Container>{list}</Container>
            </div>
          </Card.Text>
          <div style={{ display: "flex" }}>
            <Button variant="primary" style={{ margin: "1rem auto" }}>
              Checkout
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
