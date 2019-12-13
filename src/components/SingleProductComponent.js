import React , {useState} from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function SingleProductComponent(props) {

  const [itemState, setItemState ] = useState({
    added: false,
    cart: false
  });

  const addProduct = (product) => {
    props.addProduct(product);
    setItemState({
      added: true,
      cart: false
    });
  };

  const removeProduct = (product) => {
    props.removeProduct(product);
    setItemState({
      added: false,
      cart: false
    });
  };

  const addToCart = (product) => {
    props.addToCart(product);
    setItemState({
      added: false,
      cart: true
    });
  };

  const removeFromCart = (product) => {
    this.props.removeFromCart(product);
    this.setState({
      added: false,
      cart: false
    });
  };

    const product = props.product;
    return (
      <Col md={3} key={product.id}>
        <Card className="card">
          <Card.Img variant="top" src={`/images/${product.image}`} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            {itemState.added ? (
              <Button
                onClick={() => removeProduct(product)}
                className="cardButton"
              >
                Remove
              </Button>
            ) : (
              <Button
                onClick={() => addProduct(product)}
                className="cardButton"
              >
                Compare
              </Button>
            )}
            {itemState.cart ? (
              <Button
                onClick={() => removeFromCart(product)}
                className="cardButtonCart"
              >
                Remove
              </Button>
            ) : (
              <Button
                onClick={() => addToCart(product)}
                className="cardButtonCart"
              >
                Cart
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
}

export default SingleProductComponent;
