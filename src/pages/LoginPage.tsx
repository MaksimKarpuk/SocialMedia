import { FC } from "react";
import { Link } from "react-router-dom";

const LoginPage: FC = () => {
  return (
    <>
      <h2>LoginPage</h2>
      <Link to="/register">Register</Link>
    </>
  );
};

export default LoginPage;
