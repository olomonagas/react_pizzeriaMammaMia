import { useUser } from "../../context/useUser";
import { Navigate } from "react-router-dom";

function UserLog({ children }) {
  const { token } = useUser();

  if (token) return <Navigate to="/" />;

  return children;
}

export default UserLog;
