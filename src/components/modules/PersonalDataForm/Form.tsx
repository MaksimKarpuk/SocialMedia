import { FC } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import style from "./styles.module.scss";
import InputFirstName from "./components/Inputs/InputFirstName";
import InputSecondName from "./components/Inputs/InputSecondName";
import InputSelector from "./components/Inputs/InputSelect";
import InputDate from "./components/Inputs/InputDate";
import InputCheckbox from "./components/Inputs/InputCheckbox";
import InputRadio from "./components/Inputs/InputRadio";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../hooks/useTypedSelector";

const NewForm: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.inputs__text}>
          <div className={style.text}>
            <InputFirstName register={register} />
            <div className={style.error}>{errors.firstName?.message}</div>
          </div>
          <div className={style.text}>
            <InputSecondName register={register} />
            <div className={style.error}>{errors.secondName?.message}</div>
          </div>
        </div>
        <div className={style.input__date}>
          <InputDate label="Choose birthday date:" register={register} />
          {errors?.date && (
            <div className={style.error}>Fill your birthday date</div>
          )}
        </div>
        <div className={style.input__radios}>
          <div className={style.radios}>
            <div className={style.radio}>
              <InputRadio label="Male" register={register} value="Male" />
            </div>
            <div className={style.input__radio}>
              <InputRadio label="Fimale" register={register} value="Fimale" />
            </div>
          </div>

          {errors?.radio && <div className={style.error}>Choose gender</div>}
        </div>

        <div className={style.input__select}>
          <InputSelector label="Select your city:" register={register} />
          {errors?.city && <div className={style.error}>Select your city</div>}
        </div>
        <div className={style.input__checkbox}>
          <div className={style.checkbox}>
            <InputCheckbox
              label="I consent to my personal data"
              register={register}
            />
          </div>
          {errors?.checkbox && (
            <div className={style.error}>Give your permition</div>
          )}
        </div>
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};
export default NewForm;
