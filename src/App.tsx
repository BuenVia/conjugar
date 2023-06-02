import React, { useState } from 'react';
import { verbs } from './flashcard.model';
import './App.css';
import ConjugateCard from './components/ConjugateCard';

const App: React.FC = () => {

  const [verbIndex, setVerbIndex] = useState(0)
  const [verb, setVerb] = useState(verbs[verbIndex])

  return (
    <div className="App">
      <header>
        <h1>Conjugate</h1>
      </header>
      <main>
        <ConjugateCard verb={verb} />
      </main>
    </div>
  );
}

export default App;
