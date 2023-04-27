import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { addCollection } from "../../firebase";
import { IUser } from "../../interfases";

const HomePage: FC = () => {
  const setUser = (user: IUser) => {
    addCollection(user);
  };
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <>
      <div>Welcome!!!</div>

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
