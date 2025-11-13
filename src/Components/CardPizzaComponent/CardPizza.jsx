import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useState } from 'react';
import { TiposPizzas } from '../PizzaComponent/pizzas';
import ListGroup from "react-bootstrap/ListGroup";



function CardPizza({desc, id, img, ingredients, name, price}) {
    
  console.log(TiposPizzas);
  console.log(id)

  return (
     <Card className="text-center shadow-sm" style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title className="fw-bold text-capitalize">Pizza {name}</Card.Title>
        <Card.Text className="text-muted">{desc}</Card.Text>

        <h6 className="mt-2">Ingredientes:</h6>
        <ListGroup variant="flush" className="mb-3">
          {ingredients.map((ing, i) => (
            <ListGroup.Item key={i} className="text-secondary text-capitalize">
              🍕 {ing}
            </ListGroup.Item>
          ))}
        </ListGroup>

        <h5 className="fw-bold mb-3">Precio: ${price.toLocaleString('es-CL')}</h5>

        <div className="d-flex justify-content-around">
          {/* <Button variant="outline-secondary" onClick={() => onView(id)}> */}
            {/* Ver Más 👀 */}
          {/* </Button> */}
          {/* <Button variant="dark" onClick={() => onAdd(id)}> */}
            {/* Añadir 🛒 */}
          {/* </Button> */}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;
