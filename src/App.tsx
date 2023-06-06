import React, { useState, useEffect } from 'react';
import { verbs } from './flashcard.model';
import './App.css';
import ConjugateCard from './components/ConjugateCard';
import VerbList from './components/VerbList';

const App: React.FC = () => {

  const [verbIndex, setVerbIndex] = useState(Math.floor(Math.random() * verbs.length))
  // const [conjugationIndex, setConjugationIndex] = useState(0)

  const nextQuestionHandler = () => {
    setVerbIndex(Math.floor(Math.random() * verbs.length))
    // setConjugationIndex(Math.floor(Math.random() * verbs[verbIndex].conjugations.length))
  }

  useEffect(() => {
    nextQuestionHandler()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Conjug-8</h1>
      </header>

        <ConjugateCard 
          // infinitive={verbs[verbIndex].infinitive}
          // translation={verbs[verbIndex].translation}
          verb={verbs[verbIndex]} 
          nextQuestionHandler={nextQuestionHandler} 
        />
        <VerbList verb={verbs[verbIndex]} />

    </div>
  );
}

export default App;
