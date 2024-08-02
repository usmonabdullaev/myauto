/* eslint-disable react-hooks/exhaustive-deps */
import { InputNumber } from "antd";
import React, { useEffect } from "react";

interface Props {
  onChange: (value: number) => void;
  placeholder?: string;
  variant?: "outlined" | "borderless" | "filled";
  min?: number;
  max?: number;
  className?: string;
  value?: number;
  disabled?: boolean;
}

const DebouncedInput: React.FC<Props> = ({
  onChange = () => {},
  placeholder,
  variant,
  min,
  max,
  className,
  value,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = React.useState(0);
  const [debouncedValue, setDebouncedValue] = React.useState(0);
  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);
  const handleInputChange = (e: number) => {
    setInputValue(e);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);
  return (
    <InputNumber
      placeholder={placeholder}
      variant={variant}
      controls={false}
      min={min}
      max={max}
      className={className}
      onChange={(n) => handleInputChange(n || 0)}
      value={value}
      disabled={disabled}
    />
  );
};
export default DebouncedInput;
