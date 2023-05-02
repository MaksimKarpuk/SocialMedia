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
          required: true,
          pattern: /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{7,}$/,
        })}
      />
    </>
  );
};

export default Input;
