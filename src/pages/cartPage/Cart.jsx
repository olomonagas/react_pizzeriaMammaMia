import { useCart } from "../../hooks/useCart";
import { ListGroup, Row, Col, Image, Button } from "react-bootstrap";

function Cart() {
  const { carrito, total, incrementar, decrementar } = useCart();

  return (
    <div className="p-3 bg-light rounded shadow-sm" style={{ maxWidth: 400, margin: "auto" }}>
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
                <Button variant="outline-danger" size="sm" onClick={() => decrementar(id)}>
                  −
                </Button>
                <span className="mx-2">{count}</span>
                <Button variant="outline-primary" size="sm" onClick={() => incrementar(id)}>
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


