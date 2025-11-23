import React, { useState } from "react";
import { ListGroup, Row, Col, Image, Button } from "react-bootstrap";
import { pizzaCart } from "../../assets/sources/pizzaCart";

function Cart() {
  // Estado local del carrito
  const [carrito, setCarrito] = useState(pizzaCart);

  // Aumentar cantidad
  const incrementar = (id) => {
    setCarrito((prev) =>
      prev.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  // Disminuir cantidad (mínimo 1)
  const decrementar = (id) => {
    setCarrito((prev) =>
      prev.map((pizza) =>
        pizza.id === id && pizza.count > 1
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
    );
  };

  // Calcular total general
  const total = carrito.reduce(
    (sum, { price, count }) => sum + price * count,
    0
  );

  return (
    <div
      className="p-3 bg-light rounded shadow-sm"
      style={{ maxWidth: 400, margin: "auto" }}
    >
      <h5 className="mb-3 fw-bold">Detalles del pedido:</h5>

      <ListGroup variant="flush">
        {carrito.map(({ id, name, price, img, count }) => (
          <ListGroup.Item key={id} className="border-0 ps-0 pe-0">
            <Row className="align-items-center">
              <Col xs={3}>
                <Image src={img} alt={name} rounded fluid />
              </Col>
              <Col xs={3} className="fw-semibold text-capitalize">
                {name}
              </Col>
              <Col xs={3} className="text-end fw-semibold">
                ${price.toLocaleString("es-CL")}
              </Col>
              <Col xs={3} className="d-flex align-items-center justify-content-end">
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => decrementar(id)}
                >
                  −
                </Button>
                <span className="mx-2">{count}</span>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => incrementar(id)}
                >
                  +
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <hr />
      <h5 className="fw-bold">Total: ${total.toLocaleString("es-CL")}</h5>

      <Button variant="dark" className="mt-2 w-100">
        Pagar
      </Button>
    </div>
  );
}

export default Cart;

