import { FC } from "react";
import { Navigate } from "react-router-dom";

const HomePage: FC = () => {
  return <Navigate to="/login" />;
};

export default HomePage;
