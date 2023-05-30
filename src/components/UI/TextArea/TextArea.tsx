import { FC } from "react";
import { IProps } from "./interfaces";
import style from "./styles.module.scss";

const TextArea: FC<IProps> = ({ label, setPopupInfo, popupInfo }) => {
  return (
    <>
      <textarea
        placeholder={label}
        value={popupInfo}
        className={style.textarea}
        onChange={(e) => {
          setPopupInfo(e.target.value);
        }}
      />
    </>
  );
};

export default TextArea;
