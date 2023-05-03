import { FC } from "react";
import Register from "../../components/modules/SignUp/SignUp";
import style from "./styles.module.scss";

const RegisterPage: FC = () => {
  return (
    <>
      <h2 className={style.title}>RegisterPage</h2>
      <Register />
    </>
  );
};

export default RegisterPage;
