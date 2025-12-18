import React, { useState } from "react";
import './../assets/styles/Style.css';
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom";

function Login() {

  const { login } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError(true);
      return;
    }

    try {
      await login(email, password);
      setError(false);
      setEmail("");
      setPassword("");
      navigate("/"); // devuelve al home
    } catch  {
      setError(true);
    }
  };

  return (
    <>
      <div className="loginPage">
        <div className="informacionLogin">
          <h1>Acceso a cuenta</h1>

          <form className="formulario" onSubmit={validarDatos}>
            {error && <p>Credenciales incorrectas</p>}

            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary" id="login">
              Enviar
            </button>
          </form>

        </div>
      </div>
    </>
  );
}

export default Login;
