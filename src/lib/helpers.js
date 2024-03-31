const handleOptSelect = (setSelectState) => 
(e) => {
  const {id} = e.target;
  setSelectState(id);
};

const calcResults = (questions, userAnswers) => {
  let totalCorrect = 0;
  let totalFailed = 0;
  const totalMissed = questions.length - userAnswers.length;

  for (const userAnswer of userAnswers) {
    const question = questions.find((q) => q.id === userAnswer.questionId);
    const option = question.options.find((opt) => opt.label === userAnswer.optId);
    if (option.correct) {
        totalCorrect += 1;
      } else {
        totalFailed += 1;
      }
    }

  return {
    totalCorrect,
    totalFailed,
    totalMissed
  };
};


export {
  handleOptSelect,
  calcResults
};
