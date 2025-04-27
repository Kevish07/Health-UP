import React from 'react';

const Dropdown = ({
  options,
  value,
  onChange,
  label,
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      {label && (
        <label className="block text-gray-700 mb-2 font-medium">
          {label}
        </label>
      )}
      <select
        className="dropdown-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;