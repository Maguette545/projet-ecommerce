import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexte/AuthContext";

const AdminRouer = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user?.Role === "Admin" ? children : <Navigate to="/" />;
};

export default AdminRouer;
