import { FC, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import style from "./styles.module.scss";
import Button from "@mui/material/Button";
import Popup from "../../components/UI/Popup/Popup";
import TextArea from "../../components/UI/TextArea/TextArea";
import { useAppSelector, useAppDispatch } from "../../hooks/useTypedSelector";
import { addTask } from "../../store/slices/userSlice";

const HomePage: FC = () => {
  const { isAuth } = useAuth();
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [popupInfo, setPopupInfo] = useState<string>("");
  const tasks = useAppSelector((state) => state.user.tasks);
  const dispatch = useAppDispatch();
  const addTask = (popupInfo: string) => {
    setIsPopup(false);
    dispatch(addTask({ taskName: popupInfo }));
  };
  return isAuth ? (
    <div className={style.homepage}>
      <div className={style.homepage__title}>
        Welcome in your personal web page, where you can make any different
        things, which can improve your work proces
      </div>
      <div className={style.homepage__add_button}>
        <Button variant="contained" onClick={() => setIsPopup(true)}>
          Add task
        </Button>
      </div>
      <div>{tasks}</div>
      {isPopup && (
        <div className={style.homepage__popup}>
          <Popup setIsPopup={setIsPopup} title="Task">
            <div className={style.textarea}>
              <TextArea label="Task name" setPopupInfo={setPopupInfo} />
            </div>
            <div className={style.popup__add_button}>
              <Button variant="contained" onClick={() => addTask(popupInfo)}>
                Add task
              </Button>
            </div>
          </Popup>
        </div>
      )}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
