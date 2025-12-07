import { useState } from "react";
import { UserContext } from "./userContext";

export function UserProvider({ children }) {
  const [token, setToken] = useState(true); // !ojo! este es el token simulado

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
}
