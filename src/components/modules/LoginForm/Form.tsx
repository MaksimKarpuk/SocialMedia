import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import InputEmail from "../../UI/InputLoginEmail/Input";
import InputPass from "../../UI/InputLoginPassword/Input";
import Button from "../../UI/ButtonSubmit/Button";
import { IProps, IFormInput } from "./interfaces";
import style from "./styles.module.scss";

const Form: FC<IProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
          {errors.email && errors.email.type === "required" && (
            <span>Enter a email</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span>Invalid email value.</span>
          )}
        </div>
        <div className={(style.form__password, style.input)}>
          <InputPass register={register} placeholder="password"  />
          {errors.password && errors.password.type === "required" && (
            <span>Enter a password</span>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <span>
              The password must contain at least eight characters, include
              capital letters numbers and special characters.
            </span>
          )}
        </div>

        <Button title={title} />
      </form>
    </>
  );
};

export default Form;
