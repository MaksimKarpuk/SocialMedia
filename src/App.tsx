import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/SignUpPage/SignUp";
import Errorpage from "./pages/ErrorPage/ErrorPage";
import PersonalDataFormPage from "./pages/PersonalDataFormPage/PersonalDataFormPage";
import ProfilPage from "./pages/ProfilPage/ProfilPage";
import Layout from "./layout/Layout";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" Component={WelcomePage} />
          <Route path="/homepage" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/personal-form" Component={PersonalDataFormPage} />
          <Route path="/profil" Component={ProfilPage} />
          <Route path="*" Component={Errorpage} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
