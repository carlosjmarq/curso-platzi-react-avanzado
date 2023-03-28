import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { ImageContainer, Image, LikeButton } from './styles';

const DEFAULT_IMAGE = 'https://cdn2.thecatapi.com/images/MTc4NzYzMg.jpg';

interface PhotoCardProps {
  id: number;
  src: string;
  likes?: number;
}

export const PhotoCard = ({ id, src, likes = 0, ...props }: PhotoCardProps): JSX.Element => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImageContainer>
          <Image src={src} />
        </ImageContainer>
      </a>
      <LikeButton>
        <AiFillHeart size="32px" />
        <AiOutlineHeart size="32px" />
        {likes} likes!
      </LikeButton>
    </article>
  );
};
