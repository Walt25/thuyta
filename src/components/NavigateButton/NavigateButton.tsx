import React from "react";
import { Button, ButtonProps } from "antd"; // Import Button và ButtonProps
import { useNavigate } from "react-router-dom";

interface NavigateButtonProps extends ButtonProps {
  to: string; // Thêm prop 'to' để điều hướng
}

const NavigateButton: React.FC<NavigateButtonProps> = ({ to, ...rest }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // Điều hướng đến đường dẫn
  };

  return (
    <Button {...rest} onClick={handleClick}>
      {rest.children}
    </Button>
  );
};

export default NavigateButton;
