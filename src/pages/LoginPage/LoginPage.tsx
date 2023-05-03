import { FC } from "react";
import Login from "../../components/modules/LogIn/LogIn";
import style from "./styles.module.scss";

const LoginPage: FC = () => {
  return (
    <>
      <h2 className={style.title}>LoginPage</h2>
      <Login />
    </>
  );
};

export default LoginPage;
