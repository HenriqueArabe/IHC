
import { ChangeEvent } from 'react';

interface CalculatorInputProps {
  label: string;
  id: string;
  type?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const CalculatorInput = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  className = '',
}: CalculatorInputProps) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={id} className="block text-white mb-2 text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`eco-input w-full bg-white/10 border border-white/30 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 ${className}`}
      />
    </div>
  );
};

export default CalculatorInput;
