import React from "react";
import "./Input.css";

interface InputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  required,
  error,
  disabled = false,
  multiline = false,
  rows = 3,
}) => {
  return (
    <div className={`input-group ${error ? "has-error" : ""}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required-marker">*</span>}
        </label>
      )}
      {multiline ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          rows={rows}
          className="input-field textarea-field"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className="input-field"
        />
      )}
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;
