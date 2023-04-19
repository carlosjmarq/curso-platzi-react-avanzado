import styled from 'styled-components';
import { verticalTranslate } from '../../styles/animations';

const fixedScale = 0.75;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  width: 100%;
  &.fixed {
    ${verticalTranslate({ scale: fixedScale })}
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 600px;
    width: fit-content;
    padding: 5px;
    right: 0;
    position: fixed;
    top: -5px;
    z-index: 1;
    transform: scale(${fixedScale});
  }
`;

export const ListItem = styled.li`
  padding: 0rem 0.5rem;
`;
