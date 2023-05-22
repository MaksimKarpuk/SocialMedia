import { FC } from "react";
import { UseFormRegister } from "react-hook-form/dist/types";

interface IFormValues {
  firstName?: string;
}

interface IProps {
  register: UseFormRegister<IFormValues>;
  placeholder: string;
}
const InputText: FC<IProps> = ({ register, placeholder }: IProps) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        {...register("firstName", {
          required: {
            value: true,
            message: "Required field",
          },
          maxLength: {
            value: 15,
            message: "Max length is 15 letters",
          },
          validate: {
            capitalFirstLetter: (fieldValue: string) => {
              if (
                fieldValue.split("")[0] !==
                fieldValue.split("")[0].toUpperCase()
              ) {
                return "First name must start with capital letter";
              }
            },
          },
        })}
      />
    </>
  );
};

export default InputText;
