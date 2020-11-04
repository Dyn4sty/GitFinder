import React from "react";

interface SelectProps {
  label: string;
  value?: string;
  onChange: (e: string) => void;
  placeholder?: string;
  options?: Options;
}

export type Options = { value?: string; label?: string }[];

const Select = ({ label, value, onChange, options, className }: SelectProps) => {
  const selectClass = className ? `${className} field` : 'field';

  return (
    <div className={selectClass}>
      <div className="control">
        <label className="label">{label}</label>
        <div className="select is-primary">
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;
