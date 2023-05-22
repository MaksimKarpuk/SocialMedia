import { FC } from "react";
import { UseFormRegister } from "react-hook-form/dist/types";

interface IFormValues {
  thirdName?: string;
}

interface IProps {
  register: UseFormRegister<IFormValues>;
  placeholder: string;
}
const InputText: FC<IProps> = ({ register, placeholder }: IProps) => {
  return (
    <>
      <input type="text" placeholder={placeholder} {...register("thirdName")} />
    </>
  );
};

export default InputText;
