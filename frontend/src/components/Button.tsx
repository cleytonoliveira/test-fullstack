import { Link } from "react-router-dom";

type ButtonProps = {
  title: string;
  path: string;
};

export const Button: React.FC<ButtonProps> = ({ title, path }) => {
  return (
    <button>
      <Link to={path}>{title}</Link>
    </button>
  );
};
