import { useState } from "react";

export interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

const Select = ({
  options,
  value,
  onChange,
  label,
  placeholder = "Select an option",
  className = "",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      {label && (
        <label className="block text-dark-200 font-medium mb-2">{label}</label>
      )}
      <div className="relative">
        <button
          type="button"
          className="relative w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
          text-left text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
          focus:border-transparent hover:bg-dark-600/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={!value ? "text-dark-400" : ""}>
            {value
              ? options.find((opt) => opt.value === value)?.label
              : placeholder}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${
                isOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <ul
              className="absolute z-20 w-full mt-1 bg-dark-700 border border-dark-600 
              rounded-lg shadow-lg max-h-60 overflow-auto"
            >
              {options.map((option) => (
                <li
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer hover:bg-dark-600 
                  ${
                    value === option.value
                      ? "text-primary-400"
                      : "text-dark-100"
                  }`}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Select;
