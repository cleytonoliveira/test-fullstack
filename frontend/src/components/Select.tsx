type SelectProps = {
  defaultValue: string;
  options: string[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: React.FC<SelectProps> = ({
  defaultValue,
  options,
  handleChange,
}) => {
  return (
    <select
      name="status"
      id="status-select"
      value={defaultValue}
      onChange={handleChange}
    >
      <option value="" disabled>
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
