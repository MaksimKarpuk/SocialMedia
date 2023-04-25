import { FC } from "react";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";
import Form from "./Form";

const SignUp: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user"));
  };
  return (
    <>
      <Form title="Log In" handleClick={handleLogin} />
    </>
  );
};

export default SignUp;
