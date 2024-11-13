import { Link } from "react-router-dom";

type ButtonProps = {
  title: string;
  path?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style: string;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  path,
  onClick,
  style,
}) => {
  return path ? (
    <Link to={path}>
      <button onClick={onClick} className={style}>
        {title}
      </button>
    </Link>
  ) : (
    <button onClick={onClick} className={style}>
      {title}
    </button>
  );
};
