import { useCart } from "../context/useCart";
import { ListGroup, Row, Col, Image, Button } from "react-bootstrap";
import { useUser } from "../context/useUser";

function Cart() {
  const { carrito, total, incrementar, decrementar } = useCart();
  const { token } = useUser();

  const checkout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart: carrito }),
      });

      if (!res.ok) throw new Error("Error en el pago");

      alert("🎉Gracias por tu compra🎉, Ahora tu pedido esta en preparacion");
    } catch {
      alert("😞 Lo sentimos, no se pudo procesar la compra");
    }
  };

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
      <h5 className="fw-bold">
        Total: ${total.toLocaleString("es-CL")}
      </h5>

      <Button
        variant="dark"
        className="mt-2 w-100"
        disabled={!token || carrito.length === 0}
        onClick={checkout}
      >
        Pagar
      </Button>
    </div>
  );
}

export default Cart;
