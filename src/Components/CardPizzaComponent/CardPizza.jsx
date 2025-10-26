
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPizza(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.ingredientes}</Card.Text>
        <Card.Text>{props.precio}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;