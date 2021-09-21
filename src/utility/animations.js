import { css, keyframes } from "styled-components";

const slideDownKeyframes = keyframes`
  0% {
    transform: translateY(-3.2rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const showUpKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: scale(.8)
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const showKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const slideDown = css`
  ${slideDownKeyframes} .2s ease;
`;

export const showUp = css`
  ${showUpKeyframes} .25s .35s ease both;
`;

export const showUpFast = css`
  ${showUpKeyframes} .25s ease;
`;

export const show = css`
  ${showKeyframes} .15s ease;
`;
