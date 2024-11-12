import { Link } from "react-router-dom";

type ButtonProps = {
  title: string;
  path: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ title, path, onClick }) => {
  return (
    <button onClick={onClick}>
      <Link to={path}>{title}</Link>
    </button>
  );
};
