import styled, {css} from "styled-components";

const Card = styled.section`
  background: ${(props) => props.high ? props.theme.high_elevation : props.theme.mid_elevation };
  box-sizing: border-box;
  border-radius: .4rem;
  width: 100%;
  
  height: ${(props) => props.height || ""};
  ${(props) => props.elevate ? `box-shadow: 0 .4rem .4rem rgba(0,0,0, .05)` : ""};
  ${(props => css`${props.css}`)};
`

export default Card;