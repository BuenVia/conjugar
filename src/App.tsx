import React, { useState, useEffect } from 'react';
import { verbs } from './flashcard.model';
import './App.css';
import ConjugateCard from './components/ConjugateCard';

const App: React.FC = () => {

  const [verbIndex, setVerbIndex] = useState(0)

  const nextQuestionHandler = () => {
    setVerbIndex(prevVal => {
      return prevVal === 0 ? 1 : 0
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Conjugate</h1>
      </header>
      <main>
        <ConjugateCard verb={verbs[verbIndex]} nextQuestionHandler={nextQuestionHandler} />
      </main>
    </div>
  );
}

export default App;
