import styled from "@emotion/styled";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: center;
  align-items: center;
`;

export default FlexBox;

const Demo = () => {
  return (
    <FlexBox direction={"row-reverse"}>
      <h1>Hello World</h1>
    </FlexBox>
  );
};
