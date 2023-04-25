import { FC } from "react";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { removeUser } from "../store/slices/userSlice";

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(removeUser());
  };
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <>
      <div>Welcome!!!</div>
      <button onClick={logout}>Log Out {email}</button>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
