import { useState } from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { PhotoCardList } from './components/ListOfPhotoCards';
import { SvgLogo } from './components/Logo';
import { PhotoCard } from './components/PhotoCard';
import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <SvgLogo />
      <ListOfCategories />
      <PhotoCardList />
    </>
  );
}

export default App;
