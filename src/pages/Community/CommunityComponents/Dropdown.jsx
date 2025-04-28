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
        className="dropdown-select w-full p-3 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30"
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