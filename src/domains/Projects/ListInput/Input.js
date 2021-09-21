import styled from "styled-components";

const Input = styled.input`
  background: ${({ theme }) => theme.high_elevation};
  border: none;
  padding: 0.8rem 1.2rem;
  font-size: 1.6rem;
  font-family: "Inter", sans-serif;
  color: ${(props) => props.theme.text_400};
  font-weight: 500;
  flex: 1 1 auto;
  margin-right: 0.5rem;

  @media screen and (max-width: 400px) {
    width: 70%;
  }

  &::placeholder {
    color: ${(props) => props.theme.text_300};
  }

  &:focus-visible {
    outline: none;
    border: none;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export default Input;
