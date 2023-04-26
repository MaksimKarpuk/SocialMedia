import { FC } from "react";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";
import Form from "./Form";

const SignUp: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/homepage");
      })
      .catch(console.error);
  };
  return (
    <>
      <Form title="Register" handleClick={handleRegister} />
    </>
  );
};

export default SignUp;
