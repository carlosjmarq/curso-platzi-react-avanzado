import React from 'react';
import { Category } from '../Category';
import { List, ListItem } from './styles';
import { categories } from '../../../api/db.json';

const DEFAULT_IMAGE = 'https://cdn2.thecatapi.com/images/MTc4NzYzMg.jpg';

interface ListCategoriesProps {
  // path: string;
  // emoji: string;
  // cover?: string;
}

export const ListOfCategories = ({ ...props }: ListCategoriesProps): JSX.Element => {
  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category.id}>
          <Category {...category} />
        </ListItem>
      ))}
    </List>
  );
};
