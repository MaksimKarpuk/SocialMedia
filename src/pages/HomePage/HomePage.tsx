import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { addCollection } from "../../firebase";
import { IUser } from "../../interfases";
import style from "./styles.module.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  const setUser = (user: IUser) => {
    addCollection(user);
  };
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div className={style.homepage}>
      <div className={style.homepage__title}>
        Welcome in your personal web page, where you can make any different
        things, which can improve your work proces
      </div>
      <div className={style.homepage__add_button}>
        <Link to="/personal-form">
          <Button variant="contained">Add personal information</Button>{" "}
        </Link>
      </div>

      {/* <button
        onClick={() => setUser({ first: "Max", last: "Karpuk", born: 1995 })}
      >
        Add user
      </button> */}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
