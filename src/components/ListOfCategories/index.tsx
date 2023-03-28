import { Category } from '../Category';
import { List, ListItem } from './styles';
import axios from 'axios';
import { CategoryType } from '../../types/Entities';

interface ListCategoriesProps {
  categories: CategoryType[];
}

export const ListOfCategories = ({ categories, ...props }: ListCategoriesProps): JSX.Element => {
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
