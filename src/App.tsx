import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { PhotoCardList } from './components/ListOfPhotoCards';
import { SvgLogo } from './components/Logo';
import { PhotoCard } from './components/PhotoCard';
import { GlobalStyles } from './styles/GlobalStyles';
import { GetCategoriesResponse } from './types/AxiosResponses';
import { CategoryType } from './types/Entities';

function App() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const categoriesRequest = axios.get(`${import.meta.env.VITE_API_URL}/categories`);
    Promise.all([categoriesRequest]).then(([{ data: categories }]: GetCategoriesResponse[]) => {
      setCategories(categories);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <SvgLogo />
      <ListOfCategories categories={categories} />
      <PhotoCardList />
    </>
  );
}

export default App;
