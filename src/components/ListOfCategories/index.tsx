import { Category } from '../Category';
import { List, ListItem } from './styles';
import axios from 'axios';
import { CategoryType } from '../../types/Entities';
import { useEffect, useState } from 'react';

interface ListCategoriesProps {
  categories: CategoryType[];
}

export const ListOfCategories = ({ categories, ...props }: ListCategoriesProps): JSX.Element => {
  const [showFixed, setShowFixed] = useState<Boolean>(false);

  useEffect(() => {
    const onScroll = (event: Event): void => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    window.addEventListener('scroll', onScroll);
    console.log('hfdsajkfhak');

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);

  const renderCategoryList = (fixed: Boolean = false): JSX.Element => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category) => (
        <ListItem key={category.id}>
          <Category {...category} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {renderCategoryList()}
      {showFixed && renderCategoryList(showFixed)}
    </>
  );
};
