import { FC } from "react";
import { Link } from "react-router-dom";
import Register from "../../components/modules/SignUp/SignUp";

const RegisterPage: FC = () => {
  return (
    <>
      <h2>RegisterPage</h2>
      <Register />
      <Link to="/login">Login</Link>
    </>
  );
};

export default RegisterPage;
