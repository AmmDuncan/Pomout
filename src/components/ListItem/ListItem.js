import styled from "styled-components";

const ListItem = styled.li`
  box-sizing: border-box;
  margin: 0 0 0.4rem;
  list-style: none;
  background: ${(props) => props.theme.high_elevation};
  border-radius: 0.4rem;
  width: 100%;
  height: 4.8rem;
  min-height: 4.8rem;
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
`;

export default ListItem;
