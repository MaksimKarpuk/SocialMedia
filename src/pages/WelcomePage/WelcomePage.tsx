import { FC } from "react";
import { title, subtitle } from "./data";
import style from "./styles.module.scss";

const WelcomePage: FC = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subtitle}</div>
      </div>
    </>
  );
};

export default WelcomePage;
