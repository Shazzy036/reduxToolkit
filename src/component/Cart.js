import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";

const Cart = () => {
	const cart = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	const removeFromCart = (id) => {
		dispatch(remove(id));
	};

	return (
		<>
			<div>
				<h1>Cart</h1>
				<div className="row">
					{cart?.map((product) => {
						return (
							<div
								className="col-md-3"
								style={{ marginBottom: "2rem" }}
							>
								<Card key={product.id} className="h-100 w-100">
									<div className="text-center">
										<Card.Img
											variant="top"
											src={product.thumbnail}
											style={{
												height: "240px",
												width: "270px",
											}}
										/>
									</div>
									<Card.Body>
										<Card.Title>{product.title}</Card.Title>
										<Card.Text>
											{product.description}
										</Card.Text>
										<Card.Text className="text-primary">
											$ {product.price}
										</Card.Text>
									</Card.Body>
									<Card.Footer className="text-center">
										<Button
											variant="danger"
											onClick={() =>
												removeFromCart(product.id)
											}
										>
											REMOVE FROM CART
										</Button>
									</Card.Footer>
								</Card>
							</div>
						);
					})}
				</div>
				{/* {JSON.stringify(cart)} */}
			</div>
		</>
	);
};

export default Cart;
