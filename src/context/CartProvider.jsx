//ruta del archivo: src/context/CartProvider.jsx
import React, { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const anadirPizza = (pizza) => {
    setCarrito((prev) => {
      const existente = prev.find((p) => p.id === pizza.id);
      if (existente) {
        return prev.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        );
      }
      return [...prev, { ...pizza, count: 1 }];
    });
  };

  const incrementar = (id) => {
    setCarrito((prev) =>
      prev.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p))
    );
  };

  const decrementar = (id) => {
    setCarrito((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
        .filter((p) => p.count > 0)
    );
  };

  const total = carrito.reduce((sum, { price, count }) => sum + price * count, 0);

  return (
    <CartContext.Provider value={{ carrito, anadirPizza, incrementar, decrementar, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
