type SelectProps = {
  id: string;
  options: string[];
};

export const Select: React.FC<SelectProps> = ({ id, options }) => {
  return (
    <select name="" id={id}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
