import React from "react";

const SelectLabel = ({
  children,
  onClick = () => {},
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <span className="font-semibold" onClick={onClick}>
      {children}
    </span>
  );
};

export default SelectLabel;
