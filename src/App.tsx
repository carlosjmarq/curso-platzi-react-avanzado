import { useState } from 'react';
import { Category } from './components/Category';

function App() {
  return (
    <div className="App">
      <h1>Petgram</h1>
      <Category path={'fhdjskafh'} emoji={'abc'} />
    </div>
  );
}

export default App;
