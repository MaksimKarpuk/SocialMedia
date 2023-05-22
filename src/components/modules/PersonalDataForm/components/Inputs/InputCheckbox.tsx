import { FC } from "react";
import { UseFormRegister } from "react-hook-form/dist/types";

interface IFormValues {
  permition?: string;
}

interface IProps {
  label: string;
  register: UseFormRegister<IFormValues>;
}
const InputCheckbox: FC<IProps> = ({ label, register }: IProps) => {
  return (
    <>
      <input
        type="checkbox"
        {...register("permition", {
          required: { value: true, message: "Required field" },
        })}
      />
      <label>{label}</label>
    </>
  );
};

export default InputCheckbox;
