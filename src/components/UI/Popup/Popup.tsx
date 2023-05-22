import { FC } from "react";
import style from "./styles.module.scss";
import { IProps } from "./interfaces";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Popup: FC<IProps> = ({ children, setIsPopup, title }) => {
  return (
    <>
      <div className={style.popup} onClick={() => setIsPopup(false)}>
        <div
          className={style.popup__container}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.container__header}>
            <div className={style.header__title}>{title}</div>
            <div
              className={style.header__delete_btn}
              onClick={() => setIsPopup(false)}
            >
              <IconButton aria-label="close" size="small" color="inherit">
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
          <div className={style.container__content}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Popup;
