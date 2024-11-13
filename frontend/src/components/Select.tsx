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
      className="flex w-64 h-14 px-3 py-2 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
