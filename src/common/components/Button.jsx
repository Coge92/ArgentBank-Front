import styled from "styled-components";

const StyledButton = styled.button`
  font-weight: bold;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

const Button = (props) => {

    return (
        <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
    )
}

export default Button