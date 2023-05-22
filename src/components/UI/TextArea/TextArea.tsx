import { FC } from "react";
import { IProps } from "./interfaces";
import style from "./styles.module.scss";

const TextArea: FC<IProps> = ({ label, setPopupInfo }) => {
  return (
    <>
      <textarea
        placeholder={label}
        className={style.textarea}
        onChange={(e) => {
          setPopupInfo(e.target.value);
        }}
      />
    </>
  );
};

export default TextArea;
