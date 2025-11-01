import React from 'react'
import { useState } from "react";



function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false)

    const validarDatos = (e) => {
    e.preventDefault()
    
    if(email === '' || password === '' || confirmPassword === '') {
        setError(true)
        return
    }
    if(password === confirmPassword) {
        setError(true)
        return
    }
    setError(false)
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <>
    <div>Formulario de Registro</div>
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
    <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
    </div>
    <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <h1>Datos ingresados</h1>
      {email} - {password} - {confirmPassword}
    </>
  )
}


export default Register

