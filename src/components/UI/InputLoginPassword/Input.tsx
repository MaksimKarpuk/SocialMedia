import { FC } from "react";
import { IProps } from "./interfaces";
import TextField from "@mui/material/TextField";

const Input: FC<IProps> = ({ register, placeholder }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        autoComplete="current-password"
        placeholder={placeholder}
        {...register("password", {
          required: { value: true, message: "Password is required" },
          validate: {
            passLength: (fieldValue: string) => {
              if (fieldValue.length < 7) {
                return "At least 7 letters";
              }
            },
            // specSymbol: (fieldValue: string) => {
            //   if (
            //     !fieldValue.includes("!") &&
            //     !fieldValue.includes("@") &&
            //     !fieldValue.includes("#") &&
            //     !fieldValue.includes("$") &&
            //     !fieldValue.includes("%") &&
            //     !fieldValue.includes("^") &&
            //     !fieldValue.includes("&") &&
            //     !fieldValue.includes("*")
            //   ) {
            //     return "Need at least 1 special symbol (!@#$%^&*)";
            //   }
            // },
          },
        })}
      />
    </>
  );
};

export default Input;
