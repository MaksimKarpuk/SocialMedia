import { FC } from "react";
import { IProps } from "./interfaces";
import TextField from "@mui/material/TextField";

const Input: FC<IProps> = ({ register, placeholder }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        
        placeholder={placeholder}
        {...register("email", {
          required: { value: true, message: "Email is required" },
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Invalid email value",
          },
        })}
      />
    </>
  );
};

export default Input;
