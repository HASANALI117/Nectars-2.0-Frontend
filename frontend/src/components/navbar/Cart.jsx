import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Cart(props) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Burger",
      price: 100,
      quantity: 1,
      image:
        "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    },
    {
      id: 2,
      name: "Pizza",
      price: 200,
      quantity: 1,
      image:
        "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
    },
    {
      id: 3,
      name: "Pasta",
      price: 300,
      quantity: 1,
      image:
        "https://i.dailymail.co.uk/1s/2023/03/28/08/69193727-0-image-a-6_1679988992003.jpg",
    },
  ]);

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const list = cartItems.map((item) => (
    <Row style={{ margin: "1rem auto" }}>
      <Col>
        <div
          style={{
            width: "15rem",
            height: "10rem",
            backgroundColor: "grey",
            borderRadius: "25px",
          }}
          key={item.id}
        >
          <img
            src={item.image}
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
          onClick={() => handleDecrement(item.id)}
        >
          <i class="fa-solid fa-minus "></i>
        </Button>

        <div style={{ margin: "5rem auto", fontSize: "1.5rem" }}>
          {item.quantity}
        </div>

        <Button
          variant="dark"
          style={{
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={() => handleIncrement(item.id)}
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
          onClick={() => handleRemove(item.id)}
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
  ));

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
          backgroundColor: props.detailsCustom.detailsCustom.bgColor,
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
