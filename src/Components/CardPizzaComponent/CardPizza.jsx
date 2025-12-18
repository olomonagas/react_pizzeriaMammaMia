import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import { useCart } from "../../context/useCart";
import { Link } from "react-router-dom";

function CardPizza({ desc, id, img, ingredients, name, price }) {
  const { anadirPizza } = useCart();

  return (
    <Card className="text-center shadow-sm" style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title className="fw-bold text-capitalize">Pizza {name}</Card.Title>
        <Card.Text className="text-muted">{desc}</Card.Text>

        <h6 className="mt-2">Ingredientes:</h6>
        <ListGroup variant="flush" className="mb-3">
          {ingredients.map((ing, i) => (
            <ListGroup.Item key={i} className="text-tertiary text-capitalize">
              🍕 {ing}
            </ListGroup.Item>
          ))}
        </ListGroup>

        <h5 className="fw-bold mb-3">Precio: ${price.toLocaleString("es-CL")}</h5>

        <div className="d-flex justify-content-around">

          {/* Este botón te redirige a la página pizza.jsx y lee la descripcion con el id de la pizza */}
          <Link to={`/pizza/${id}`} className="btn btn-outline-secondary">
            Ver Más 👀
          </Link>

          {/* Este boton añade la pizza al carrito */}
          <Button
            variant="dark"
            onClick={() => anadirPizza({ id, img, name, price })}
          >
            Añadir 🛒
          </Button>

        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;

