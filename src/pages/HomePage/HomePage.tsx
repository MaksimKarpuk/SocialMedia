import { FC, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import style from "./styles.module.scss";
import Button from "@mui/material/Button";
import Popup from "../../components/UI/Popup/Popup";
import TextArea from "../../components/UI/TextArea/TextArea";
import Tasks from "../../components/features/Task/Task";
import {
  useGetTasksQuery,
  useSetTasksMutation,
  useDeleteTasksMutation,
} from "../../store/api/tasks";

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
  const [deleteTasks] = useDeleteTasksMutation();
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [popupInfo, setPopupInfo] = useState<string>("");
  const handleTasks = async (popupInfo: string) => {
    await setTasks({
      title: popupInfo,
    }).unwrap();
  };
  const handleDeleteTasks = async (id: number) => {
    await deleteTasks(id).unwrap();
  };
  const setTask = (popupInfo: string) => {
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
        <div className={style.homepage__new_tasks}>
          <Tasks data={data} deleteTask={handleDeleteTasks} />
        </div>
        <div className={style.homepage__inprogres_tasks}></div>
        <div className={style.homepage__closed_tasks}></div>
      </div>
      {isPopup && (
        <div className={style.homepage__popup}>
          <Popup setIsPopup={setIsPopup} title="Task">
            <div className={style.popup__textarea}>
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
