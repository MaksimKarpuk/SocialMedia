import { FC } from "react";
import { Link } from "react-router-dom";
import Login from "../components/LogIn";

const LoginPage: FC = () => {
  return (
    <>
      <h2>LoginPage</h2>
      <Login />
      <Link to="/register">Register</Link>
    </>
  );
};

export default LoginPage;
