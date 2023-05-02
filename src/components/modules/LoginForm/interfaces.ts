export interface IProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}
export interface IFormInput {
  email: string;
  password: string;
}
