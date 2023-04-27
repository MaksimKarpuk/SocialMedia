import { FC } from "react";
import { title, subtitle } from "./data";
import { Link } from "react-router-dom";
import image from "../../assets/images/welcome.svg";
import style from "./styles.module.scss";

const WelcomePage: FC = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.container__content}>
          <div className={style.content__title}>{title}</div>
          <div className={style.content__subtitle}>{subtitle}</div>
          <div className={style.content__buttons}>
            <Link to="/login">
              <div className={style.buttons__btn}>Log In</div>
            </Link>
            <Link to="/register">
              <div className={style.buttons__btn}>Sign Up</div>
            </Link>
          </div>
        </div>
        <div className={style.container__image}>
          <img src={image} alt="image" />
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
