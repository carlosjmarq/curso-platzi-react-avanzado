import React from 'react';
import { Anchor, Image } from './styles';

const DEFAULT_IMAGE = 'https://cdn2.thecatapi.com/images/MTc4NzYzMg.jpg';

interface CategoryProps {
  path: string;
  emoji?: string;
  cover?: string;
}

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?', ...props }: CategoryProps): JSX.Element => {
  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  );
};
