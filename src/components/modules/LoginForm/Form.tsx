import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useLocation } from "react-router-dom";
import InputEmail from "../../UI/InputLoginEmail/Input";
import InputPass from "../../UI/InputLoginPassword/Input";
import Button from "../../UI/ButtonSubmit/Button";
import { IProps, IFormInput } from "./interfaces";
import style from "./styles.module.scss";
import { Link } from "react-router-dom";

const Form: FC<IProps> = ({ title, handleClick }) => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<IFormInput>({ mode: "onBlur" });
  const onSubmit = (data: IFormInput) => {
    handleClick(email, pass);
    setEmail(data.email);
    setPass(data.password);
    console.log(data);
    reset();
  };
  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={(style.form__email, style.input)}>
          <InputEmail register={register} placeholder="email" />
          <div className={style.error}>{errors.email?.message}</div>
        </div>
        <div className={(style.form__password, style.input)}>
          <InputPass register={register} placeholder="password" />
          <div className={style.error}>{errors.password?.message}</div>
        </div>
        <Button title={title} />
        {location.pathname === "/login" && (
          <div className={style.redirect}>
            <Link to="/register">Create account</Link>
          </div>
        )}
        {location.pathname === "/register" && (
          <div className={style.redirect}>
            <Link to="/login">Log In</Link>
          </div>
        )}
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;
