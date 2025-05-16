
import React, { ChangeEvent } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CalculatorSelectProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  className?: string;
}

const CalculatorSelect: React.FC<CalculatorSelectProps> = ({
  label,
  id,
  value,
  onChange,
  options,
  className = '',
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-white font-medium mb-2"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`eco-select w-full ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-black bg-white">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CalculatorSelect;
