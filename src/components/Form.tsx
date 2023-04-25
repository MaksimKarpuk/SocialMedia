import { FC, useState } from "react";

interface IProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Form: FC<IProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const submit = (email: string, pass: string) => {
    handleClick(email, pass);
    setEmail("");
    setPass("");
  };
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => submit(email, pass)}>{title}</button>
    </div>
  );
};

export default Form;
