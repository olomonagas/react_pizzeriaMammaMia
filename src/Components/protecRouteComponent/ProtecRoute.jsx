import { useUser } from "../../context/useUser";
import { Navigate } from "react-router-dom";

function ProtecRoute({ children }) {
  const { token } = useUser();

  if (!token) return <Navigate to="/login" />;

  return children;
}

export default ProtecRoute;
