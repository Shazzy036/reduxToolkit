import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const ProductCard = ({product}) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product))
  }
  return (
    <div className="col-md-3" style={{ marginBottom: "2rem" }}>
      <Card key={product.id} className="h-100 w-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.thumbnail}
            style={{ height: "240px", width: "270px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text className="text-primary">$ {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary" onClick={addToCart}>ADD TO CART</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
