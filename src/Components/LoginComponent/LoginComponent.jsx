import React from 'react'
import { useState } from "react";

function LoginComponent() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
    
        const validarDatos = (e) => {
        e.preventDefault()

        if(email === '' || password === '') {
            setError(true)
            return
        }

        setError(false)
        setEmail('')
        setPassword('')
      }
    
      return (
        <>
        <div>Paguina de acceso</div>
        <form className="formulario" onSubmit={validarDatos}>
            {error ? <p>Todos los campos son obligatorios</p> : null}
            <div className="form-group">
    
            </div>
        <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
        </div>
        <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
        </div>
      
        <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
          <h1>Datos ingresados</h1>
          {email} - {password}
        </>
      )
    }

export default LoginComponent