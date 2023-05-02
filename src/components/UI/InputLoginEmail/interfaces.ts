import { UseFormRegister } from "react-hook-form/dist/types";

interface IFormValues {
  email: string;
}

export interface IProps {
  register: UseFormRegister<IFormValues>;
  placeholder: string;
}
