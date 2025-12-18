import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();     // Obtiene el ID desde la URL cuando se navega a esta pagina desde el home

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`); // Usa el ID para buscar la pizza en la API
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <h2 className="text-center mt-5">Cargando...</h2>;
  if (!pizza) return <h2 className="text-center mt-5">Pizza no encontrada</h2>;

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-3 shadow" style={{ width: "22rem" }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />

        <div className="card-body">
          <h3 className="text-capitalize">Pizza {pizza.name}</h3>
          <p>{pizza.desc}</p>

          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ing) => (
              <li key={ing}>🍕 {ing}</li>
            ))}
          </ul>

          <h4 className="fw-bold mt-3">
            Precio: ${pizza.price.toLocaleString("es-CL")}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
