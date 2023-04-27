import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./styles.module.scss";

const Header: FC = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.header__logo}>
          <Link to="/">JobService</Link>
        </div>
        <nav className={style.header__links}>Links</nav>
      </div>
    </>
  );
};

export default Header;
