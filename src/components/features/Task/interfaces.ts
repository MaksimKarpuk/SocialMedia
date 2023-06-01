export interface IProps {
  data: ITask[];
  deleteTask: (id: number) => void;
}
interface ITask {
  id: number;
  title: string;
}
