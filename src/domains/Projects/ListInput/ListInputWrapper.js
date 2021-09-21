import styled from "styled-components";

const ListInputWrapper = styled.form`
  box-sizing: border-box;
  width: 100%;
  height: 5.2rem;
  min-height: 5.2rem;
  border: 1px solid ${({ theme }) => theme.header_border};
  background: ${({ theme }) => theme.high_elevation};
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  padding: 0.4rem 0.4rem 0.4rem 0.6rem;
  border-radius: 0.8rem;
  position: sticky;
  top: -3.6rem;
  z-index: 10;

  &:focus-within {
    outline: 2px solid ${(props) => props.theme.primary}66;
    box-shadow: 0 0.8rem 1.2rem rgba(0, 0, 0, 0.1);
  }
`;

export default ListInputWrapper;
