import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import Card from './components/Card/Card.jsx';
import data from './mock/data.js';

// const userAnswers = [
//   {
//     questionId: 0,
//     optId: a,
//   }
// ];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleIdState = (e) => {
    const value = Number(e.target.value);
    const lastQuestion = currentQuestion === data.questions.length - 1;
    const goBack = value < 0;
    if (lastQuestion && !goBack) return;
    setCurrentQuestion((prevId) => prevId + value);
  };

  const updateUserAnswers = ({questionId, optId}) => {
    const handleUserUpdate = (prev) => {
      console.log({userAnswers});
      console.log({prev});
      const filtered = prev.filter((a) => a.questionId !== questionId);
      const next = [...filtered, {questionId, optId}];
      return next;
    };
    setUserAnswers(handleUserUpdate);
  };

  return (
    <>
      <Header title={'Leben in Deutschland'} subtitle={'Einbürgerungstest'} />
      <Card
        data={data}
        questionId={currentQuestion}
        onButtonClick={handleIdState}
        updateUserAnswers={updateUserAnswers}
      />
    </>
  );
}

export default App;
