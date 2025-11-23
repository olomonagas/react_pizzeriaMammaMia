import React from "react";
import './../../assets/styles/Style.css'

const Profile = () => {
  return (
    <div className="profilePage">
      <div className="informacionProfile">
        {/* <div className="formularioProfile"> */}
          <h1>Perfil de usuario</h1>

          <h4>Nombre:</h4>
          <span>Orlando Monagas</span>
          <h4>Email:</h4>
          <span>orlando.monagas@example.com</span>
        {/* </div> */}
        <button type="submit" className="btn btn-primary">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
