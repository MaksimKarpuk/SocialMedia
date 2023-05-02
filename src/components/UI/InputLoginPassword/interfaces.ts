import { UseFormRegister } from "react-hook-form/dist/types";

interface IFormValues {
  password: string;
}

export interface IProps {
  register: UseFormRegister<IFormValues>;
  placeholder: string;
}
