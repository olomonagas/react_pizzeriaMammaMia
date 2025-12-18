import React, { useState } from "react";
import './../assets/styles/Style.css';
import { useUser } from "../context/useUser";
import { useNavigate } from "react-router-dom";

function Register() {

  const { register } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = async (e) => {
    e.preventDefault();

    // Validaciones de email y contraseña
    if (email === "" || password === "" || confirmPassword === "") {
      setError(true);
      return;
    }

    // La contraseña debe tener al menos 6 caracteres
    if (password.length < 6) {
      setError(true);
      return;
    }

    if (password !== confirmPassword) {
      setError(true);
      return;
    }

    try {
      await register(email, password);

      alert("Cuenta creada con éxito. Ahora seras redirigido a Login para iniciar sesión");
      
      setError(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login"); // redirige a login
    } catch {
      setError(true);
    }
  };

  return (
    <div className="registro">
      <div className="formularioRegistro">
        <h1>Formulario de Registro</h1>

        <form className="formulario" onSubmit={validarDatos}>
          {error && <p>Revisa los datos ingresados</p>}

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
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" id="register">
            Enviar
          </button>
        </form>

      </div>
    </div>
  );
}

export default Register;
