import { FC } from "react";
import style from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ProfilPage: FC = () => {
  return (
    <>
      <div className={style.profil}>
        <div className={style.profil__add_button}>
          <Link to="/personal-form">
            <Button variant="contained">Add personal information</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
