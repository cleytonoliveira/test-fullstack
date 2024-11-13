import { Link } from "react-router-dom";

type ButtonProps = {
  title: string;
  path: string;
  onClick?: () => void;
  style: string;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  path,
  onClick,
  style,
}) => {
  return (
    <button onClick={onClick} className={style}>
      <Link to={path}>{title}</Link>
    </button>
  );
};
