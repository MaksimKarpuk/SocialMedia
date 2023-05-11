import { FC } from "react";
import TextField from "@mui/material/TextField";
import { UseFormRegister } from "react-hook-form/dist/types";

interface IFormValues {
  secondName?: string;
}

interface IProps {
  register: UseFormRegister<IFormValues>;
}
const InputText: FC<IProps> = ({ register }: IProps) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Second name"
        variant="outlined"
        sx={{ width: "25rem" }}
        {...register("secondName", {
          required: {
            value: true,
            message: "Required second name value",
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
                return "Second name must start with capital letter";
              }
            },
          },
        })}
      />
    </>
  );
};

export default InputText;
