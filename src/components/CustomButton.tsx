import { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default CustomButton;
