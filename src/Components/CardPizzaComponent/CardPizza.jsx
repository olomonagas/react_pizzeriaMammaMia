import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useState } from 'react';
import { TiposPizzas } from '../PizzaComponent/pizzas';


function CardPizza(props) {
  const TiposPizza = props.pizza;
  
  console.log(TiposPizzas);

  return (
    <>
    {/* <Pizzas /> */}
    <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={props.img} />
       <Card.Body>
       <Card.Title>{props.name}</Card.Title>
         <Card.Text>{props.ingredients}</Card.Text>
         <Card.Text>{props.price}</Card.Text>
         <Button variant="secondary" className="btn-sm">Ver mas</Button>
         <Button variant="secondary" className="btn-sm">Carrito</Button>
       </Card.Body>
     </Card>
    </>
  );
}

export default CardPizza;