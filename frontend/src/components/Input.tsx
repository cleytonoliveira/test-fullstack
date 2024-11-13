type InputProps = {
  defaultValue: string;
  type: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  defaultValue,
  type,
  placeholder,
  handleChange,
}) => {
  return (
    <input
      defaultValue={defaultValue}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
