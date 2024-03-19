type CustomCardComponentProps = {
  title: string;
  footer: string;
  children: React.ReactNode;
};

const CustomCardComponent: React.FC<CustomCardComponentProps> = ({
  title,
  footer,
  children,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
};

export default CustomCardComponent;
