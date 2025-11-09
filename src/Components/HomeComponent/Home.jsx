import { Card } from "react-bootstrap";
import CardPizza from "../CardPizzaComponent/CardPizza";
import Header from "../HeaderComponent/Header";
import { TiposPizzas } from "../PizzaComponent/pizzas";
import { useState } from "react";

console.log(TiposPizzas);

export default function Home() {
  const [pizza, setPizza] = useState(TiposPizzas);
  console.log(pizza)
  const updatePizza = () => {
    setPizza(TiposPizzas);
  }
  console.log(updatePizza)

  return (
    <>
    <Header />
    {/* {TiposPizzas.map(({ id, name, desc, img, price, ingredients }) =>  */}
    {/* TiposPizza.map (pizza, id) => { */} 
      {/* <CardPizza key={id}/> */}
     {/* )} */}

    <CardPizza />  
        
      
    </>


  )
}





      // <div className='d-flex justify-content-around flex-wrap my-4'>
      //     <CardPizza
      //       name="Napolitana"
      //       price={5950}
      //       ingredientes={["mozzarella, ", "tomates, ", "jamón, ", "orégano"]}
      //       img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
      //     ></CardPizza>
      //     <CardPizza
      //       name="Española"
      //       price={6950}
      //       ingredientes={["mozzarella, ", "gorgonzola, ", "parmesano, ", "provolone"]}
      //       img="https://media.istockphoto.com/id/953428324/photo/hot-pizza-with-pepperoni-with-vegetables-and-fresh-ingredients-on-rustic-wooden-table-pizza.jpg?s=1024x1024&w=is&k=20&c=ryt3ebUeKIGF69CUMmNioh-9W_2-xZzcMUbd-ImFKl0="
      //     ></CardPizza>
      //     <CardPizza
      //       name="Pepperoni"
      //       price={6950}
      //       ingredientes={["mozzarella, ", "pepperoni, ", "orégano"]}
      //       img="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBwZXBlcm9uaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
      //     ></CardPizza>
      //     <CardPizza></CardPizza>
      //     </div>