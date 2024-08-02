import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const SelectLabel: React.FC<Props> = ({ children, onClick = () => {} }) => {
  return (
    <span className="font-semibold" onClick={onClick}>
      {children}
    </span>
  );
};

export default SelectLabel;
