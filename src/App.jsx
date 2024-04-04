import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import Card from './components/Card/Card.jsx';
import data from './mock/data.js';
import Results from './components/Results/Results.jsx';
import { calcResults } from './lib/helpers.js';
import { useEffect } from 'react';

// const userAnswers = [
//   {
//     questionId: 0,
//     optId: a,
//   }
// ];

const TEST_RESULTS_DEFAULTS = {
  totalCorrect: 0,
  totalFailed: 0,
  totalMissed: 0
};

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testResults, setTestResults] = useState(TEST_RESULTS_DEFAULTS);

  const handleIdState = (e) => {
    const value = Number(e.target.value);
    const lastQuestion = currentQuestion === data.questions.length - 1;
    const goBack = value < 0;
    if (lastQuestion && !goBack) return;
    setCurrentQuestion((prevId) => prevId + value);
  };

  const updateUserAnswers = ({questionId, optId}) => {
    const handleUserUpdate = (prev) => {
      const filtered = prev.filter((a) => a.questionId !== questionId);
      const next = [...filtered, {questionId, optId}];
      return next;
    };
    setUserAnswers(handleUserUpdate);
  };

  useEffect(() => {
    const results = calcResults(data.questions, userAnswers);
    setTestResults(results);
  }, [userAnswers]);

  const onTestSubmit = () => {
    setTestSubmitted(true);
  };

  return (
    <>
      <Header title={'Leben in Deutschland'} subtitle={'Einbürgerungstest'} />
      {!testSubmitted ? 
      (
        <Card
          data={data}
          questionId={currentQuestion}
          onButtonClick={handleIdState}
          updateUserAnswers={updateUserAnswers}
          onSubmit={onTestSubmit}
        />
      )
      :(
        <Results {...testResults} />
      )}
    </>
  );
}

export default App;
