import { FC } from "react";
import { UseFormRegister } from "react-hook-form/dist/types";

interface IFormValues {
  job?: string;
}

interface IProps {
  register: UseFormRegister<IFormValues>;
}
const InputSelector: FC<IProps> = ({ register }) => (
  <>
    <select
      {...register("job", {
        required: {
          value: true,
          message: "Required field",
        },
      })}
    >
      <option value="">Select your job title</option>
      <option value="Economist">Economist</option>
      <option value="Enginer">Enginer</option>
      <option value="Manager">Manager</option>
      <option value="Repair enginer">Repair enginer</option>
    </select>
  </>
);
export default InputSelector;
