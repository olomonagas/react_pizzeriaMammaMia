import { useEffect, useState } from "react";
import { useUser } from "../context/useUser";
import '../assets/styles/Style.css';

const Profile = () => {
  const { getProfile, logout } = useUser();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile().then(setUser);
  }, [getProfile]);

  if (!user) return <p>Cargando...</p>;

  return (
    <div className="profilePage">
      <div className="informacionProfile">
        <h1>Perfil</h1>
        <p>Email: {user.email}</p>
        <button className="cerrarSesion" onClick={logout}>Cerrar sesión</button>
      </div>
    </div>
  );
};
export default Profile;
