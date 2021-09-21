import styled from "styled-components";
import InputFromList from "../../Projects/ListInput/Input";
import breakpoints from "@utility/breakpoints";

export const Form = styled.form`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  //align-items: center;
  align-content: flex-start;
  padding-bottom: 2.4rem;
  margin-top: 1.6rem;
`;

export const SettingCard = styled.article`
  box-sizing: border-box;
  height: 12.2rem;
  padding: 2.4rem;
  margin: 0.8rem;
  flex-basis: 45%;
  min-width: 26rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1),
    0 1px 2px inset rgba(255, 255, 255, 0.075);
  background: ${(props) => props.theme.high_elevation};

  @media screen and ${breakpoints.tablet} {
    min-width: 25rem;
  }

  @media screen and ${breakpoints.tabletS} {
    min-width: 90%;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1.6rem;
`;

export const Input = styled(InputFromList)`
  max-width: 10.4rem;
  border-radius: .4rem;
  border: 2px solid ${(props) => props.theme.text}17;
  text-align: center;
  box-sizing: border-box;
  color: ${(props) => props.theme.text}cc;
  background: ${(props) => props.mid_elevation}ff;


  &:focus {
    border: 2px solid ${(props) => props.theme.primary};
`;

export const Unit = styled.span`
  display: inline-block;
  margin-left: 0.2rem;
  color: ${(props) => props.theme.text_300};
  font-weight: 400;
  font-size: 1.6rem;
`;
