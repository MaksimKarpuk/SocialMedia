import { FC } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { UseFormRegister } from "react-hook-form/dist/types";

interface IFormValues {
  date?: Date;
}

interface IProps {
  register: UseFormRegister<IFormValues>;
}
const InputDate: FC<IProps> = ({ register }: IProps) => {
  return (
    <>
      <input
        type="date"
        {...register("birthdayDate", {
          required: {
            value: true,
            message: "Required field",
          },
        })}
      />
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Birthday date"
            {...register("date", {
              required: {
                value: true,
                message: "Fill date field",
              },
            })}
          />
        </DemoContainer>
      </LocalizationProvider> */}
    </>
  );
};

export default InputDate;
