import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { removeUser } from "../../store/slices/userSlice";
import style from "./styles.module.scss";

const Header: FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const logOut = () => {
    dispatch(removeUser());
  };
  return (
    <>
      <div className={style.header}>
        <div className={style.header__logo}>JobService</div>
        <nav className={style.header__links}>Links</nav>
        {location.pathname === "/homepage" && (
          <div className={style.header__logout} onClick={logOut}>
            Log Out
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
