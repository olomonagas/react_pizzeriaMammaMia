// ruta del archivo: src/context/userProvider.jsx
import { useState, useEffect} from "react";
import { UserContext } from "./userContext";

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // Esta parte pregunta si hay un token y un email guardados
  // en el localStorage para que al entrar en la paguina
  // inicia con la sesión abierta. En la NavBar se ve el Home,
  // Profile y Logout en vez de Login y Register.
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");

    if (storedToken) {
      setToken(storedToken);
      setEmail(storedEmail);
    }
  }, []); 

  // Funcion asincronica para el login

  const login = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error("Login inválido");

    setToken(data.token);
    setEmail(data.email);

    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
  };

  // Funcion asincronica para el register
  // Esto funciona solo cuando se crea una nueva cuenta
  // Si ingresamos um email que ya existe, como test@test.com arroja un error
  // pero no creo que poner "Usuario ya existe" si el servidor da error sea conveniente

const register = async (email, password, confirmPassword) => {
  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      email, 
      password,
      confirmPassword,
     }),
  });

  if (!res.ok) {
    throw new Error("Registro inválido");
  }

  return true;
};


  // Obtener perfil del usuario

  const getProfile = async () => {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("No autorizado");
    return res.json();
  };

  // Cerrar sesión borrando token e email
  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.clear();
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
