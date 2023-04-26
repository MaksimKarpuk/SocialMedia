import { FC } from "react";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { removeUser } from "../store/slices/userSlice";
import { addCollection } from "../firebase";
import { IUser } from "../interfases";

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const logOut = () => {
    dispatch(removeUser());
  };
  const setUser = (user: IUser) => {
    addCollection(user);
  };
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <>
      <div>Welcome!!!</div>
      <button onClick={logOut}>Log Out {email}</button>
      <button
        onClick={() => setUser({ first: "Max", last: "Karpuk", born: 1995 })}
      >
        Add user
      </button>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
