import { FC } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import style from "./styles.module.scss";
import InputFirstName from "./components/Inputs/InputFirstName";
import InputSecondName from "./components/Inputs/InputSecondName";
import InputThirdName from "./components/Inputs/InputThirdName";
import InputSelector from "./components/Inputs/InputSelect";
import InputDate from "./components/Inputs/InputDate";
import InputCheckbox from "./components/Inputs/InputCheckbox";
import InputRadio from "./components/Inputs/InputRadio";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../hooks/useTypedSelector";
import { addCollection } from "../../../firebase";

const NewForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    addCollection({ ...data });
    reset();
    setTimeout(() => {
      navigate("/homepage");
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.inputs__text}>
          <div className={style.text}>
            <InputFirstName register={register} placeholder="First name" />
            <div className={style.error}>{errors.firstName?.message}</div>
          </div>
          <div className={style.text}>
            <InputSecondName register={register} placeholder="Second name" />
            <div className={style.error}>{errors.secondName?.message}</div>
          </div>
          <div className={style.text}>
            <InputThirdName register={register} placeholder="Third name" />
            <div className={style.error}>{errors.thirdName?.message}</div>
          </div>
        </div>
        <div className={style.input__date}>
          <InputDate register={register} />
          <div className={style.error}>{errors.birthdayDate?.message}</div>
        </div>
        <div className={style.input__select}>
          <InputSelector register={register} />
          <div className={style.error}>{errors.job?.message}</div>
        </div>
        <div className={style.input__radios}>
          <div className={style.radios}>
            <div className={style.input__radio}>
              <InputRadio label="Male" register={register} value="Male" />
            </div>
            <div className={style.input__radio}>
              <InputRadio label="Fimale" register={register} value="Fimale" />
            </div>
          </div>
          <div className={style.error}>{errors.gender?.message}</div>
        </div>
        <div className={style.input__checkbox}>
          <div className={style.checkbox}>
            <InputCheckbox
              label="I consent to my personal data"
              register={register}
            />
          </div>

          <div className={style.error}>{errors.permition?.message}</div>
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
