import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
from {
  filter: blur(5px);
  opacity: 0;
}
to {
  filter: blur(0px);
  opacity: 1;
}
`;

export const fadeIn = (time: string = '1s', type: string = 'ease') => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`;
