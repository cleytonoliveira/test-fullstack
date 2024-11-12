type SelectProps = {
  id: string;
  options: string[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: React.FC<SelectProps> = ({
  id,
  options,
  handleChange,
}) => {
  return (
    <select name="" id={id} onChange={handleChange}>
      <option value="" disabled selected>
        Status
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
