import { FC, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import style from "./styles.module.scss";
import Button from "@mui/material/Button";
import Popup from "../../components/UI/Popup/Popup";
import TextArea from "../../components/UI/TextArea/TextArea";
import { useGetTasksQuery, useSetTasksMutation } from "../../store/api/tasks";

interface ITask {
  id: number;
  title: string;
}

const HomePage: FC = () => {
  const { isAuth } = useAuth();

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTasksQuery();
  const [setTasks] = useSetTasksMutation();
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [popupInfo, setPopupInfo] = useState<string>("");
  const handleTasks = async (popupInfo: string) => {
    await setTasks({
      title: popupInfo,
    }).unwrap();
  };
  const setTask = () => {
    setIsPopup(false);
    handleTasks(popupInfo);
    setPopupInfo("");
    console.log(data);
  };
  useEffect(() => {
    console.log(data);
  }, []);

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
      <div className={style.homepage__tasks}>
        {data.map((task: ITask) => (
          <div className={style.tasks__task} key={task.id}>
            <div className={style.task__text}>{task.title}</div>
          </div>
        ))}
      </div>
      {isPopup && (
        <div className={style.homepage__popup}>
          <Popup setIsPopup={setIsPopup} title="Task">
            <div className={style.textarea}>
              <TextArea
                label="Task name"
                setPopupInfo={setPopupInfo}
                popupInfo={popupInfo}
              />
            </div>
            <div className={style.popup__add_button}>
              <Button variant="contained" onClick={() => setTask(popupInfo)}>
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
