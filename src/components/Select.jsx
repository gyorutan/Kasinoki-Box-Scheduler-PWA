import ReactSelect from "react-select";

const Select = ({
  isClearable,
  required,
  label,
  placeholder,
  value,
  onChange,
  options,
  isMulti,
  disabled,
}) => {
  return (
    <div className="z-[100]">
      <label className="block text-md font-medium text-white">
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          isClearable={isClearable}
          required={required}
          placeholder={placeholder}
          isDisabled={disabled}
          isMulti={isMulti}
          value={value}
          onChange={onChange}
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          classNames={{
            control: () => "text-sm",
          }}
        />
      </div>
    </div>
  );
};

export default Select;
