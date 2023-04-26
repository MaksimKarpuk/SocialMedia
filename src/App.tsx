import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Errorpage from "./pages/ErrorPage";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={WelcomePage} />
        <Route path="/homepage" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="*" Component={Errorpage} />
      </Routes>
    </>
  );
};

export default App;
