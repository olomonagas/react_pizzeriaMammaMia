// ruta del archivo:src/hooks/useCart.js
import { useContext } from "react";
import { CartContext } from "../context/pizzaContex";

export const useCart = () => useContext(CartContext);
;

