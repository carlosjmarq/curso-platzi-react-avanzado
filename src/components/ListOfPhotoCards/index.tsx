import React from 'react';
// import { ImageContainer, Image, LikeButton } from './styles';

import { photos } from '../../../api/db.json';
import { PhotoCard } from '../PhotoCard';

interface PhotoCardListProps {}

export const PhotoCardList = ({ ...props }: PhotoCardListProps): JSX.Element => {
  return <ul>{photos && photos.map((photo) => <PhotoCard {...photo} key={photo.id} />)}</ul>;
};
