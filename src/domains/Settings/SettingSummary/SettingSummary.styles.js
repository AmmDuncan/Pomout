import styled from "styled-components";
import { Unit } from "../SettingsForm/SettingsForm.styles";
import Button, { ButtonPrimary } from "../../../components/Button/Button";
import breakpoints from "../../../utility/breakpoints";

export const SettingSummaryWrapper = styled.section`
  line-height: 1.8;
  padding: 1.6rem 2rem;
  box-sizing: border-box;
  width: 96%;
  margin: 0 auto;
  color: ${({ theme }) => theme.text_400};
  border: 2px dashed ${({ theme }) => theme.text}22;
  border-radius: 0.8rem;
  display: flex;
  //flex-flow: column;
  align-content: center;
  justify-content: space-between;
  z-index: 10;

  @media screen and ${breakpoints.tabletS} {
    flex-flow: column;
  }
`;

export const Value = styled.span`
  display: inline-block;
  margin: 0 0 0 0.4rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const SummaryUnit = styled(Unit)`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 1.2rem;
`;

export const SummaryButton = styled(ButtonPrimary)`
  align-self: center;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05),
    0 1px 2px inset rgba(255, 255, 255, 0.05);
  transition: 0.15s ease;
  transform: scale(1.05);

  &:active {
    background: ${(props) => props.theme.primary_900};
  }

  @media screen and ${breakpoints.tabletS} {
    align-self: flex-start;
    margin-top: 2.4rem;
  }
`;

export const SummaryButtonRed = styled(Button)`
  align-self: center;
  background: ${(props) => props.theme.text}ff;
  background: crimson;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.05),
    0 1px 2px inset rgba(255, 255, 255, 0.05);
  transition: 0.15s ease;
  transform: scale(1.05);
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  color: #fff;
  font-weight: 500;
  font-family: "inter", sans-serif;

  &:hover {
    background: ${(props) => props.theme.text}bb;
    background: #c31a3a;
  }

  &:active {
    background: ${(props) => props.theme.text}88;
    background: #b21431;
  }

  @media screen and ${breakpoints.tabletS} {
    align-self: flex-end;
    margin-top: 2.4rem;
  }
`;
