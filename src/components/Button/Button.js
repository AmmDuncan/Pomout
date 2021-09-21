import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-out;
  border: none;
  font-size: 1.6rem;
  background: transparent;
  color: ${(props) => props.theme.text};
  //min-height: 3.2rem;

  &:hover {
    background: ${(props) => props.theme.background}66;
  }

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

export const ButtonSecondary = styled(Button)`
  background: ${(props) => props.theme.text}11;
  color: ${(props) => props.theme.text};

  &:hover {
    background: ${(props) => props.theme.text}66;
  }

  &:active {
    background: ${(props) => props.theme.background}aa;
  }
`;

export const ButtonPrimary = styled(Button)`
  background: ${(props) => props.theme.primary};
  color: #ffffff;
  align-self: center;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05),
    0 1px 2px inset rgba(255, 255, 255, 0.05);
  transition: 0.2s ease;
  transform: scale(1.05);

  &:hover {
    background: ${(props) => props.theme.primary_700};
  }

  &:active {
    background: ${(props) => props.theme.primary_900};
  }
`;

export default Button;
