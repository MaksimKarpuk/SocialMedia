import { FC } from "react";
import Header from "../components/modules/Header/Header";
import Footer from "../components/modules/Footer/Footer";
import style from "./styles.module.scss";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className={style.layout}>
      <div className={style.layout__container}>
        <div className={style.container__header}>
          <Header />
        </div>

        <div className={style.container__content}>{children}</div>
        <div className={style.container__footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
