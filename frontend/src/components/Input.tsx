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
      className="flex w-64 h-14 px-3 py-2 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  );
};
