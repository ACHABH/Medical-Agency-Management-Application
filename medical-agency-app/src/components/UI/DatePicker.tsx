import React from "react";
import "./DatePicker.css";

interface DatePickerProps {
  label?: string;
  value: string;
  onChange: (date: string) => void;
  required?: boolean;
  error?: string;
  minDate?: string;
  disabled?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  required,
  error,
  minDate,
  disabled = false,
}) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`datepicker-group ${error ? "has-error" : ""}`}>
      {label && (
        <label className="datepicker-label">
          {label}
          {required && <span className="required-marker">*</span>}
        </label>
      )}
      <input
        type="date"
        value={value}
        onChange={handleDateChange}
        min={minDate}
        required={required}
        disabled={disabled}
        className="datepicker-input"
      />
      {error && <span className="datepicker-error">{error}</span>}
    </div>
  );
};

export default DatePicker;
