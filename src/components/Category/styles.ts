import styled from 'styled-components';

const SIZE = '3rem';

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: ${SIZE};
`;

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: ${SIZE};
  width: ${SIZE};
  overflow: hidden;
  object-fit: cover;
`;
