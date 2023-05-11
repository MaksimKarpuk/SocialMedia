import { FC } from "react";
import TextField from "@mui/material/TextField";
import { UseFormRegister } from "react-hook-form/dist/types";

interface IFormValues {
  firstName?: string;
}

interface IProps {
  register: UseFormRegister<IFormValues>;
}
const InputText: FC<IProps> = ({ register }: IProps) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="First name"
        variant="outlined"
        sx={{ width: "25rem" }}
        {...register("firstName", {
          required: {
            value: true,
            message: "Required first name value",
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
