//import from emotion
import styled from "@emotion/styled";

type CustomCardComponentProps = {
  title: string;
  footer: string;
  children: React.ReactNode;
  className?: string;
};

const StyleContentDiv = styled.div`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
`;

const CustomCardComponent: React.FC<CustomCardComponentProps> = ({
  title,
  footer,
  children,
  className,
}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <StyleContentDiv>{children}</StyleContentDiv>
      <div>{footer}</div>
    </div>
  );
};

export const CustomCardComponentWithSyled = styled(CustomCardComponent)`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
`;

export default CustomCardComponent;
