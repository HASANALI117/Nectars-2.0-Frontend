import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

export default function ProductDetails(props) {
  const imageStyle = { width: "100%", height: "20rem", objectFit: "cover" };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Carousel
          style={{
            width: "20rem",
            height: "20rem",
            margin: "2rem",
          }}
        >
          <Carousel.Item>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSL7mNkAUGAVyYIap9JyQ5ZYg-3nOTiOUpsAZYsF2Vg&s"
              rounded
              style={imageStyle}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBUPZr02fVAUpRYdX9Nvqi7vCrgxY0KSv7g&usqp=CAU"
              rounded
              style={imageStyle}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOBFJvw2xhXHReXFmPLlSP6MccrRx1DIzmA&usqp=CAU"
              rounded
              style={imageStyle}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <Card
          style={{
            backgroundColor: props.detailsCustom.bgColor,
            border: "1px solid white",
            color: "white",
            width: "55rem",
            margin: "2rem",
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
              {props.detailsCustom.title}
            </Card.Title>
            <Card.Text>
              <div>{props.detailsCustom.description}</div>
            </Card.Text>
            <div style={{ display: "flex" }}>
              <Button variant="primary" style={{ margin: "1rem auto" }}>
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
