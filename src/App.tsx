import React, { useState, useEffect } from 'react';
import { verbList } from './flashcard.model';
import './App.css';
import ConjugateCard from './components/ConjugateCard';

const App: React.FC = () => {

  const [verbIndex, setVerbIndex] = useState(0)
  const [conjugationIndex, setConjugationIndex] = useState(0)

  const nextQuestionHandler = () => {
    setVerbIndex(Math.floor(Math.random() * verbList.length))
    setConjugationIndex(Math.floor(Math.random() * verbList[verbIndex].conjugations.length))
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
          infinitive={verbList[verbIndex].infinitive}
          translation={verbList[verbIndex].translation}
          verb={verbList[verbIndex].conjugations[conjugationIndex]} 
          nextQuestionHandler={nextQuestionHandler} 
          conjugationList={verbList[verbIndex].conjugations}
        />

    </div>
  );
}

export default App;
