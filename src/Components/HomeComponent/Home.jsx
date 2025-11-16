import CardPizza from "../CardPizzaComponent/CardPizza";
import Header from "../HeaderComponent/Header";
// import { TiposPizzas } from "../PizzaComponent/pizzas";
import { useState, useEffect } from "react";


function Home() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Error al cargar las pizzas:", err));
  }, []);

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

  
  
