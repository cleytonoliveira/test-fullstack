type InputProps = {
  type: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  handleChange,
}) => {
  return (
    <input type={type} placeholder={placeholder} onChange={handleChange} />
  );
};
