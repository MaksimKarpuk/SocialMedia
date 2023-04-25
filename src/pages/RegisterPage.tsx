import { FC } from "react";
import { Link } from "react-router-dom";

const RegisterPage: FC = () => {
  return (
    <>
      <h2>RegisterPage</h2>
      <Link to="/login">Login</Link>
    </>
  );
};

export default RegisterPage;
