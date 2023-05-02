import { FC } from "react";
import { IProps } from "./interfaces";
import Button from "@mui/material/Button";

const ButtonSubmit: FC<IProps> = ({ title }) => {
  return (
    <>
      <Button variant="contained" type="submit">
        {title}
      </Button>
    </>
  );
};

export default ButtonSubmit;
