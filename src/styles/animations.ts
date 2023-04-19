import { css, keyframes } from 'styled-components';

interface AnimationParams {
  time?: string;
  type?: string;
  scale?: number;
}

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

const translateKeyframes = ({ scale }: AnimationParams) => keyframes`
from {
  transform: translateY(-100%) scale(${scale});
}
to {
  transform: translateY(0) scale(${scale});
}
`;

export const fadeIn = ({ time = '1s', type = 'ease' }: AnimationParams) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`;

export const verticalTranslate = ({ time = '1s', type = 'ease', scale = 1 }: AnimationParams) => css`
  animation: ${time} ${translateKeyframes({ scale })} ${type};
`;
