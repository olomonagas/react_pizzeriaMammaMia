import CardPizza from "../../components/cardPizzaComponent/CardPizza";
// import { TiposPizzas } from "../../assets/sources/Pizzas";
import { useState, useEffect } from "react";
import Header from "../../components/headerComponent/Header";


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

  
  
