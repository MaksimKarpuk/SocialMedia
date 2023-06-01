import { FC } from "react";
import { IProps } from "./interfaces";
import style from "./styles.module.scss";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e3f2fd",
    },
  },
});
const Task: FC<IProps> = ({ data, deleteTask }) => {
  return (
    <>
      {data.map((task) => (
        <div
          className={style.task}
          key={task.id}
          draggable={true}
          // onDragStart={(e) => dragStartHandler(e, task)}
          // onDragLeave={(e) => dragLeaveHandler(e)}
          // onDragEnd={(e) => dragEndHandler(e)}
          // onDragOver={(e) => dragOverHandler(e)}
          // onDrop={(e) => dropHandler(e, task)}
        >
          <div className={style.task__header}>
            <div className={style.header__text}>{task.id}</div>
            <div
              className={style.header__delete_btn}
              onClick={() => deleteTask(task.id)}
            >
              <ThemeProvider theme={theme}>
                <IconButton aria-label="delete" size="small" color="primary">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </ThemeProvider>
            </div>
          </div>
          <div className={style.task__title}>{task.title}</div>
        </div>
      ))}
    </>
  );
};

export default Task;
