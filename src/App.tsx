import React, { useState, useEffect } from 'react';
import { verbList } from './flashcard.model';
import './App.css';
import ConjugateCard from './components/ConjugateCard';

const App: React.FC = () => {

  const [verbIndex, setVerbIndex] = useState(0)

  const nextQuestionHandler = () => {
    setVerbIndex(Math.floor(Math.random() * verbList.length))
  }

  useEffect(() => {
    nextQuestionHandler()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Conjugate</h1>
      </header>
      <main>
        <ConjugateCard 
          verb={verbList[verbIndex]} 
          nextQuestionHandler={nextQuestionHandler} 
        />
      </main>
    </div>
  );
}

export default App;
