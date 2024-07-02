/* eslint-disable react-hooks/exhaustive-deps */
import { InputNumber } from "antd";
import React, { useEffect } from "react";
const DebouncedInput = ({
  onChange = () => {},
  placeholder,
  variant,
  min,
  max,
  className,
  value,
}: {
  onChange: (value: number) => void;
  placeholder?: string;
  variant?: "outlined" | "borderless" | "filled";
  min?: number;
  max?: number;
  className?: string;
  value?: number;
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
    />
  );
};
export default DebouncedInput;