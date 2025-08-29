const InputField = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  label,
}) => {
  return (
    <div>
      {label && <label className="block mb-2 font-medium">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border rounded-lg p-2 focus:ring-blue-500 outline-none ${className}`}
      />
    </div>
  );
};

export default InputField;
