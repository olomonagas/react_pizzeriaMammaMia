import React from 'react'
import { useState } from "react";
import './../../assets/styles/Style.css'

function Login() {
  
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
        <div className="loginPage">
          <div className="informacionLogin">
          <h1>Acceso a cuenta</h1>
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
          <h3>Datos ingresados</h3>
          {email} - {password}
          </div>
          </div>
        </>
      )
    }

export default Login