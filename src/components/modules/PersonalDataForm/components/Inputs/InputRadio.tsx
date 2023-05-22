import { FC } from "react";
import { UseFormRegister } from "react-hook-form/dist/types";

interface IFormValues {
  gender?: string;
}

interface IProps {
  label: string;
  value: string;
  register: UseFormRegister<IFormValues>;
}
const InputRadio: FC<IProps> = ({ label, register, value }: IProps) => {
  return (
    <>
      <input
        type="radio"
        value={value}
        {...register("gender", {
          required: {
            value: true,
            message: "Required field",
          },
        })}
      />
      <label>{label}</label>
    </>
  );
};

export default InputRadio;
