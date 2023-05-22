import { FC } from "react";
import style from "./styles.module.scss";

const Footer: FC = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__content}>JobService</div>
    </div>
  );
};

export default Footer;
