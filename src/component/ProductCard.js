import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
  return (
    <div className="col-md-3" style={{ marginBottom: "2rem" }}>
      <Card key={props.key} className="h-100 w-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={props.thumbnail}
            style={{ height: "300px", width: "270px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text className="text-primary">$ {props.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary">ADD TO CART</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
