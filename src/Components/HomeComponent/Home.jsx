import CardPizza from "../CardPizzaComponent/CardPizza";
import Header from "../HeaderComponent/Header";
import { TiposPizzas } from "../PizzaComponent/pizzas";
import { useState } from "react";

function Home() {
  const [pizzas, setPizzas] = useState(TiposPizzas);

  console.log("Hola Orlando");
  console.log(pizzas);
  console.log("Primera pizza:", pizzas[0]);

  return (
    <>
      <Header />

      <div className="d-flex flex-wrap justify-content-center mt-4">
        {pizzas.map((p) => (
          <CardPizza
            key={p.id}
            desc={p.desc}
            id={p.id}
            img={p.img}
            ingredients={p.ingredients}
            name={p.name}
            price={p.price}
          />
        ))}
      </div>
    </>
  );
}

export default Home;

  
  
