// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// function ProductCard(props) {
//   return (
//     <Card style={{ width: "18rem" }} className="productCard" border={"dark"}>
//       <Card.Img
//         variant="top"
//         src="https://source.unsplash.com/random/300x202"
//       />
//       <Card.Body>
//         <Card.Title className="productTitle">{props.name}</Card.Title>
//         <Card.Text>{props.desc}</Card.Text>
//         <Card.Subtitle className="cardPrice">{props.price}</Card.Subtitle>
//         <Button variant="success">Buy Now</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ProductCard;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard(props) {
  return (
    <Card style={{ width: "18rem" }} className="productCard" border={"dark"}>
      <div className="cardImageContainer">
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/random/200x400"
          className="cardImage"
        />
        <div className="cardOverlay">
          <Card.Title className="productTitle">{props.name}</Card.Title>
          <Card.Text className="cardDescription">{props.desc}</Card.Text>
          <Card.Subtitle className="cardPrice">{props.price}</Card.Subtitle>
          <Button variant="danger" className="cardButton">
            Buy Now
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
